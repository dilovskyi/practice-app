function List() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

function setIndexes(list) {
  let currentElem = list.head;
  let indexCounter = 0;

  while (currentElem) {
    currentElem.index = indexCounter++;
    currentElem = currentElem.next;
  }
}

List.prototype.push = function (value) {
  const node = new Node(value);

  if (!this.head) {
    // TODO: We can add header and tail at the same time
    // this.head = new Node(value);
    // this.tail = new Node(value);
    // this.head.next = this.tail;

    this.head = node;
  } else {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

List.prototype.pop = function () {
  // Return if no head or one element in the list
  if (!this.head || !this.head.next) {
    return (this.head = null);
  }

  let prev = null;
  let current = this.head;

  while (current.next) {
    prev = current;
    current = current.next;
  }

  prev.next = null;
};

List.prototype.unshift = function (value) {
  const node = new Node(value);
  node.next = this.head;
  this.head = node;
};

List.prototype.shift = function () {
  if (!this.head) {
    return null;
  }
  let newHead = this.head.next;
  this.head = newHead;
};

// Add only by existing index
List.prototype.addByIndex = function (index, value) {
  let node = new Node(value);
  let current = this.head;
  let prev = null;

  setIndexes(this);

  if (current.index === index) {
    this.head = node;
    node.next = current;
  } else {
    while (current) {
      if (current.index === index) {
        prev.next = node;
        node.next = current;
      }
      prev = current;
      current = current.next;
    }
  }
};

List.prototype.removeByIndex = function (index) {
  let current = this.head;
  let prev = null;

  setIndexes(this);

  if (current.index === index) {
    this.head = this.head.next;
  } else {
    while (current) {
      if (current.index === index) {
        prev.next = current.next;
      }
      prev = current;
      current = current.next;
    }
  }
};

List.prototype.removeByValue = function (value) {
  let prev = null;
  let current = this.head;

  if (current.value === value) {
    this.head = current.next;
  } else {
    while (current) {
      if (current.value === value) {
        prev.next = current.next;
      }
      prev = current;
      current = current.next;
    }
  }
};

List.prototype.print = function () {
  let current = this.head;
  let string = "";

  while (current) {
    string += JSON.stringify(current);
    current = current.next;
  }
  return string;
};

List.prototype.printBackOrder = function () {
  let backOrderList = new List();
  let originCurrent = this.head;
  let string = "";

  while (originCurrent) {
    let node = new Node(originCurrent.value);
    node.index = originCurrent.index;

    if (!backOrderList.head) {
      backOrderList.head = node;
    } else {
      let prevHead = backOrderList.head;
      backOrderList.head = node;
      backOrderList.head.next = prevHead;
    }
    originCurrent = originCurrent.next;
  }

  let backOrderCurrent = backOrderList.head;

  while (backOrderCurrent) {
    string += JSON.stringify(backOrderCurrent);
    backOrderCurrent = backOrderCurrent.next;
  }
  return string;
};

List.prototype.findByValue = function (value) {
  let current = this.head;
  setIndexes(this);
  while (current) {
    if (current.value === value) {
      return current.index;
    }
    current = current.next;
  }
  return undefined;
};

List.prototype.mergeWithList = function (donorHead) {
  let parentHead = this.head;

  if (!parentHead) {
    return donorHead;
  } else if (!donorHead) {
    return parentHead;
  }

  let mergedHead = null;
  if (parentHead.data <= donorHead.data) {
    mergedHead = parentHead;
    parentHead = parentHead.next;
  } else {
    mergedHead = donorHead;
    donorHead = donorHead.next;
  }

  let mergedTail = mergedHead;

  while (parentHead && donorHead) {
    let temp = null;
    if (parentHead.data <= donorHead.data) {
      temp = parentHead;
      parentHead = parentHead.next;
    } else {
      temp = donorHead;
      donorHead = donorHead.next;
    }

    mergedTail.next = temp;
    mergedTail = temp;
  }

  if (parentHead) {
    mergedTail.next = parentHead;
  } else if (donorHead) {
    mergedTail.next = donorHead;
  }

  return mergedHead;
};

List.prototype.insertValueByIndex = function (index, value) {
  let current = this.head;
  setIndexes(this);

  while (current) {
    if (current.index === index) {
      current.value = value;
      return;
    }
    current = current.next;
  }
  return undefined;
};

List.prototype.insertListByIndex = function (index, listHead) {
  let prevent = null;
  let current = this.head;
  setIndexes(this);

  // Find tail in inserting list
  let insertedListCurrent = listHead;
  while (insertedListCurrent) {
    if (!insertedListCurrent.next) {
      break;
    }
    insertedListCurrent = insertedListCurrent.next;
  }

  if (index === 0) {
    this.head = listHead;
    insertedListCurrent.next = current;
    return;
  }

  while (current) {
    if (current.index === index) {
      prevent.next = listHead;
      insertedListCurrent.next = current;
    }
    prevent = current;
    current = current.next;
  }
};

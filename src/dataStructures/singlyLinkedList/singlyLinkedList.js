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
        return;
      }
      prev = current;
      current = current.next;
    }
  }
  return null;
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
        return;
      }
      prev = current;
      current = current.next;
    }
  }
  return null;
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
        return;
      }
      prev = current;
      current = current.next;
    }
  }
  return null;
};

List.prototype.print = function () {
  function recursion(current) {
    let objString = `value:${current.value},`;

    if (current.next) {
      objString += `next:${recursion(current.next)},`;
    } else {
      objString += `next:${current.next},`;
    }

    return `{${objString}}`;
  }

  return recursion(this.head);
};

List.prototype.printBackOrder = function () {
  let mainString = "";
  function recursion(current) {
    let objString = `value:${current.value},`;

    if (current.next) {
      objString += `next:${recursion(current.next)},`;
    } else {
      objString += `next:${current.next},`;
    }

    mainString += `{${objString}}`;
    return `{${objString}}`;
  }
  recursion(this.head);
  return mainString;
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
  return null;
};

List.prototype.mergeWithList = function (donorHead) {
  if (!this.head) {
    this.head = donorHead;
    return this;
  }
  let current = this.head.next;
  let merged = donorHead;
  let initNode = new Node(this.head.value);
  this.head = initNode;

  while (current || merged) {
    if (merged) {
      initNode.next = merged;
      initNode = initNode.next;
      merged = merged.next;
    }
    if (current) {
      initNode.next = current;
      initNode = initNode.next;
      current = current.next;
    }
  }
  return this;
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

// ASC
// DESC

List.prototype.sort = function (type = "ASD") {
  let length = 0;
  let lengthCounter = this.head;
  while (lengthCounter) {
    length++;
    lengthCounter = lengthCounter.next;
  }

  for (let i = 0; i < length; i++) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (prev && current) {
        if (type === "ASD" && prev.value > current.value) {
          const val = prev.value;
          prev.value = current.value;
          current.value = val;
        } else if (type === "DESC" && prev.value < current.value) {
          const val = prev.value;
          prev.value = current.value;
          current.value = val;
        }
      }
      prev = current;
      current = current.next;
    }
  }
  return this;
};

export { List, Node };

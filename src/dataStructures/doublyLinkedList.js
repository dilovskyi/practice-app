function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev = null, next = null) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

Node.prototype = LinkedList.prototype;
Node.consructor = Node;

LinkedList.prototype.setIndexes = function () {
  let currentElem = this.head;
  let indexCounter = 0;

  while (currentElem) {
    currentElem.index = indexCounter++;
    currentElem = currentElem.next;
  }
};

LinkedList.prototype.push = function (value) {
  const newNode = new Node(value, this.tail);

  if (this.tail) {
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (!this.head) {
    this.head = newNode;
  }
};

LinkedList.prototype.pop = function () {
  if (!this.tail) {
    return null;
  }

  if (this.tail.prev) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    this.head = null;
    this.tail = null;
  }
};

LinkedList.prototype.unshift = function (value) {
  const newNode = new Node(value, null, this.head);

  if (this.head) {
    this.head.prev = newNode;
  }

  this.head = newNode;

  if (!this.tail) {
    this.tail = newNode;
  }
};

LinkedList.prototype.shift = function () {
  if (!this.head) {
    return null;
  }

  if (this.head.next) {
    this.head = this.head.next;
    this.head.previous = null;
  } else {
    this.head = null;
    this.tail = null;
  }
};

LinkedList.prototype.addByIndex = function (index, value) {
  this.setIndexes();

  if (index === this.head.index) {
    const newNode = new Node(value, null, this.head);
    this.head.prev = newNode;
    this.head = newNode;
    return this;
  } else if (index === this.tail.index) {
    const newNode = new Node(value, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  } else {
    // Get Node on index
    let nodeOnIndex = null;
    let current = this.head.next;
    while (current) {
      if (current.index === index) {
        nodeOnIndex = current;
      }
      current = current.next;
    }

    // If nodeOnIndex exist insert newNode
    if (nodeOnIndex) {
      const beforeNewNode = nodeOnIndex.prev;
      const newNode = new Node(value, beforeNewNode, nodeOnIndex);
      beforeNewNode.next = newNode;
      nodeOnIndex.prev = newNode;
    }
  }
  this.setIndexes();
};

LinkedList.prototype.removeByIndex = function (index) {
  this.setIndexes();

  if (index === this.head.index) {
    this.head = this.head.next;
    this.head.prev = null;
  } else if (index === this.tail.index) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    let current = this.head.next;
    while (current) {
      if (current.index === index) {
        const beforeCurrent = current.prev;
        const afterCurrent = current.next;
        beforeCurrent.next = afterCurrent;
        afterCurrent.prev = beforeCurrent;
      }
      current = current.next;
    }
  }
  this.setIndexes();
};

LinkedList.prototype.removeByValue = function (value) {
  if (value === this.head.value) {
    this.head = this.head.next;
    this.head.prev = null;
  } else if (value === this.tail.value) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    let current = this.head.next;
    while (current) {
      if (current.value === value) {
        const beforeCurrent = current.prev;
        const afterCurrent = current.next;
        beforeCurrent.next = afterCurrent;
        afterCurrent.prev = beforeCurrent;
      }
      current = current.next;
    }
  }
};

// ASC
// DESC

LinkedList.prototype.print = function (viewType = "ASC") {
  function getNext(node) {
    if (!node) {
      return null;
    }
    let objString = `value:${node.value},`;

    if (node.next) {
      objString += `next:${getNext(node.next)},`;
    } else {
      objString += `next:null,`;
    }

    return `{${objString}}`;
  }

  function getPrev(node) {
    if (!node) {
      return null;
    }
    let objString = `value:${node.value},`;

    if (node.prev) {
      objString += `prev:${getPrev(node.prev)},`;
    } else {
      objString += `prev:null,`;
    }

    return `{${objString}}`;
  }

  let mainString = "";

  // Render string on each listItem
  function getFullList(startNode) {
    if (startNode) {
      // Check viewType
      if (viewType === "DESC") {
        getFullList(startNode.next);
      }
      // Add to main string
      mainString += `{value:${startNode.value},prev:${getPrev(
        startNode.prev
      )},next:${getNext(startNode.next)}},\n`;

      if (viewType === "ASC") {
        getFullList(startNode.next);
      }
    }
    return mainString;
  }
  return getFullList(this.head);
};

LinkedList.prototype.simplePrint = function () {
  let getSiblings = (listItem) => {
    let siblingSrting = "";
    if (listItem.prev) {
      siblingSrting += "prev:" + listItem.prev.value + ",";
    } else {
      siblingSrting += "prev:null,";
    }

    if (listItem.next) {
      siblingSrting += "next:" + listItem.next.value + ",";
    } else {
      siblingSrting += "next:null,";
    }
    return siblingSrting;
  };

  if (!this.head) {
    return "{" + getSiblings(this) + "currentValue:" + this.value + "}" + ",";
  }

  let mainString = "";
  let current = this.head;
  while (current) {
    mainString +=
      "{" + getSiblings(current) + "currentValue:" + current.value + "}" + ",";
    current = current.next;
  }
  return mainString;
};

LinkedList.prototype.findByValue = function (value) {
  if (this.head.value === value) {
    return this.head;
  } else if (this.tail.value === value) {
    return this.tail;
  }

  let current = this.head.next;
  while (current) {
    if (current.value === value) {
      return current;
    }
    current = current.next;
  }
  return null;
};

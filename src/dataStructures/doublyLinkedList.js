function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev = null, next = null) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

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

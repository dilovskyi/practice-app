// Prev value
function List() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.index = 0;
  this.next = null;
}

function rebuildIndexes(list) {
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
  rebuildIndexes(this);
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
  rebuildIndexes(this);
};

List.prototype.unshift = function (value) {
  const node = new Node(value);
  node.next = this.head;
  this.head = node;
  rebuildIndexes(this);
};

List.prototype.shift = function () {
  if (!this.head) {
    return null;
  }
  let newHead = this.head.next;
  this.head = newHead;
  rebuildIndexes(this);
};

const list = new List();
console.log(JSON.stringify(list, null, "\t"));

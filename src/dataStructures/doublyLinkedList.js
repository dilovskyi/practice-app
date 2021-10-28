function ListNode(value) {
  this.head = this;
  this.next = null;
  this.prev = null;
  this.value = value;
}

ListNode.prototype.getLast = function () {
  let current = this.head;

  while (current.next) {
    current = current.next;
  }

  return current;
};

ListNode.prototype.push = function (value) {
  let last = this.getLast();

  let node = new ListNode(value);
  last.next = node;
  node.prev = last;
};

ListNode.prototype.pop = function () {
  let last = this.getLast();

  if (last === this.head) {
    throw new Error("Can not delete this.head");
  }

  let beforeLast = last.prev;
  beforeLast.next = null;
  last.prev = null;
};

ListNode.prototype.unshift = function (value) {
  let node = new ListNode(value);
  this.head.prev = node;
  node.next = this.head;
  this.head = node;
};

ListNode.prototype.shift = function () {
  let beforeHead = this.head.next;

  if (!beforeHead) {
    throw new Error("Can not delete this.head");
  }

  beforeHead.prev = null;
  this.head.next = null;
  this.head = beforeHead;
};

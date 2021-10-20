function LinkedList() {
  this.first = null;
  this.last = null;
  this.length = 0;
}

LinkedList.prototype.push = function (data) {
  const node = new Node(this, data);
  node.prev = this.last;
  if (this.length === 0) this.first = node;
  else this.last.next = node;
  this.last = node;
  this.length++;
  return node;
};

LinkedList.prototype.pop = function () {
  if (this.length === 0) return null;
  const node = this.last;
  this.last = node.prev;
  if (this.last) this.last.next = null;
  node.list = null;
  node.prev = null;
  node.next = null;
  this.length--;
  return node.data;
};

function Node(list, data) {
  this.list = list;
  this.data = data;
  this.prev = null;
  this.next = null;
}

export default LinkedList;

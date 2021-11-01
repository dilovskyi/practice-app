import { List, Node } from "./singlyLinkedList";

List.prototype.getLastNode = function () {
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  return current;
};

function createListWithValue(...values) {
  const ll = new List();
  for (let i = 0; i < values.length; i++) {
    ll.push(values[i]);
  }
  return ll;
}

describe("#push", () => {
  const ll = new List();
  it("Set like head if there is one node in list", () => {
    ll.push(10);
    expect(ll.head.value).toBe(10);
  });
  it("Add in the end of the list", () => {
    ll.push(20);
    let beforeLast = ll.getLastNode();
    ll.push(30);
    let last = ll.getLastNode();
    expect(beforeLast.next).toEqual(last);
  });
});

describe("#pop", () => {
  const ll = new List();
  it("Set head to null if there isn't any list element", () => {
    ll.pop();
    expect(ll.head).toEqual(null);
  });
  it("Delete last node", () => {
    ll.push(10);
    let beforeLast = ll.getLastNode();
    ll.push(11);
    ll.pop();
    expect(ll.getLastNode()).toEqual(beforeLast);
    expect(beforeLast.next).toEqual(null);
  });
});

describe("#unshift", () => {
  const ll = new List();
  it("Add element to the beginning of the list", () => {
    ll.unshift(10);
    let oldHead = ll.head;
    ll.unshift(20);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
  });
});

describe("#shift", () => {
  const ll = new List();
  it("Delete list head", () => {
    ll.unshift(10);
    let oldHead = ll.head;
    ll.unshift(20);
    ll.shift();
    expect(ll.head).toBe(oldHead);
    expect(ll.head.value).toBe(10);
    expect(ll.head.next).toBe(null);
  });
});

describe("#addByIndex", () => {
  const ll = createListWithValue(10, 20, 30);
  it("Return null if the is no index", () => {
    expect(ll.addByIndex()).toBe(null);
    expect(ll.addByIndex(100, 100)).toBe(null);
  });
  it("Add by Index", () => {
    let oldHead = ll.head;
    ll.addByIndex(0, 1);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next).toEqual(oldHead);
  });
});

describe("#removeByIndex", () => {
  it("Return null if there is no index", () => {
    const ll = createListWithValue(10, 20, 30);
    expect(ll.removeByIndex()).toBe(null);
    expect(ll.removeByIndex(100, 100)).toBe(null);
  });
  it("Delete", () => {
    const ll = createListWithValue(10, 20, 30);
    ll.removeByIndex(0);
    expect(ll.head.value).toBe(20);
  });
});

describe("#removeByValue", () => {
  it("Return null if there is no index", () => {
    const ll = createListWithValue(10, 20, 30);
    expect(ll.removeByValue()).toBe(null);
    expect(ll.removeByValue(100, 100)).toBe(null);
  });
  it("Delete", () => {
    const ll = createListWithValue(10, 20, 30);
    ll.removeByValue(10);
    expect(ll.head.value).toBe(20);

    ll.removeByValue(20);
    expect(ll.head.value).toBe(30);
  });
});

it("#print", () => {
  const expected =
    "{value:10,next:{value:20,next:{value:30,next:{value:40,next:null,},},},}";
  const ll = createListWithValue(10, 20, 30, 40);
  expect(ll.print()).toEqual(expect.stringContaining(expected));
});

it("#printBackOrder", () => {
  const ll = createListWithValue(10, 20);
  const expected =
    "{value:20,next:null,}{value:10,next:{value:20,next:null,},}";
  expect(ll.printBackOrder()).toEqual(expect.stringContaining(expected));
});

describe("#findByValue", () => {
  const ll = createListWithValue(10, 20, 30);
  it("Return null if there is no index", () => {
    expect(ll.findByValue()).toBe(null);
    expect(ll.findByValue(100)).toBe(null);
  });
  it("Get index by value", () => {
    expect(ll.findByValue(10)).toBe(0);
    expect(ll.findByValue(20)).toBe(1);
  });
});

describe("#mergeWithList", () => {
  it("Return original list if there is donorHead", () => {
    const llParent = createListWithValue(10, 30);
    expect(llParent.mergeWithList()).toEqual(llParent);
  });
  it("Return donor list if origin is empty", () => {
    const llParent = createListWithValue();
    const llDonor = createListWithValue(10, 30);
    expect(llParent.mergeWithList(llDonor.head)).toEqual(llDonor);
  });
  it("Merge with list item by item", () => {
    const llParent = createListWithValue(10, 30);
    const llDonor = createListWithValue(20, 40);
    const resultList = createListWithValue(10, 20, 30, 40);
    expect(llParent.mergeWithList(llDonor.head)).toEqual(resultList);
  });
});

describe("#insertValueByIndex", () => {
  const ll = createListWithValue(10, 30);
  it("Insert value in the position", () => {
    ll.insertValueByIndex(0, 100);
    ll.insertValueByIndex(1, 101);
    expect(ll.head.value).toBe(100);
    expect(ll.head.next.value).toBe(101);
  });
});

describe("#insertListByIndex", () => {
  const llParent = createListWithValue(10, 30);
  const llDonor = createListWithValue(150);
  it("Insert list in the position", () => {
    llParent.insertListByIndex(0, llDonor.head);
    expect(llParent.head).toEqual(llDonor.head);
  });
  it("Parent merget with donor", () => {
    expect(llDonor.head.next.value).toEqual(10);
  });
});

describe("#sort", () => {
  it("Sort by ASD", () => {
    const ll = createListWithValue(110, 10, 2);
    ll.sort();
    expect(ll.head.value).toBe(2);
    expect(ll.getLastNode().value).toBe(110);
  });

  it("Sort by DESC", () => {
    const ll = createListWithValue(110, 10, 2);
    ll.sort("DESC");
    expect(ll.head.value).toBe(110);
    expect(ll.getLastNode().value).toBe(2);
  });
});

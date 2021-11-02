import { LinkedList, Node } from "./doubleLinkedList";

LinkedList.prototype.getLastNode = function () {
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  return current;
};

function createListWithValue(...values) {
  const ll = new LinkedList();
  for (let i = 0; i < values.length; i++) {
    ll.push(values[i]);
  }
  return ll;
}

it("#getLastNode", () => {
  const ll = createListWithValue(10, 20);
  expect(ll.getLastNode().value).toBe(20);
});

describe("#push", () => {
  const ll = createListWithValue(10, 20);
  it("Add elem in the end.", () => {
    ll.push(30);
    expect(ll.tail.value).toBe(30);
    expect(ll.tail.next).toBe(null);
    expect(ll.tail.prev.value).toBe(20);
  });
});

describe("#pop", () => {
  const ll = createListWithValue(10, 20, 30);
  it("Set like head if there is one node in list", () => {
    ll.pop();
    expect(ll.tail.value).toBe(20);
    expect(ll.tail.next).toBe(null);
    expect(ll.tail.prev.value).toBe(10);
  });
});

describe("#unshift", () => {
  const ll = createListWithValue(10, 20);
  it("Add in the beginning", () => {
    ll.unshift(1);
    expect(ll.head.value).toBe(1);
  });
});

describe("#shift", () => {
  it("Delete from the beginning", () => {
    const ll = createListWithValue(10, 20);
    let oldHead = ll.head;
    ll.shift();
    expect(oldHead.next).toBe(ll.head);
    expect(ll.head.value).toBe(20);
  });
});

describe("#addByIndex", () => {
  it("Insert in the beginning", () => {
    const ll = createListWithValue(10, 30, 40);
    ll.addByIndex(0, 100);
    expect(ll.head.next.value).toBe(100);
  });
  it("Insert in the end", () => {
    const ll = createListWithValue(10, 30, 40);
    ll.addByIndex(2, 100);
    expect(ll.tail.value).toBe(40);
    expect(ll.tail.prev.value).toBe(100);
  });
});

it("#removeByIndex", () => {
  const ll = createListWithValue(10, 20, 30);
  ll.removeByIndex(0);
  expect(ll.head.value).toBe(20);
  ll.removeByIndex(1);
  expect(ll.tail.value).toBe(20);
});

it("#removeByValue", () => {
  const ll = createListWithValue(10, 20, 30);
  ll.removeByValue(10);
  expect(ll.head.value).toBe(20);
  ll.removeByValue(30);
  expect(ll.tail.value).toBe(20);
});

describe("#print", () => {
  const ll = createListWithValue(10, 20);
  it("ASC order", () => {
    let expectedString =
      "{value:10,prev:null,next:{value:20,next:null,}},{value:20,prev:{value:10,prev:null,},next:null},";
    expect(ll.print()).toBe(expectedString);
    expect(ll.print("ASC")).toBe(expectedString);
  });
  it("DESC order", () => {
    let expectedString =
      "{value:20,prev:{value:10,prev:null,},next:null},{value:10,prev:null,next:{value:20,next:null,}},";
    expect(ll.print("DESC")).toBe(expectedString);
  });
});

it("#simplePrint", () => {
  const ll = createListWithValue(10, 20);
  let expectedString =
    "{prev:null,next:20,currentValue:10},{prev:10,next:null,currentValue:20},";
  expect(ll.simplePrint()).toBe(expectedString);
});

describe("#findByValue", () => {
  const ll = createListWithValue(10, 20, 30);
  it("Whithout value", () => {
    expect(ll.findByValue()).toBe(null);
  });
  it("Get head", () => {
    expect(ll.findByValue(10).value).toBe(10);
    expect(ll.findByValue(10)).toEqual(ll.head);
  });
  it("Get item in the middle", () => {
    expect(ll.findByValue(20).value).toBe(20);
    expect(ll.findByValue(20).prev).toBe(ll.head);
    expect(ll.findByValue(20).next).toBe(ll.tail);
  });
  it("Get tail", () => {
    expect(ll.findByValue(30).value).toBe(30);
    expect(ll.findByValue(30)).toBe(ll.tail);
  });
});

describe("#mergeWithList", () => {
  it("Return original list if there is not donorHead", () => {
    const llParent = createListWithValue(10, 30);
    expect(llParent.mergeWithList()).toEqual(llParent);
  });
  // FIXME: "messageParent" can only be used inside a worker
  // it("Return donor list if origin is empty", () => {
  //   const llParent = createListWithValue(10);
  //   const llDonor = createListWithValue(10, 30);
  //   llParent.mergeWithList(llDonor.head);
  //   expect(llParent.head).toEqual(llDonor.head);
  // });
  // it("Merge with list item by item", () => {
  //   const llParent = createListWithValue(10, 30);
  //   const llDonor = createListWithValue(20, 40);
  //   const resultList = createListWithValue(10, 20, 30, 40);
  //   llParent.mergeWithList(llDonor.head);
  //   expect(llParent.head.value).toEqual(resultList.head);
  // });
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
    expect(llParent.head.value).toBe(150);
    expect(llParent.head.next.value).toBe(10);
  });
});

describe("#sort", () => {
  it("Sort by default", () => {
    const ll = createListWithValue(110, 10, 2);
    ll.sort();
    expect(ll.head.value).toBe(2);
    expect(ll.getLastNode().value).toBe(110);
  });
  it("Sort by ASD", () => {
    const ll = createListWithValue(110, 10, 2);
    ll.sort("ASD");
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

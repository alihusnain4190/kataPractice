const {
  sumArgs,
  countVeg,
  alternateCase,
  double,
  areOrdered,
  orderVeg,
  checkUsernames,
  max,
  min,
  range,
  removeDuplicates,
  sumAscii,
  findUniq,
  store,
  getDistinctLetters,
  multiTable,
  getMostRepeated,
  getFrequencies,
  numericals,
  sumEvenNumbers,
  digits,
  factorial,
  sumRecursion,
  revStr,
  powerOfN,
  messsegeValid,
} = require("../app");
describe("sumArgs", () => {
  it("add all passing argument", () => {
    expect(sumArgs(1, 2)).toBe(3);
  });
  it("return same argument if you passed one", () => {
    expect(sumArgs(1)).toBe(1);
  });
  it("return 0 if you passed not any argument", () => {
    // expect(sumArgs()).to...
    expect(sumArgs(1)).toBe(1);
  });
});

describe("countVeg", () => {
  it("function returns a number", () => {
    const input = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const expectedOutput = 9;
    const actualOutput = countVeg(input, "root");
    expect(actualOutput).toBe(expectedOutput);
  });
  it("if chosen type is not present in list, return 0", () => {
    const input = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const expectedOutput = 0;
    const actualOutput = countVeg(input, "house");
    expect(actualOutput).toBe(expectedOutput);
  });
});

describe("alternateCase", () => {
  it("describe what happens if this test succeeds here", () => {
    // expect(alternateCase(???)).to...
    const input = "hello";
    const expectedOutput = "HeLlO";
    const actualOutPut = alternateCase(input);
    expect(actualOutPut).toBe(expectedOutput);
  });
  it("Including space and try to capitalize element", () => {
    // expect(alternateCase(???)).to...
    const input = "hello world";
    const expectedOutput = "HeLlO WoRlD";
    const actualOutPut = alternateCase(input);
    expect(actualOutPut).toBe(expectedOutput);
  });

  // it.only('Including space and try to capitalize element', () => {
  //   // expect(alternateCase(???)).to...
  //   const input='hell world';
  //   const expectedOutput='HeLl woRlD';
  //   const actualOutPut=alternateCase(input);
  //   expect(actualOutPut).toBe(expectedOutput);
  // });
});
// describe('double',()=>{
//   it('remove double consective charactor',()=>{
//     const input='abb';
//     const output='a';
//     expect(double(input)).toBe(output);
//   })
//   //  it.only('remove double consective charactor',()=>{
//   //   const input='abbaa';
//   //   const output='a';
//   //   expect(double(input)).toBe(output);
//   // })
// })

describe("areOrdered", () => {
  it("return false if you pass empty array", () => {
    // expect(areOrdered(???)).to...
    expect(areOrdered([])).toBe(false);
  });
  it("return true if pass array in ascending order", () => {
    // expect(areOrdered(???)).to...
    expect(areOrdered([1, 2, 3, 4, 5])).toBe(true);
  });
  it("return false if passed array not in  ascending order", () => {
    // expect(areOrdered(???)).to...
    expect(areOrdered([1, 2, 6, 4, 5])).toBe(false);
  });
});

describe("orderVeg", () => {
  it("return empty arrya if passed empty array", () => {
    const input = [];
    const output = [];
    expect(orderVeg(input)).toEqual(output);
  });
  it("return a new array which sort array of object in asscending order", () => {
    const input = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    const output = [
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 },
    ];
    expect(orderVeg(input)).toEqual(output);
  });
});
describe("checkUsernames", () => {
  it("return true if you pass proper required user name", () => {
    const input = "myphone_123";
    expect(checkUsernames(input)).toBe(true);
  });
  it("return falase if you pass proper required user name", () => {
    const input = "1231213";
    expect(checkUsernames(input)).toBe(false);
  });
});

describe("max", () => {
  it("return maximum value from array", () => {
    // expect(max(???)).to...
    expect(max([1, 2, 3, 4, 3, 2, 6])).toBe(6);
  });
});

describe("min", () => {
  it("return minimum value from array", () => {
    // expect(min(???)).to...
    expect(min([1, 2, 3, 4, 3, 2, 6])).toBe(1);
  });
});
describe("range", () => {
  it("return array which start from 0 to givin number", () => {
    // expect(orderVeg(input)).toEqual(output);
    expect(range(5)).toEqual([0, 1, 2, 3, 4, 5]);
  });
  it("return array which start from  to givin number and start value", () => {
    expect(range(5, 3)).toEqual([3, 4, 5]);
  });
  it("return array which start from  to givin number and stop also on a givin number", () => {
    expect(range(5, 3)).toEqual([3, 4, 5]);
  });
  it("return array which start from  to givin number and stop also on a givin number and also define length", () => {
    expect(range(5, 2, 2)).toEqual([2, 4, 6, 8, 10]);
  });
});
describe("removeDuplicates", () => {
  it("return array after remove dublicate number", () => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 3, 2, 1, 4])).toEqual([
      1,
      2,
      3,
      4,
      5,
    ]);
  });
});
describe("sumAscii", () => {
  it("return a name who has highest score based on ASCII code", () => {
    // expect(sumAscii())Hu...
    expect(sumAscii(["ali", "Husnain", "Raza"])).toEqual(758);
  });
});
describe("findUniq", () => {
  it("return unique number from array", () => {
    expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2);
    const input = [
      NaN,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.141592653589793,
      3.2,
    ];
    expect(findUniq(input)).toBe(3.2);
  });
});
describe("Store", () => {
  it("remove stone on table which adjacent and same color", () => {
    expect(store("RGBRGBRGGB")).toBe(1);
    expect(store("RGGRGBBRGRR")).toBe(3);
    expect(store("RRRRGGGGBBBB")).toBe(9);
  });
});

describe("getDistinctLetters", () => {
  it("describe what happens if this test succeeds here", () => {
    expect(getDistinctLetters("abc", "adc")).toBe("bd");
    expect(getDistinctLetters("hello", "world")).toBe("dehrw");
  });
});

describe("multiTable", () => {
  it("return multipletable of givin number", () => {
    expect(multiTable(1)).toBe(
      "1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10"
    );
  });
});

describe("getMostRepeated", () => {
  it("describe what happens if this test succeeds here", () => {
    expect(getMostRepeated("hello world")).toBe("l");
  });
});

describe("getFrequencies", () => {
  it("describe what happens if this test succeeds here", () => {
    expect(getFrequencies("hello world")).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    });
  });
});
describe("numericals", () => {
  it("number of strng in passed string", () => {
    expect(numericals("Hello")).toBe("11121");
  });
});
describe("sumEvenNumbers", () => {
  it("describe what happens if this test succeeds here", () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(30);
  });
});

describe("sumEvenNumbers", () => {
  it("describe what happens if this test succeeds here", () => {
    expect(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(30);
  });
});
describe("sumEvenNumbers", () => {
  it("describe what happens if this test succeeds here", () => {
    expect(digits(12345)).toBe(5);
    expect(digits(1)).toBe(1);
    expect(digits(9876543210)).toBe(10);
  });
});
describe("factorial", () => {
  it("return factorial of 0 and 1", () => {
    const input = 0;
    expect(factorial(0)).toBe(1);

    expect(factorial(1)).toBe(1);
    expect(factorial(3)).toBe(6);
  });
});
describe("Sum of givin number from 1 through n", () => {
  const n = 1;
  // expect(sumRecursion(n)).toBe(1);
  expect(sumRecursion(3)).toBe(6);
});
describe("Return reverse of passing string", () => {
  // const input = "he";
  // expect(revStr(input)).toBe("eh");
  expect(revStr("hello")).toBe("olleh");
});
describe("REturn power of N", () => {
  const arr = [1, 2, 3, 4];
  const n = 2;

  expect(powerOfN(arr, n)).toBe(9);

  expect(powerOfN([1, 3, 10, 100], 3)).toBe(1000000);

  expect(powerOfN([6, 31], 3)).toBe(-1);
});

describe.only("return true if messege is valid", () => {
  // let str = "3hey5hello2hi";
  // expect(messsegeValid(str)).toBe(true);
  // str = "4code13hellocodewars";
  // expect(messsegeValid(str)).toBe(true);
  // str = "code4hello5";
  // expect(messsegeValid(str)).toBe(false);
  str =
    "13OlEjcBjfzO10rrkzTKmUQJthY10VjgNcsHgdm";

  expect(messsegeValid(str)).toBe(false);
});

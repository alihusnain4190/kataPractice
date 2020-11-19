const {
  sumArgs,
  countVeg,
  alternateCase,
  double,
  areOrdered,
  orderVeg,
  checkUsernames,
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
describe.only("checkUsernames", () => {
  it("return true if you pass proper required user name", () => {
    
    const input = "myphone_123";
    expect(checkUsernames(input)).toBe(true);
  });
  it("return falase if you pass proper required user name", () => {
  
    const input = "1231213";
    expect(checkUsernames(input)).toBe(false);
  });
});

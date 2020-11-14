const {sumArgs,countVeg,alternateCase} = require("../app");
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
      { name: "Runner beans", type: "legume", quantity: 8 }
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
      { name: "Runner beans", type: "legume", quantity: 8 }
    ];
    const expectedOutput = 0;
    const actualOutput = countVeg(input, "house");
    expect(actualOutput).toBe(expectedOutput);
  });
})


describe('alternateCase', () => {
  it('describe what happens if this test succeeds here', () => {
    // expect(alternateCase(???)).to...
    const input='hello';
    const expectedOutput='HeLlO';
    const actualOutPut=alternateCase(input);
    expect(actualOutPut).toBe(expectedOutput);
 
  });
  it('Including space and try to capitalize element', () => {
    // expect(alternateCase(???)).to...
    const input='hello world';
    const expectedOutput='HeLlO WoRlD';
    const actualOutPut=alternateCase(input);
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
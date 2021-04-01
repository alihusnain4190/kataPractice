const {
  convertToF,
  reverseString,
  factorialize,
  findLongestWordLength,
} = require("./app.js");
describe("convertToF", () => {
  it("Convert Celsius to Fahrenheit", () => {
    expect(convertToF(-30)).toEqual(-22);
    expect(convertToF(-10)).toEqual(14);
    expect(convertToF(0)).toEqual(32);
    expect(convertToF(20)).toEqual(68);
    expect(convertToF(30)).toEqual(86);
  });
});
describe("reverseString", () => {
  it("Return reverse of passed string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("Howdy")).toEqual("ydwoH");
    expect(reverseString("Greetings from Earth")).toEqual(
      "htraE morf sgniteerG"
    );
  });
});
describe("factorialize", () => {
  it("Return factorial of passed number", () => {
    expect(factorialize(5)).toBe(120);
  });
});
describe.only("findLongestWordLength", () => {
  it("return longest work from passed strign", () => {
    expect(
      findLongestWordLength("The quick brown fox jumped over the lazy dog")
    ).toBe(6);
  });
});

const {
  convertToF,
  reverseString,
  factorialize,
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes,
  truncateString,
  findElement,
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
describe("findLongestWordLength", () => {
  it("return longest work from passed strign", () => {
    expect(
      findLongestWordLength("The quick brown fox jumped over the lazy dog")
    ).toBe(6);
  });
});
describe("confirmEnding", () => {
  it("Return true if string end match with passed target string", () => {
    expect(confirmEnding("Bastian", "n")).toBe(true);
    expect(confirmEnding("Congratulation", "on")).toBe(true);
  });
});

describe("repeatStringNumTimes", () => {
  it("Repeat giving string according to second passed number", () => {
    expect(repeatStringNumTimes("abc", 3)).toBe("abcabcabc");
  });
});

describe("truncateString", () => {
  it("Return Turncate string with .... ", () => {
    expect(
      truncateString("A-tisket a-tasket A green and yellow basket", 8)
    ).toEqual("A-tisket...");
    expect(
      truncateString(
        "A-tisket a-tasket A green and yellow basket",
        "A-tisket a-tasket A green and yellow basket".length
      )
    ).toEqual("A-tisket a-tasket A green and yellow basket");
  });
  expect(
    truncateString(
      "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length + 2
    )
  ).toEqual("A-tisket a-tasket A green and yellow basket");
});
describe.only("findElement", () => {
  it("returns the first element in it that passes a 'truth test'. ", () => {
    expect(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)).toBe(8);
  });
});

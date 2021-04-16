const {
  convertToF,
  reverseString,
  factorialize,
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes,
  truncateString,
  findElement,
  booWho,
  titleCase,
  frankenSplice,
  bouncer,
  getIndexToIns,
  mutation,
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
describe("findElement", () => {
  it("returns the first element in it that passes a 'truth test'. ", () => {
    expect(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)).toBe(8);
  });
});
describe("booWho", () => {
  it("return true or false if value is primitive", () => {
    expect(booWho(true)).toBe(true);
  });
  it("return true or false if value is primitive", () => {
    expect(booWho(false)).toBe(true);
  });

  it("return true or false if value is primitive", () => {
    expect(booWho([1, 2, 3])).toBe(false);
    expect(booWho([].slice)).toBe(false);
    expect(booWho(NaN)).toBe(false);
    expect(booWho("a")).toBe(false);
    expect(booWho(1)).toBe(false);
    expect(booWho("false")).toBe(false);
    expect(booWho("true")).toBe(false);
  });
});
describe("titleCase", () => {
  test("Return the provided string with the first letter of each word capitalize", () => {
    expect(titleCase("I'm a little tea pot")).toEqual("I'm A Little Tea Pot");
    expect(titleCase("sHoRt AnD sToUt")).toEqual("Short And Stout");
  });
});
describe("frankenSplice", () => {
  test("Return Copy each element of the first array into the second array, according to passing index", () => {
    expect(frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
    expect(frankenSplice([1, 2], ["a", "b"], 1)).toEqual(["a", 1, 2, "b"]);
  });
});
describe("bouncer", () => {
  test("Remove all false valu from passed array", () => {
    let input = [7, "ate", false, 9];
    let input2 = [7, "", "ate", false, 9];
    let input3 = ["a", "b", "c"];
    expect(bouncer(input)).toEqual([7, "ate", 9]);
    expect(bouncer(input2)).toEqual([7, "ate", 9]);
    expect(bouncer(input3)).toEqual(["a", "b", "c"]);
    expect(bouncer([null, NaN, 1, 2, undefined])).toEqual[(1, 2)];
  });
});
describe("getIndexToIns", () => {
  it("return lowest index according to passed value", () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
    expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toBe(2);
    expect(getIndexToIns([40, 60], 50)).toBe(1);
  });
});

describe("mutation", () => {
  it.only("Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.", () => {
    expect(mutation(["hello", "hey"])).toBe(false);
  });
});

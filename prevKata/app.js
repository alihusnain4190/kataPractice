function convertToF(celsius) {
  console.log(celsius);

  let fahrenheit = celsius * 1.8 + 32;
  console.log(fahrenheit);
  return fahrenheit;
}
function reverseString(str) {
  return str.split("").reverse().join("");
}

function factorialize(num) {
  if (num === 1 || num === 0) return 1;
  if (num > 1) {
    num = num * factorialize(num - 1);
  }
  return num;
  // let fac = 1;
  // for (let i = 1; i <= num; i++) {
  //   fac = fac * i;
  // }

  // return fac;
}
function findLongestWordLength(str) {
  return str.split(" ").reduce((acc, cur) => {
    if (cur.length > acc) {
      acc = cur.length;
    }
    return acc;
  }, 0);
  //let count=0;
  // str = str.split(" ");
  // for (let i = 0; i < str.length; i++) {
  //   if (count < str[i].length) {
  //     count = str[i].length;
  //   }
  // }
  return count;
}
function confirmEnding(str, target) {
  // return str.endsWith(target);
  return (n = str.substr(str.length - target.length) === target);
}
function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr = newStr + str;
  }
  return newStr;
}
function truncateString(str, num) {
  if (str.length <= num) return str;
  return str.substr(0, num) + "...";
}

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    const n = func(arr[i]);

    if (n === true) return arr[i];
    else "undefined";
  }
  return "undefined";
}

module.exports = {
  convertToF,
  reverseString,
  factorialize,
  findLongestWordLength,

  confirmEnding,
  repeatStringNumTimes,
  truncateString,
  findElement,
};

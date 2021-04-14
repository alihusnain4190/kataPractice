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
}

function booWho(bool) {
  // if (bool === true || bool === false ) return true;
  // else return false;
  return typeof bool === "boolean";
}
function titleCase(str) {
  // let newStr = [];
  str = str.toLowerCase().split(" ");
  // for (let i = 0; i < str.length; i++) {
  //   newStr.push(str[i][0].toUpperCas3e() + str[i].slice(1, str[i].length+1))

  // }
  // return newStr.join(' ');
  const newStr = str.map((s) => {
    return s.replace(s.charAt(0), s.charAt(0).toUpperCase());
  });

  return newStr.join(" ");
}

function frankenSplice(arr1, arr2, n) {
  // let   newArr = [...arr2]
  //   for (let i = 0; i < arr1.length; i++) {
  //     newArr.splice(n,0, arr1[i]);
  //     n=n+1;
  //   }
  //   return newArr;
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
function bouncer(arr) {
//this one copy from freecodecamp

  // let newArray = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i]) newArray.push(arr[i]);
  // }
  // return newArray;
  return arr.filter((element) => {
    return element;
  });
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
  booWho,
  titleCase,
  frankenSplice,
  bouncer,
};

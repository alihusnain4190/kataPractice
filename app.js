/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(a = 0, b = 0) {
  // let sum = 0;
  // rest.forEach((element) => {
  //  sum = sum + element
  // });
  return a + b;
}

/*
  The function countVeg should take an array of vegetables and a string of the type of vegetable and return the total quantity of that type of vegetable in the array.
  Vegetable types can be root, leaf, legume, bulb or brassica.
  e.g.
  vegCounter([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
], 'root') should return 9
*/

function countVeg(input, type) {
  return input.reduce((acc, cur) => {
    if (cur.type === type) {
      acc = acc + cur.quantity;
    }
    return acc;
  }, 0);

  // let counter = 0;
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i].type === type) {
  //     counter = counter + input[i].quantity;
  //   }
  // }
  // return counter;
}
const alternateCase = (input) => {
  const alter = input.split("").map((c, index) => {
    if (index % 2 === 0) {
      return c.toUpperCase();
    }
    return c;
  });
  return alter.join("");
};
const double = (str) => {
  //  let stack=[];
  //  str=str.split('');
  //  for(let i=0;i<str.length;i++){
  //    if(str[i]===str[i+1]){
  //      str[i].pop();
  //    }
  //    stack.push(str[i]);
  //  }
};

/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(array) {
  let count = 1;
  if (array.length === 0) return false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      count++;
    }
  }
  if (count === array.length) return true;
  else {
    return false;
  }
}

/*
  The orderVeg function should take a array of vegetables and return a new array in which the vegetables are sorted in ascending order according to quantity.
  e.g.
  vegCounter([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
])
should return:
[
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Runner beans', type: 'legume', quantity: 8}
]
*/

function orderVeg(array) {
  if (array.length === 0) return array;

  return array.sort((a, b) => {
    return a.quantity - b.quantity;
  });
}
function checkUsernames(input) {
  const regix = /[a-z]+\d*_/g;
  const res = regix.test(input);
  return res;
}
function max(input) {
  let count = input[0];
  input.forEach((element) => {
    if (element > count) {
      count = element;
    }
  });
  return count;
  //
  // return Math.max(...input);
}

function min(input) {
  // let count=input[0];
  // input.forEach(element => {
  //   if(element<count){
  //     count=element;
  //   }
  // });
  // return count;

  return Math.min(...input);
}

/*
  The function range should take up to 3 arguments: a length, a start value and a step value.
  If it has only a length, it should return an array of numbers from 0 with length specified.
  If it also has a start value the returned array should start at this value instead of 0.
  If there is also a step value the numbers in the array should increase by the specified step.
  E.g. range(5) --> [0, 1, 2, 3, 4]
  range(5, 2) --> [2, 3, 4, 5, 6]
  range(5, 2, 2) --> [2, 4, 6, 8, 10]
*/

function range(num, start = 0, difference = 1) {
  let arr = [];
  if (num) {
    num = num * difference;
    for (let i = start; i <= num; i = i + difference) {
      arr.push(i);
    }
  }
  return arr;
}
/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(input) {
  return input.filter((element, index, array) => {
    if (array.indexOf(element) === index) return element;
  });
}
/*
  The function sumAscii should take an array of names and calculate each name's score based on the total of each character's lowercase ASCII value. It should return the name with the highest score.
  E.g. the name 'John' would get the score 431 because 'j' has the ASCII code 106, 'o' has the ASCII code 111, 'h' has the ASCII code 104 and 'n' has the ASCII code 110.
*/

function sumAscii(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j].toLowerCase().charCodeAt(0);
    }
    array.push(sum);
  }
  return Math.max(...array);
}
function findUniq(arr) {
  return arr.find((n) => {
    if (n === n) {
      return arr.indexOf(n) === arr.lastIndexOf(n);
    }
  });
}
function store(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    }
  }
  return count;
}
/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => '
  '
*/

function getDistinctLetters(str1, str2) {
  let total = 0;
  if (str1.length > str2.length) {
    total = str1.length;
  } else {
    total = str2.length;
  }
  let newStr = [];
  for (let i = 0; i < total; i++) {
    if (str2.indexOf(str1[i]) === -1) {
      newStr.push(str1[i]);
    }
    if (str1.indexOf(str2[i]) === -1) {
      newStr.push(str2[i]);
    }
  }
  return newStr.sort().join("");
}
function multiTable(number) {
  let store = "";
  for (let i = 1; i <= 10; i++) {
    store += `${i} * ${number} = ${i * number}\n`;
  }
  return store;
}

function getMostRepeated(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        obj[str[i]] = count++;
      }
    }
  }
  let arr = Object.entries(obj);
  let count = 0;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > count) {
      result = arr[i][0];
      count = arr[i][1];
    }
  }
  return result;
}

function getFrequencies(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && str[j] !== " ") {
        obj[str[i]] = count++;
      }
    }
  }
  return obj;

  // const result = str.split("").reduce((total, cur) => {

  //   total[cur] ? total[cur]++ : (total[cur] = 1);
  //   return total;
  // }, {});
  // console.log(result);
}
function numericals(input) {
  let obj = {};
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    if (obj[current]) {
      obj[current] += 1;
    } else {
      obj[current] = 1;
    }
    result += obj[current];
  }
  return result;
}

function sumEvenNumbers(input) {
  let count = 7;
  return input.reduce((acc, value) => {
    if (count > 0) {
      if (value % 2 === 0) {
        acc = acc + value;
      }
    }
    return acc;
  }, 0);
}
function digits(n) {
  const s = String(n);
  return s.split("").length;
}
/*********************************Recursion */
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  if (num > 1) {
    return num * factorial(num - 1);
  }
}
function sumRecursion(num) {
  let sum = 0;
  if (num === 1) {
    return num;
  }
  if (num > 1) {
    return (sum = sum + sumRecursion(num - 1));
  }
}
function revStr(str) {
  let rev = "";
  if (str.length < 1) {
    return str;
  }
  rev = str.slice(-1);
  return (rev = rev + revStr(str.slice(0, -1)));
}
function powerOfN(arr, n) {
  return arr.reduce((first, data, index) => {
    if (index === n) {
      first = Math.pow(data, n);
    }
    return first;
  }, -1);
}
function messsegeValid(str) {
  if (parseInt(str.slice(-1))) {
    return false;
  }
  var numbers = str.match(/\d+/g).map(Number);
  let totalNumber = numbers.reduce((sum, num) => (sum = sum + num), 0);
  let total = 0;
  console.log(totalNumber);
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i])) {
    } else {
      totalNumber--;
      if (i === 0 || i === str.length) {
        return false;
      }
      if (totalNumber === total) {
        return true;
      }
    }
  }
  return false;
  // let count = 0;
  // let lastIndex = str.length - 1;
  // for (let i = 0; i < str.length; i++) {
  //   if (parseInt(str[i])) {
  //     count = str[i];

  //     console.log(count);
  //   } else {
  //     count--;
  //     if (count === 0 && i === lastIndex) return true;
  //   }
  // }
}
module.exports = {
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
};

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
module.exports = {
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
};

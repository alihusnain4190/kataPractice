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

return array.sort((a,b)=>{
  
  return a.quantity-b.quantity;
})
}

/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(input) {
  const regix = /[a-z]+\d*_/g;
  const res = regix.test(input);

  return res;
}

module.exports = {
  sumArgs,
  countVeg,
  alternateCase,
  double,
  areOrdered,
  orderVeg,
  checkUsernames
};

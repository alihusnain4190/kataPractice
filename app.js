/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(a=0,b=0) {
  // let sum = 0;
  // rest.forEach((element) => {
  //  sum = sum + element
  // });
  return a+b; 

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
 return input.reduce((acc,cur)=>{
    if(cur.type===type){
     acc=acc+cur.quantity;
    }
    return acc;
 },0)

  // let counter = 0;
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i].type === type) {
  //     counter = counter + input[i].quantity;
  //   }
  // }
  // return counter;

}
const alternateCase=(input)=>{
const alter=input.split('').map((c,index)=>{
 if(index%2===0){
   return c.toUpperCase();
 }
return c;
})
return alter.join('')
}
module.exports = {sumArgs,countVeg,alternateCase};
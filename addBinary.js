// const addBinary = (a, b) => {
//   let sum = a + b;
//   let str = "";
//   while (sum > 0) {
//     const reminder = sum % 2;
//     str = reminder+str;
//     sum = Math.floor(sum / 2);
//   }

//   console.log(str);
// };

function addBinary(a,b){
  return (a+b).toString(2)
}

console.log(addBinary(51 , 12 ));

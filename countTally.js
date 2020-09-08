// // ["a", "b"])).to.eql({ a: 1, b: 1 }
// //givin array convert into object and count how many time value exxist in this

function countTally(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] =  0;  }
    {
      obj[arr[i]] = obj[arr[i]] + 1;;
    }
  }
  console.log(obj);
}
// let arr = ["a", "b"];
let arr = ["a", "a"];
countTally(arr);





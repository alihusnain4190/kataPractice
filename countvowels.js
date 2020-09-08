function countVowels(arr) {
  let obj = {};
  arr.forEach((a, index) => {
    if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
      if (!obj[a]) {
        obj[a] = 0;
      }
      obj[a]++;
    }
  });
  console.log(obj);
}
const arr = ["a"];
const arr1 = ["a", "b", "e", "c", "d", "e", "i", "j"];
countVowels(arr1);

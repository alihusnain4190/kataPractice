// convert first charactor of string into Upper case
// heloo world   Hello World

function capitalizeString(str) {
  const list = str.split(" ").map((s) => {
    return s[0].toUpperCase() + s.slice(1);
  });
  console.log(list.join(" "));
}
let str = "hi i live in stockport which is town of manchester";
capitalizeString(str);

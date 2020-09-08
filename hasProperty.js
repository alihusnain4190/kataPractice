const author = {
  name: "Zadie Smith",
  debut: "White Teeth",
};
function checkHasProperty(obj, propertName) {
  console.log(obj.hasOwnProperty(propertName));
}

checkHasProperty(author, "name");

checkHasProperty(author, "author");

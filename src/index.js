import hi from "./sayHi";
import { displayNames, trololo } from "./displayNames";

console.log(hi.call(this, "Serhii"));
console.log(hi.call(this, "Andry"));
const names = ["Bill", "Dilan", "Avanisian", "Egor"];
displayNames.call(this, names);
const trol = trololo();
hehehe(trol);

function hehehe (obj) {
  console.info(
    `Name: ${obj.name} Surname: ${obj.surname} live in the ${obj.address.city}`
  );
}

import hi from "./js/sayHi";
import { displayNames, trololo } from "./js/displayNames";
import { button as btn, btnblock } from "./js/buttonView";
// import "./css/main.css";
// styles
import './scss/main.scss';

console.log(hi.call(this, "Serhii"));
console.log(hi.call(this, "Andry"));
const names = ["Bill", "Dilan", "Avanisian", "Egor"];
displayNames.call(this, names);
const trol = trololo();
hehehe(trol);

function hehehe(obj) {
  console.info(
    `Name: ${obj.name} Surname: ${obj.surname} live in the ${obj.address.city}`
  );
}
const text = ["simple button", "trololo btn", "fuck you"];
btnblock({
  display: "flex",
  flexFlow: "row no-wrap",
  justifyContent: "space-between",
  width: "50%",
  margin: "5rem auto",
  padding: "3rem",
  backgroundColor: "#ccc",
  color: "lightblue"
});
const container = document.querySelector(".buttons-block");
container.insertAdjacentHTML("beforeend", btn("btn", text[0]));
container.insertAdjacentHTML("beforeend", btn("btn", text[1]));
container.insertAdjacentHTML("beforeend", btn("btn", text[2]));

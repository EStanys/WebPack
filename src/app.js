import "./css/style.css";
import Add from "./js/Add.js";
import Say from "./js/Say.js";
import banner from "./components/banner/ban.js";
import Aside from "./components/aside/Aside";
import Modal from "./components/modal/Modal.js";
import webPackImg from "./img/img1.jpeg";

const img1 = document.createElement("img");
img1.src = webPackImg;

const bestBanner = banner("Dynamic title", "Learn Wabpack");
document.body.append(bestBanner, img1);
bestBanner.addEventListener("click", (event) => {
  console.log("cia ", event.target.previousSibling.previousSibling.textContent);
});

const asideEl = Aside("Aside Title", "Aside Btn");
console.log(" asideEl", asideEl);
document.body.append(asideEl);

const modal = new Modal();

const modalBtn = document.querySelector(".modal-btn");

modalBtn.addEventListener("click", () => {
  modalClosingHandler();
});

function modalClosingHandler() {
  const modalEl = modal.create();
  document.body.append(modalEl);

  modalEl.addEventListener("click", (event) => {
    event.target.attributes.class.value === "modal-wrapper" ? event.target.remove() : null;
    event.target.attributes.class.value === "modal__btn" ? modalEl.remove() : null;
  });
}

//const path = require("path"); //path yra node dalykas
//console.log(" path", path.resolve(__dirname));

const Devide = require("./js/Devide.js");
const Multiply = require("./js/Multiply");

console.log("index.js");
console.log(" Devide", Devide(6, 3));
console.log(" Multiply", Multiply(3, 6));
console.log("add(1,2,4)", Add(1, 2, 4));

Say(" nice day");

const obj = {
  age: 30,
  name: "Bob",
};

const copy = { ...obj, gender: "male" };

console.log(" copy", copy);

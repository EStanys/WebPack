// import "./css/style.css";

const Devide = require("./js/Devide.js");
const Multiply = require("./js/Multiply");
console.log("index.js");

console.log(" Devide", Devide(6, 3));
console.log(" Multiply", Multiply(3, 6));

// import Add from "./js/Add.js";
// import Say from "./js/Say.js";
// const path = require("path"); path yra node dalykas
// console.log(" path", path.resolve(__dirname));

// console.log("add(1,2,4)", Add(1, 2, 4));
// Say(" nice day");

const obj = {
  age: 30,
  name: "Bob",
};

const copy = { ...obj, gender: "male" };

console.log(" copy", copy);

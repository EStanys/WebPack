console.log("index.js");

import Add from "./js/Add.js";
import Say from "./js/Say.js";
// const path = require("path"); path yra node dalykas
// console.log(" path", path.resolve(__dirname));

console.log("add(1,2,3)", Add(1, 2, 3));
Say(" nice day");

const obj = {
  age: 30,
  name: "Bob",
};

const copy = { ...obj, gender: "male" };

console.log(" copy", copy);

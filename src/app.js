/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let randomnumber = Math.random() * 10;
  document.querySelector("#theexcuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};
let generateExcuse = () => {
  let who = ["My dog", "My grandma", "A policeman", "My neighbour"];
  let action = ["ate", "stole", "broke", "peed"];
  let what = ["my homework", "the car", "my phone"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

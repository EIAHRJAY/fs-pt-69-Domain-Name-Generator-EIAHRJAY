/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generateRandomDomain() {
    let adjectives = ["cool", "super", "fast", "great", "smart"];
    let nouns = ["site", "web", "app", "page", "service"];
    let domains = [".com", ".net", ".us", ".io", ".co"];

    let randomAdjectives =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomDomain = domains[Math.floor(Math.random() * domains.length)];

    return `${randomAdjectives}${randomNoun}${randomDomain}`;
  }
  for (let i = 0; i < 5; i++) {
    console.log(generateRandomDomain());
  }
  function changeVisual() {
    document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }
  document.getElementById("generate-button").addEventListener("click", () => {
    let output = "";

    for (let i = 0; i < 10; i++) {
      let domain = generateRandomDomain();
      output += domain + "<br>";
    }

    document.getElementById("generated-domain").innerHTML = output;
    changeVisual();
  });
  console.log("Hello Rigo from the console!");
};

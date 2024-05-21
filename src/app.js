/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generateAllDomains() {
    let adjectives = ["cool", "super", "fast", "great", "smart"];
    let nouns = ["site", "web", "app", "page", "service"];
    let domains = [".com", ".net", ".us", ".io", ".co"];

    let allDomains = [];

    for (let adj of adjectives) {
      for (let noun of nouns) {
        for (let domain of domains) {
          allDomains.push(`${adj}${noun}${domain}`);
        }
      }
    }

    return allDomains;
  }

  function displayAllDomains() {
    let allDomains = generateAllDomains();
    let output = "";

    for (let domain of allDomains) {
      output += domain + "<br>";
    }

    document.getElementById("generated-domain").innerHTML = output;
  }

  document.getElementById("generate-button").addEventListener("click", () => {
    displayAllDomains();
    changeVisual();
  });

  function changeVisual() {
    document.body.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
  }

  console.log("Hello Rigo from the console!");
};

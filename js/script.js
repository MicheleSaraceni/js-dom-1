"use strict";
console.clear();

const press = document.getElementById("button");
console.log(press);
const lampadina = document.querySelector("img");
console.log(lampadina);
const titolo = document.querySelector("h1");
const body = document.querySelector("body");

press.addEventListener("click", () => {
    console.log(lampadina.src);
    if (lampadina.src.includes("/img/white_lamp.png")){
        lampadina.src = "/img/yellow_lamp.png";
        lampadina.alt = "LampadinaAccesa";
        lampadina.style.paddingRight = "82px";
        titolo.style.color = "black";
        body.style.backgroundColor = "white"
    } else if (lampadina.src.includes("/img/yellow_lamp.png")){
        lampadina.src = "/img/white_lamp.png";
        lampadina.alt = "LampadinaSpenta";
        lampadina.style.paddingRight = "0";
        titolo.style.color = "white";
        body.style.backgroundColor = "black"
    }
})
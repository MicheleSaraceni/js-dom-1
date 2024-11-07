"use strict";
console.clear();

const press = document.getElementById("button");
console.log(press);
const lampadina = document.querySelector("img");
console.log(lampadina);

press.addEventListener("click", () => {
    console.log(lampadina.src);
    if (lampadina.src.includes("/img/white_lamp.png")){
        lampadina.src = "/img/yellow_lamp.png";
        lampadina.alt = "LampadinaAccesa";
        
    } else if (lampadina.src.includes("/img/yellow_lamp.png")){
        lampadina.src = "/img/white_lamp.png";
        lampadina.alt = "LampadinaSpenta";
    }
})
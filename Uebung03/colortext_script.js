"use strict"

function darstellen() {
    var p = document.querySelector("#UserText");
    var farbe = "#" + Math.floor(Math.random()*16777215).toString(16);
    p.innerHTML = document.querySelector("#inp").value;
    p.style["color"] = farbe;
    p.style["font-size"] = "78px";
}

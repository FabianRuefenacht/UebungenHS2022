"use strict";
function wuerfel() {
    var w = 6*Math.random();
    var zahl = Math.floor(w);
    return zahl+1
}

console.log(wuerfel());
"use strict";
function wuerfel() { // erstellen der Funktion
    var w = 6*Math.random(); // Math.random gibt eine Zahl zwischen [0;1) zurück, wird diese mit 6 multipliziert erhält man eine Zahl zwischen [0;6)
    var zahl = Math.floor(w); // Math.floor schneidet die Nachkommastellen ab. Man erhält eine Zahl {0,1,2,3,4,5}.
    return zahl+1 // zahl um 1 erhöhen (da ein Würfel die ganzen Zahlen zwischen [1;6] enthält) und ausgeben 
}

console.log(wuerfel()); // prüfen ob die Funktion funktioniert
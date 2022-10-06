"use strict";
function wuerfel() { // erstellen der Funktion
    return Math.ceil(6 * Math.random()); /* Math.random gibt eine Zahl zwischen [0;1) zurück, 
                                            wird diese mit 6 multipliziert erhält man eine Zahl zwischen [0;6)
                                            Math.ceil rundet die Zahl auf. Man erhält eine Zahl {1,2,3,4,5,6}.
                                            return gibt die Zahl aus */
}

console.log(wuerfel()); // prüfen ob die Funktion funktioniert
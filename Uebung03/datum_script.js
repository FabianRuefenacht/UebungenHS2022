"use strict"

function datetime(event) {
    setInterval(datetime, 500);

    //Datum laden--------------------

    var d = new Date();
    var ts = d.toLocaleTimeString();
    var ds = d.toDateString();

    //Zeit und Datum von Seite laden--
    
    var time = document.getElementById("time");
    var date = document.querySelector("#date");

    //Zeit neu darstellen-------------

    time.innerHTML = ts;
    date.innerHTML = ds;
}
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



// Date
var date = new Date();
console.log(date);

// Date by hour, minute and seconds only
let hr = date.getHours();
let min = date.getMinutes()
let sec = date.getSeconds();

console.log("Hour: " + hr + " Minutes: " + min + " Seconds: " + sec );


let hrPosition = (hr*360/12) +(min*(360/60)/12) ;
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition= sec*360/60;




// Updates the clock-runs the clock: The set Interval method runs mixin repeatly calls a fucntion, and provides a fixed time delay between calls.

function runTheClock(){


hrPosition = hrPosition+(3/360);
minPosition = minPosition+(6/60);
secPosition = secPosition+6;


HOURHAND.style.transform  = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform  = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform  = "rotate(" + secPosition + "deg)";


}

var interval = setInterval(runTheClock, 1000);


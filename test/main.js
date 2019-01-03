// Created by Kamil

//made by Kamil on SoloLearn

let countDownPlace;

function countdown() {

var datetime = "2019-04-05 00:00:00" 
 var theevent = new Date(datetime); 
 now = new Date(); 
 var sec_num = (theevent - now) / 1000; 
 var days = Math.floor(sec_num / (3600 * 24)); 
 var hours = Math.floor((sec_num - (days * (3600 * 24)))/3600); 
 var minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60); 
 var seconds = Math.floor(sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60)); 
 if (hours < 10) {hours = "0"+hours;} 
 if (minutes < 10) {minutes = "0"+minutes;} 
 if (seconds < 10) {seconds = "0"+seconds;} 
// console.log(days+':'+ hours+':'+minutes+':'+seconds); 
    //assign the calculated values
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}


//start everything
function init() {

    //start the countdown
    countdown();
    setInterval(countdown, 1000);
}

//wait until the DOM loads
window.addEventListener("DOMContentLoaded", init);
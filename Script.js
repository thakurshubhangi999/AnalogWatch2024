const hours = document.getElementById("hour")
const minutes = document.getElementById("minute")
const seconds = document.getElementById("second")

function displayTime(){
    let date = new Date();
    
    // getting hour, minute and hour
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    let secondDeg = (ss / 60) * 360;
    let minuteDeg = (mm / 60) * 360 + (ss / 60) * 6;
    let hourDeg = (hh / 12) * 360 + (mm / 60) * 30;

    hours.style.transform = `rotate(${hourDeg}deg)`
    minutes.style.transform = `rotate(${minuteDeg}deg)`
    seconds.style.transform = `rotate(${secondDeg}deg)`
}

setInterval(displayTime, 1000)
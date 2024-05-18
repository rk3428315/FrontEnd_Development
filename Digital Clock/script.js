
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let amorpm = document.querySelector('.amorpm');

function getTime() {

    let time = new Date();
    let hour = time.getHours(); console.log(hour, "hour")
    let min = time.getMinutes(); console.log(min, "min")
    let sec = time.getSeconds(); console.log(sec, "sec")

    am_pm = "AM";
    
    if (hour >= 12) {
        am_pm = "PM"
    }
    hours.innerHTML = hour;
    amorpm.innerHTML = am_pm
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

}

setInterval(function () {
    getTime();
}, 1000)
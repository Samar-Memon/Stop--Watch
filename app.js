const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const miniSecond = document.getElementById('miniSecond');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');


start.disabled = false;
pause.disabled = true;
reset.disabled = true;

let hourCount = 0;
let minuteCount = 0;
let secondCount = 0;
let miniSecondCount = 0;

const timeStart = () => {
    miniSecondCount++;
    if(miniSecondCount >= 60){
        miniSecondCount = 0;
        secondCount++;
        if(secondCount >= 60){
            secondCount = 0;
            minuteCount++;
            if(minuteCount >= 60){
                minuteCount = 0;
                hourCount++;
            }
        }
    };
    miniSecondCount < 10 ? miniSecond.innerHTML = `0${miniSecondCount}` : miniSecond.innerHTML = miniSecondCount;
    secondCount < 10 ? second.innerHTML = `0${secondCount}` : second.innerHTML = secondCount;
    minuteCount < 10 ? minute.innerHTML = `0${minuteCount}` : minute.innerHTML = minuteCount;
    hourCount < 10 ? hour.innerHTML = `0${hourCount}` : hour.innerHTML = hourCount;
}
let interval;
function setTimeStart() {
    interval = setInterval(timeStart, 15)
start.disabled = true;
pause.disabled = false;
reset.disabled = false;
};
function setTimePause() {
    clearInterval(interval);
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = false;
};
function setTimeReset() {
    miniSecondCount = 0;
    secondCount = 0;
    minuteCount = 0;
    hourCount = 0;
    miniSecondCount < 10 ? miniSecond.innerHTML = `0${miniSecondCount}` : miniSecond.innerHTML = miniSecondCount;
    secondCount < 10 ? second.innerHTML = `0${secondCount}` : second.innerHTML = secondCount;
    minuteCount < 10 ? minute.innerHTML = `0${minuteCount}` : minute.innerHTML = minuteCount;
    hourCount < 10 ? hour.innerHTML = `0${hourCount}` : hour.innerHTML = hourCount;
    clearInterval(interval)
    start.disabled = false;
    pause.disabled = false;
    reset.disabled = false;
};

start.addEventListener('click', setTimeStart);
pause.addEventListener('click', setTimePause);
reset.addEventListener('click', setTimeReset);
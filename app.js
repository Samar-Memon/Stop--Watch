const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const miniSecond = document.getElementById('miniSecond');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');


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
};
function setTimePause() {
    clearInterval(interval);
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
};

function startGetClass() {
    start.classList.toggle('startClass');
    if(start.className == 'startClass'){
        setTimeStart();
        pause.classList.remove('pauseClass');
    }
}
function pauseGetClass() {
    pause.classList.toggle('pauseClass');
    if(pause.className == 'pauseClass'){
        setTimePause();
        start.classList.remove('startClass');
    }
}
function resetGetClass() {
        start.classList.remove('startClass');
        pause.classList.remove('pauseClass');
        setTimeReset();
};

start.addEventListener('click', startGetClass);
pause.addEventListener('click', pauseGetClass);
reset.addEventListener('click', resetGetClass);
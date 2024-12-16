let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value) {
    return String(value).padStart(2, "0") //take value, convert to string, if not 2 digits add a leading 0.
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);  //minutes rounded down by floor
    const seconds = secondsElapsed % 60;  //seconds 59 and below
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;  //reaching out to HTML file via innerHTML. Changes GUI to 00:00 clock.
}

function timer() {
    secondsElapsed++;  //secondsElapsed++ = adding 1 every time
    setTime()  //calling the funtion reated above
}

function startClock() {
    if (interval) stopClock()  //when clock stopped if you click start it resumes from last second it was stopped on.
    interval = setInterval(timer, 1000)  //1000 = 1000ms or 1 second
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}

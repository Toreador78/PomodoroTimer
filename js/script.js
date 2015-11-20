var display;
var timerObj;
var timer;
var duration = 25*60;
var remainingDuration = NaN;

function timeParser(time){
  var minutes, seconds;

  minutes = parseInt(time / 60, 10);
  seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
}

function startTimer() {
  timer = isNaN(remainingDuration) ? duration : remainingDuration;
  timerObj = setInterval(function () {
    display.textContent = timeParser(timer);
    timer--;
    if (timer < 0) {
      alert("Pomodoro done!");
      timer = duration;
    }
  }, 1000);
}

function stopTimer(){
  clearInterval(timerObj);
  remainingDuration = timer;
}

function resetTimer(){
  clearInterval(timerObj);
  remainingDuration = NaN;
  timer = duration;
  display.textContent = timeParser(duration);
}

function increaseDuration(){
  duration += 60;
  display.textContent = timeParser(duration);
}

function decreaseDuration(){
  duration -= 60;
  display.textContent = timeParser(duration);
}

document.getElementById('startBtn').onclick = function(){startTimer();};
document.getElementById('stopBtn').onclick  = function(){stopTimer();};
document.getElementById('resetBtn').onclick = function(){resetTimer();};
document.getElementById('plusBtn').onclick  = function(){increaseDuration();};
document.getElementById('minusBtn').onclick = function(){decreaseDuration();};


window.onload = function () {
  display = document.querySelector('#timer');
  display.textContent = timeParser(duration);
};

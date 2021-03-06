var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
  min = chronometer.minutes;
  minDec.innerHTML = chronometer.minutes[0];
  minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.seconds[0];
  secUni.innerHTML= chronometer.seconds[1];
}

function printMilliseconds() {
  let indexA = chronometer.miliseconds.length;
  milDec.innerHTML = chronometer.miliseconds[indexA-2];
  milUni.innerHTML = chronometer.miliseconds[indexA-1];
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(chronometer.intervalId != 0) {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  } else {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(chronometer.intervalId === 0) {
    chronometer.resetClick();
    chronometer.minutes = '00';
    chronometer.seconds = '00';
    chronometer.miliseconds = '00';
    document.getElementById('splits').remove();
    let olSplit = document.createElement('ol');
    olSplit.setAttribute('id', 'splits');
    document.getElementById('splits-container').appendChild(olSplit);

    printTime();
  } else {
    let split = chronometer.splitClick();
    let text = document.createTextNode(split);
    let li = document.createElement('li');
    li.appendChild(text);
    li.setAttribute('class', 'li-split');
    document.getElementById('splits').appendChild(li);
  }
});

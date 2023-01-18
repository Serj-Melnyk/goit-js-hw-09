const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let changeColor = '';

buttonStart.addEventListener('click', onClickStart);
buttonStop.addEventListener('click', onClickStop);

function onClickStart(evt) {
  buttonStart.setAttribute('disabled', 'disabled');

  changeColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStop(evt) {
  buttonStart.removeAttribute('disabled', 'disabled');
  clearInterval(changeColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

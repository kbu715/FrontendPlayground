const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = '이제 31살이야 으아ㅏㅏ!';
const button = document.getElementById('btn');

let idx = 1;

let speed = 300 / speedEl.value;

let stop = false;

writeText();

function writeText() {
  if (stop === true) {
    return;
  } else {
    textEl.innerText = text.slice(0, idx);
    idx++;
    if (idx > text.length) {
      idx = 1;
    }
  }

  const controlSpeed = setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 300 / e.target.value;
}); // input: 숫자를 타이핑하거나 arrow key로 숫자를 증가시키거나 할 경우!!!

button.addEventListener('click', (e) => {
  stop = !stop;
  button.innerText = stop ? 'START' : 'STOP';
  writeText();
});

const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Your life awesome',
  'Your life beautiful',
  'Your life great',
  'Your life fantastic',
  'Your life energetic',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(type = null, message = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 1500);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

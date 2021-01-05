const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

const aLinks = document.querySelectorAll('a');

aLinks.forEach((a) =>
  addEventListener('click', (e) => {
    a.classList.remove('current');
    e.target.classList.add('current');
  })
);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

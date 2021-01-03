const toggles = document.querySelectorAll('.faq-toggle');
const closeBtn = document.querySelector('.close');
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});

closeBtn.addEventListener('click', () => {
  toggles.forEach((toggle) => {
    toggle.parentNode.classList.remove('active');
  });
});

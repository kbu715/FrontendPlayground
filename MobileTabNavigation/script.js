const listItems = document.querySelectorAll('nav ul li');
const contents = document.querySelectorAll('.content');

listItems.forEach((list, index) => {
  list.addEventListener('click', (e) => {
    hideAllContents();
    hideAllLists();
    list.classList.add('active');
    contents[index].classList.add('show');
  });
});

function hideAllLists() {
  listItems.forEach((list) => list.classList.remove('active'));
}

function hideAllContents() {
  contents.forEach((content) => content.classList.remove('show'));
}

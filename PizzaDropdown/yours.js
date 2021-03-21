// const button = document.querySelector('.dropdown button');
// const menu = document.querySelector('.dropdown-menu');
// const options = document.querySelectorAll('.dropdown-option')
// const nextButton = document.querySelector('.next-button');

// console.log(nextButton);
// console.log(options);

// button.addEventListener('click', function(e){
//     menu.classList.toggle('show');
// })

// button.addEventListener('blur', function(e){
//     menu.classList.remove('show');
// })

// options.forEach(function(op){
//     op.addEventListener('click', function(e){
//         console.log(op.innerText);
//         button.textContent = op.innerText;
//         menu.classList.remove('show');
//         nextButton.removeAttribute('disabled');
//     })
// })





const dropdown = document.querySelector('.dropdown')
const toggleButton = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')
const nextButton = document.querySelector('.next-button')

toggleButton.addEventListener('click', function () {
  menu.classList.toggle('show')
})

// 'focus'가 해제되는 그 찰나의 순간을 'blur' 이벤트라고 보면된다.
toggleButton.addEventListener('blur', function () {
  menu.classList.remove('show')
})

options.forEach(function (item) {
  item.addEventListener('click', selectOption)
})

function selectOption() {

  const branchName = this.textContent.trim() // trim() : 공백제거
  console.log(branchName);
  toggleButton.textContent = branchName;
  toggleButton.classList.add('selected')
  nextButton.removeAttribute('disabled')
}
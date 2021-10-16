const dropdownToggle = document.querySelector('.dropdown-toggle')
const menuList = document.querySelector('.dropdown-menu')
const dropdownOptions = document.querySelectorAll('.dropdown-option')
const nextButton = document.querySelector('.next-button')

dropdownToggle.addEventListener('click', function () {
  menuList.classList.toggle('show')
})

dropdownToggle.addEventListener('blur', function () { // 'focus'가 해제되는 그 찰나의 순간을 'blur'
  menuList.classList.remove('show')
})

dropdownOptions.forEach(option => {
  option.addEventListener('click', function (e) {   
    dropdownToggle.innerText = e.currentTarget.innerText
    dropdownToggle.classList.add('selected')
    nextButton.removeAttribute('disabled')
  })
})
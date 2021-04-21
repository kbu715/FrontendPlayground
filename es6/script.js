const lis = document.querySelectorAll("li");

console.log(lis);

console.log(toString.call(lis)) // [object NodeList]



/* 
filter includes from 을 사용해서 문자열 'e'가 포함된 노드로 구성된 배열을
만들어서 반환하기
*/

const array = Array.from(lis);

console.log(array, typeof array);

const filteredArray = array.filter(e => e.innerText.includes('e'));

filteredArray.forEach(element => console.log(element.innerText))
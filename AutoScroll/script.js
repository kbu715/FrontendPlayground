const lis = document.querySelectorAll('li');

const jok_loc = document.getElementById('족발').offsetTop;
const bo_loc = document.getElementById('보쌈').offsetTop;
const piz_loc = document.getElementById('피자').offsetTop;
const chi_loc = document.getElementById('치킨').offsetTop;
const zza_loc = document.getElementById('짜장면').offsetTop;
const bok_loc = document.getElementById('볶음밥').offsetTop;
const zzam_loc = document.getElementById('짬뽕').offsetTop;
const ham_loc = document.getElementById('햄버거').offsetTop;


// console.log(jok_loc, bo_loc);


lis.forEach(li => {
    li.addEventListener('click', () => {
        switch (li.innerText) {
            case '족발':
                window.scrollTo({top: jok_loc, behavior: 'smooth'})
                break;
            case '보쌈':
                window.scrollTo({top: bo_loc, behavior: 'smooth'})
                break;
            case '피자':
                window.scrollTo({top: piz_loc, behavior: 'smooth'})
                break;                
            case '치킨':
                window.scrollTo({top: chi_loc, behavior: 'smooth'})
                break;
            case '짜장면':
                window.scrollTo({top: zza_loc, behavior: 'smooth'})
                break;
            case '볶음밥':
                window.scrollTo({top: bok_loc, behavior: 'smooth'})
                break;
            case '짬뽕':
                window.scrollTo({top: zzam_loc, behavior: 'smooth'})
                break;
            case '햄버거':
                window.scrollTo({top: ham_loc, behavior: 'smooth'})
                break;
            default:
                break;
        }
    })
})

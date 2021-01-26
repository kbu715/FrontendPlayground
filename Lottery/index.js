const SETTING = {
    name : "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
}

function getRandomNumber({name, count, maxNumber}){
    //랜덤한 유일한 숫자값을 추출

    let randomNum = Math.floor(Math.random()*maxNumber);
    // console.log(randomNum);

    const setInstance = new Set();


    for(let i = 0 ; i < count ; i++){
       
        let randomNum = Math.floor(Math.random()*maxNumber);
        if(!setInstance.has(randomNum.toString())){
            setInstance.add(randomNum.toString())
        } else {
            i--;
        }

    }

    setInstance.forEach(v => console.log(v))
    console.log(name)

}

getRandomNumber(SETTING);
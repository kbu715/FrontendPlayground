const SETTING = {
    name : "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
}

function getRandomNumber({count, maxNumber}){
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

    console.log(setInstance.values());

}

getRandomNumber(SETTING);
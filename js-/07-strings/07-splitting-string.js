let str = 'Today is Sunday';

const words = str.split();

console.log(words);


let str2 = '+1 (312) 000 0000';

let str11 = 'Today is Sunday';



function isEven(number) {
    return (number % 2 === 0)
}


function initials(fname,lname) {
return `${fname[0]}.${lname[0]}.`
}

initials('jon','doe')

function inits(fullname) {
    let nameList = fullname.split(' ')
    return  `${nameList[0][0].toUpperCase()}${nameList[1][0].toUpperCase()}`
}


console.log(inits('moe hishmeh'))


function isWin1(firstNumber,secondNumber) {
    return firstNumber > 0 && secondNumber > 0;
};

const isWin2 = function(firstNumber,secondNumber) {
    return firstNumber > 0 && secondNumber > 0;
};

const isWin3 = (firstNumber,secondNumber) => firstNumber > 0 && secondNumber > 0;

console.log(isWin3(2,2))





const theEnd = (str,bool) => {
    return bool ? str[0]:str.at(-1)
    
}

console.log(theEnd('hey', false))
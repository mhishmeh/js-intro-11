const { getRandomNumber } = require('./MathHelper.js')



// let ran1  = getRandomNumber(1,3)


// console.log(`${ran1} is the random number`)


// switch (ran1) {
//     case 1:
//         console.log('one!');
//         break;
//     case 2:
//         console.log('two!')
//         break;
//     default:
//         console.log('three')
// }



const date = new Date();

let dayOfTheWeek = date.getDay();

if (dayOfTheWeek === 0 || dayOfTheWeek === 6) {
    console.log('WEEKEND')
} 
else {
    console.log('WEEKDAY')
}


switch (dayOfTheWeek) {
    case 0:
        console.log('WEEKEND');
        break;
    case 6:
        console.log('WEEKEND');
        break;
    default:
        console.log('WEEKDAY')
}







function posNegZero(number) {
    return number > 0 ? 'POSITIVE': number < 0 ? 'NEGATIVE': 'zero'
}

console.log(posNegZero(-2))

function startE(string) {
    return string.toLowerCase().startsWith('e')
}

console.log(startE(''))

function divisible5(number) {
    return number % 5 === 0;
};


function fooBar(number) {
    if (number % 5 === 0 && number % 7 === 0) return 'foobar';
    
    else if (number % 5 === 0) return 'foo';
    else if (number % 7 ===0) return 'bar';
    return number;
}


console.log(fooBar(35))
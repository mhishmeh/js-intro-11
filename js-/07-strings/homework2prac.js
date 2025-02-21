const {getRandomNumber} = require('./../utils/MathHelper.js')


let num1 = getRandomNumber(0,1)
let num2 = getRandomNumber(0,1)
console.log(num1 === num2)


let input = 'h'
console.log( typeof input === 'number' || typeof input == 'string' ?  `${input} is a ${typeof input}`: 'INVALID IN')



if (typeof input === 'number') {
    console.log(`${input} is a digit.`)
} 
else if (typeof input == 'string') {
    console.log(`${input} is a letter.`)

}
else {
    console.log('INVALID INPUT')
}


let char = ''
let charToCodee = char.charCodeAt(0)
if (charToCode >= 97 && charToCode <= 122) console.log(`${char} is a lowercase letter`);
else if (charToCode >= 65 && charToCode <= 90) console.log(`${char} is an uppercase letter`);
else console.log(`INVALID INPUT`)



let char4 = ' '
let charToCode = char4.charCodeAt(0)

if (charToCode >= 97 && charToCode <= 122 || charToCode >= 65 && charToCode <= 90 || charToCode >= 48 && charToCode <= 57 || charToCode == 32) console.log('not a special character')
else console.log('special character')


let char5 = 'e'
if (char.5)
else if (char5.toLowerCase().includes('a') || char5.toLowerCase().includes('e') || char5.toLowerCase().includes('i') || char5.toLowerCase().includes('o') || char5.toLowerCase().includes('u')) console.log(`${char5} is a vowel!`)
else console.log(`${char} is not a vowel`)
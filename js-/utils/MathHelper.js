/**
 * returns a random number between two numbers
 * @param {*} start starting number - inclusive
 * @param {*} end ending number - inclusive
 */



function getRandomNumber(start, end) {
    let max = Math.max(start,end);
    let min = Math.min(start,end);

    let randomNumber = Math.floor(Math.random() * (max-min +1) + min);
    return randomNumber;

}

function isDigit(char) {
    return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57
}

console.log(isDigit('4'))

function isLetter(char) {
    return /\w/.test(char)
}

function isSpace(char) {
    return /\s*/.test(char)
}
function isDigitOrLetter(char) {
    return isLetter(char) || isDigit(char)
}

function isSpecial(char) {
    return !isSpace(char) && !isLetter(char) && !isDigit(char)
}

function isVowel(char) {
    return /^[aeiou]$/i.test(char)
}

console.log(isVowel('e'))
module.exports.getRandomNumber = getRandomNumber;
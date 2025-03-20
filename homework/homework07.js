console.log(`\n--------------- Task One ---------------\n`);

/*

Write a function named hasUpperCase() which takes a string argument and return true if there is an uppercase letter and false otherwise.

*/

const hasUpperCase = str => /[A-Z]/.test(str)


console.log(hasUpperCase('125.0'))

console.log(`\n--------------- Task Two ---------------\n`);

/*

Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string​.

*/

const noDigit = str => {
    return str.replace(/\d/g,'')
}

console.log(noDigit('123Tech456Global149'))


console.log(`\n--------------- Task Three ---------------\n`);

/*
Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string​.
*/

const noVowel = str => {
    return str.replaceAll(/[aeiou]/g, '')
}

console.log(noVowel('HeyMan'))



console.log(`\n--------------- Task Four ---------------\n`);

/*

Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. ​

*/

const no13 = arr => arr.map( (x) => x === 13 ? 0 : x)
console.log(no13([13, 13, 13 , 13, 13]))


console.log(`\n--------------- Task Five ---------------\n`);

/*
Write a function named middleInt() which takes three number arguments and return the middle number. ​
*/

const middleInt = (num1, num2, num3) => {
    let arr = [num1, num2, num3]
    let max = Math.max(...arr)
    let min = Math.min(...arr)

    for (let num of arr) {
        if (num !== max && num !== min) return num
    }
}
console.log(middleInt(5,4,6))

console.log(`\n--------------- Task Six ---------------\n`);
/*

Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0

*/

const sumOfDigits = str => str.match(/\d/g).reduce((acc,curr) => parseFloat(curr) + acc, 0) // i might be the goat after this one
console.log(sumOfDigits("hheh1knfn4je5"))

console.log(`\n--------------- Task Seven ---------------\n`);


/*
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.

*/

const arrFactorial = arr => {
    return arr.map((x) => {
        let product = 1
        for (let i = x; i > 1; i--) {
            product *= i
        }
        return product
    })
}

console.log(arrFactorial([1, 2, 3 ,4]))

console.log(`\n--------------- Task Eight ---------------\n`);

/*
Write a function named categorizeCharacters() which takes a string word as argument and return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
*/

const categorizeCharacters = str => {
    const outputArr = ['','','']
    for (let letter of str) {
        if (/[a-z]/i.test(letter)) outputArr[0] += letter
        else if (/\d/i.test(letter)) outputArr[1] += letter
        else outputArr[2] += letter
    }
    return outputArr 

}
console.log(categorizeCharacters("abc123$#%"))


const output = ['h',3]
const output2 = ['j', 3]

console.log(output[0] + output2[0])
const { isPrime } = require('./../utils/MathHelper.js')



console.log(`\n--------------- Task One ---------------\n`)
/*

Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.

*/


const noSpace = str => {
    return str.replaceAll(' ', '')
}  
console.log(noSpace('Hello !!'))
console.log(noSpace('  java !!'))



console.log(`\n--------------- Task Two ---------------\n`)

/*
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""

*/

const replaceFirstLast = str => {
    if (str.length < 2) return ''
    return str.at(-1) + str.slice(1, str.length - 1) + str[0]
}   

console.log(replaceFirstLast('Hello'))


console.log(`\n--------------- Task Three ---------------\n`)

/*

Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

*/

const hasVowel = str => /[aeiou]/i.test(str)

console.log(hasVowel('ABC'))

console.log(`\n--------------- Task Four ---------------\n`)

/*
Write a function named checkAge() which takes a arr[i]ber argument to be considered as the yearOfBirthOfBirth and returns a message below based on the given yearOfBirth.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future yearOfBirth, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 yearOfBirths old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"

*/

const checkAge = yearOfBirth => {
    let age = 2023 - yearOfBirth
    if (yearOfBirth > 2023 || age > 120) return 'AGE IS NOT VALID'
    if (age < 16) return 'AGE IS NOT ALLOWED'
    return 'AGE IS ALLOWED'


}

console.log(checkAge(2015))

console.log(`\n--------------- Task Five ---------------\n`)

/*
Write a function named averageOfEdges() which takes three arr[i]ber arguments and will return average of min and max arr[i]bers​.
*/

const averageOfEdges = (...int) => {
    return  (Math.max(...int) + Math.min(...int)) / 2
}

console.log(averageOfEdges(-2, -2, 10))


console.log(`\n--------------- Task Six ---------------\n`);

const noA = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith('a')) {
            arr[i] = '###'
        }
    }
    return arr
}

console.log(noA(['javascript', 'A', 'Arrow']))


console.log(`\n--------------- Task Seven ---------------\n`);
    /*

    Write a function named no3and5() which takes an array of integer arr[i]bers as argument and will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101

*/

const no3and5 = arr => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0){
            arr[i] = 101
            continue
        } 
        if (arr[i] % 3 === 0) {
            arr[i] = 99
            continue
        }
        if (arr[i] % 5 === 0) {
            arr[i] = 100
            continue
        }
    }
    return arr

}

console.log(no3and5([3, 4, 5, 6,15]) )

console.log(`\n--------------- Task Eight ---------------\n`);

/*

Write a function named countPrimes() which takes an array of integer numbers as argument and will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.

*/

const countPrimes = arr =>  {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i]) === true) count += 1
    }
    return count
}

console.log(countPrimes([7, 4, 11, 23, 17]) )



console.log(`\n--------------- Task Nine ---------------\n`);

/*

Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.
*/

const removeDuplicates = arr => {
    const output = []

    for (let num of arr) {
        if (output.includes(num)) continue
        output.push(num)
    }
    return output
}

console.log(removeDuplicates([3,4,2,3,4,4,1]))


console.log(`\n--------------- Task Ten ---------------\n`);

/*
Write a method named isDateFormatValid() that takes a string as an argument and returns true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>

*/


const isDateFormatValid = str => {
    let newArr = str.split('/')
    if (newArr.length !== 3) return false
    if (newArr[0] < 1 || newArr[0] > 12 || newArr[1] < 1 || newArr[1] > 31 || (newArr[0].length !== 2 || newArr[1].length !== 2)) return false
    return true
}

console.log(isDateFormatValid(""),
isDateFormatValid("15/30/2020") 	,
isDateFormatValid("10-30-2020 ") 	,
isDateFormatValid("10.30.2020") 	,
isDateFormatValid("5/30/2020") 		,
isDateFormatValid("05/30/2020 ") 	,
isDateFormatValid("10/2/2020") 		,
isDateFormatValid("10/02/2020 ") )




console.log(`\n--------------- Task Eleven ---------------\n`);

/*

Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.

*/

const secondMax = arr => {
    let output = removeDuplicates(arr)
    if (output.length === 1) return output[0]

    output.sort((a,b) => b - a)

    return output[1]
}

console.log((secondMax([7, 4, 4, 4, 23, 23, 23]) ))


console.log(`\n--------------- Task Twelve ---------------\n`);
/*

Requirement: 
Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.

*/

const secondMin = arr => {
    let output = removeDuplicates(arr)
    if (output.length === 1) return output[0]

    output.sort((a,b) => b - a)

    return output.at(-2)
}

console.log((secondMin([4,8,12]) ))


console.log(`\n--------------- Task Thirteen ---------------\n`);

/*

Write a method named mostRepeated() takes an array argument and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the count of one element will always be more than the others.

*/

const mostRepeated = arr => {
    let hashMap = {}

    for (let num of arr) {
        if (num in hashMap) hashMap[num] += 1
        else{
            hashMap[num] = 1
        }
    }
    console.log(hashMap)
    let max = -Infinity
    let keyyy;
    for (let key in hashMap){
        if (hashMap[key] > max) max = hashMap[key], keyyy = key

    }
    return keyyy
}

console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]))



const greet = function(arr) {
    return arr.sort()
  };
  console.log(greet("John")); // "Hello, John!"

  const omar = arr => {
    return arr.sort()
  }

  console.log(omar('Moe'))



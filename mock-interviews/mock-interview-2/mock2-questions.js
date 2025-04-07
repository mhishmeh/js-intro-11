/*

Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if invoked.
Examples:
doubleOrTripleWord("Tech") doubleOrTripleWord("Apple") doubleOrTripleWord("") doubleOrTripleWord(" ") doubleOrTripleWord("1") doubleOrTripleWord("22")
First and Last Word
the string length is even or doubled if the string length is odd when
-> "TechTechTech" -> "AppleApple”
-> ""
->""
-> "11"
-> "222222"

*/

function doubleOrTripleWord(str) {
    if (str.length % 2 === 0) return str + str
    return str + str + str
}

console.log(doubleOrTripleWord("Apple"))

/*

Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.

*/

const firstlastWord = str => {
    if (str.length < 1) return ''
    const newArr = str.split(' ')
    return newArr[0] + newArr.at(-1)
}

console.log(firstlastWord("     ").length)



/*
Has Vowel

Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

*/

const hasVowel = str => /[aeiou]/i.test(str)

console.log(hasVowel('NNNN'))


/*
Start Vowel

Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

*/


const startVowel = str => {
    let vowels = 'aeiou'

    return vowels.includes(str[0].toLowerCase())
   
}

console.log(startVowel('bbebebe'))
///[aeiou]/i.test(str[0])

/*

Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers.

*/


const averageOfEdges = (num1, num2, num3) => (Math.max(num1, num2, num3) + Math.min(num1, num2, num3)) / 2
console.log(averageOfEdges(3,3,3))


/*
Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.

*/

const replaceFirstLast = str => {
    let newStr = str.trim()
    if (newStr.length < 2) return ''
    
    return newStr.at(-1) + newStr.slice(1, newStr.length - 1) + newStr[0]
}

console.log(replaceFirstLast('    A   '))

/*

Swap First and Last Four Characters
Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.

*/

const swap4 = str => {
    if (str.length < 8) return ''

    console.log(str.slice(str.length - 4, -1))
    return str.slice(str.length - 4) + str.slice(4, str.length - 4) + str.slice(0, 4)
}

console.log(swap4('TechGlobal')) // "obalGlTech"


/*

Swap First and Last Words
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.

*/

const swapFirstLastWord = str => {

    const newArr = str.trim().split(' ')

    if (newArr.length < 2) return ' '
    

    return newArr.at(-1)+  ' ' + newArr.slice(1, -1) + ' ' + newArr[0]
}

console.log(swapFirstLastWord("hello "))


/*
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive when invoked.

*/

const countPos = arr => {
    let count = 0
    for (let num of arr) {
        if (num > 0) count += 1
    }
    return count
}

console.log(countPos([-23, -4, 0, 2, 5, 90, 123]))


/*

Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.

*/

const getEvens = (num1, num2) => {
    const outputArray = []
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) outputArray.push(i)
    }
    return outputArray
}

console.log(getEvens(4, 12))




/*

Find Numbers Divisible By 5
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers.

*/

const getMultipleOf5 = (num1, num2) => {
    const outputArray = []
    for (let i = num1; i <= num2; i++) {
        if (i % 5 === 0) outputArray.push(i)
    }
    return outputArray
}

console.log(getMultipleOf5(4, 12))



/*

Count Negative Numbers
Write a function named countNeg() which takes an array of numbers as an argument and returns how many elements are negative when invoked.

*/

const countNeg = arr => {
    return arr.filter( (x) => x < 0).length
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]))

/*

Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.
NOTE: Ignore case sensitivity.

*/

const countA = str => str.split('').filter((x) => x.toLowerCase() === 'a').length

console.log(countA("QA stands for Quality Assurance"))

/*

Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

*/


const countWords = str => str.trim().split(' ').length


console.log(countWords("Cypress is an UI automation tool. "))

/*

Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.

*/

const factorial = num => {
    let factorial = 1
    for (let i = num; i >= 2; i--) {
        factorial *= i
    }
    return factorial
}

console.log(factorial(0))


/*

Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.

*/
const count3OrLess = str => {
    let count = 0
    const arr = str.trim().split(' ')
    for (let word of arr) {
        if (word.length >= 3) count += 1
    }
    return count
}

console.log(count3OrLess("JavaScript is fun"))



/*
Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

*/
// hello        world
const removeExtraSpaces = str => {
    let trimmedStr = str.trim().replace(/\s+/g, ' ')
    return trimmedStr

}

console.log(removeExtraSpaces('   hello    world  '))

/*

Write a function named middleInt() which takes three number arguments and return the middle number.

*/

const middleInt = (num1, num2, num3) => {

    const arr = [num1, num2, num3]
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    console.log(min, max)
    return arr.filter( (x) => x !== max && x !== min)[0]

}

console.log(middleInt(4,5,6))

/*

Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

*/
//DO AGAIN

const firstDuplicate = arr => {
    const seenSet = []
    const firstSet = []
   
    for (let num of arr) {
        if (firstSet.has(num)) seenSet.add(num)
            else firstSet.add(num)
                 
    }

    return seenSet
}


console.log(firstDuplicate([ 3, 7, 7, 0, 3, 10 ]))

/*

Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

*/

const getDuplicates = arr => {
    const seenSet = new Set()
    const firstSet = new Set()
   
    for (let num of arr) {
        if (firstSet.has(num)) seenSet.add(num)
            else firstSet.add(num)
                 
    }

    return [...seenSet]
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))

/*

Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string.

*/



const arrFactorial = arr => {
    return arr.map((ele) => {
        
            let factorial = 1
            for (let i = ele; i > 1; i--) {
                factorial *= i
            }
            return factorial
        })
    }


console.log(arrFactorial([]))





// SUM OF DIGITS

const sumOfDigits = str => {
    let sum = 0
    for (let i of str) {
        if (/\d/.test(i)) sum += Number(i)
    }
    return sum
}
console.log(sumOfDigits('jav3as4cript'))




// NO VOWELS !!!
const noVowel = str => str.replaceAll(/[aeiou]/ig,'')

console.log(noVowel('MOE'))



// REMOVE DUPLICATES

const removeDuplicates = arr => {
    return [...new Set(arr)]

}
console.log(removeDuplicates([1,1,2,2,4,5]))



// NO ELEMENTS EQUALS 13

const no13 = arr => {
    return arr.map( (ele) => ele === 13 ? 0 : ele)

}

console.log(no13([13,4,3,5]))




// NO ELEMENTS DIVISIBLE BY 3 AND 5

const no3and5 = arr =>  arr.map( (x) => (x % 3 === 0 && x % 5 === 0) ? 101 : x % 5 === 0 ? 99: x % 3 === 0 ? 100 : x)

console.log(no3and5([3,4,5,11,3]))
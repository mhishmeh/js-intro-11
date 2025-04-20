/*

Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if invoked.


*/

const doubleOrTripleWord = str => str.length % 2 === 0 ? str + str + str : str + str


/*
Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.

*/

const firstLastWord = str => {
    const arr = str.trim().split(' ')
    return arr[0] + arr.at(-1)

}


console.log(firstLastWord('   ').length)



/*

Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

*/

const hasVowel = str => /[aeiou]/i.test(str)


console.log(hasVowel('HY'))

/*

Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

*/

const startVowel = str => /[aeiou]/i.test(str[0])





/*

First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

*/

const firstDuplicate = arr => {
    const seen = new Set()
    const duplicates = []
    for (let i of arr) {
        if (seen.has(i)) duplicates.push(i)
        else seen.add(i)
    }
   

    for (let i of arr) {
        if(duplicates.includes(i)) return i
    
    }
    return -1
   
}

console.log(firstDuplicate([5, 7, 7, 0, 5, 10 ]))



const output = [1]

console.log(output.includes(1))



/*

Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers.
Examples:
averageOfEdges(0, 0, 0) -> 0 averageOfEdges(0, 0, 6) -> 3
averageOfEdges(-2, -2, 10) averageOfEdges(-3, 15, -3) averageOfEdges(10, 13, 20)
-> 4 -> 6
-> 15

*/

const averageOfEdges = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3)
    let min = Math.min(num1, num2, num3)

    return (max + min )/ 2
}

console.log(averageOfEdges(0,0,6))




//



// const countConsonants = stringWord => {
//     let consonantsCounter = 0;

//     for (let i = 0; i < stringWord.length; i++) {

//       let newStr = stringWord.replaceAll(/\s/g, '')
//       if((/[^aeiou ]/i.test(stringWord[i]))) consonantsCounter += 1

//     }

//       return consonantsCounter


//   }

//   console.log(countConsonants("JavaScript is fun"))



  //swap first and last characters

  const replaceFirstLast = str => {
    if (str.trim().length < 2) return ''
    let newStr = str.trim()
    return newStr.at(-1) + newStr.slice(1, -1) + newStr[0]
  }
console.log(replaceFirstLast('Tech Global'))



const swap4 = str => {
    let trimmedStr = str.trim()
    if (trimmedStr < 8) return ''
    return trimmedStr.slice(-4) + trimmedStr.slice(4,-4) + trimmedStr.slice(0,4)

}

console.log(swap4('JavaScript'))


const swapFirstLastWord = str => {
    const arr = str.trim().split(' ')
    let first = arr[0]
    arr[0] = arr.at(-1)
    arr[arr.length - 1] = first
    return arr.join(' ')


}
console.log(swapFirstLastWord('hey foo foo foo foo bar foo bar ben'))

// hello there john -> ['hello', 'there', 'john']

const getMultipleOf5 = (num1, num2) => {
    const output = []
    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            if (i % 5 === 0) output.push(i)
        }
    }
    else {
        for (let i = num1; i <= num2; i++) {
            if (i % 5 === 0) output.push(i)

        }
    }
    return output
}

console.log(getMultipleOf5(23,5))

const factorial = num => {
    let factorial = 1
    for (let i = num; i > 1; i--) {
        factorial *= i
    }
    return factorial
}
console.log(factorial(80))



const removeExtraSpaces = str => str.replaceAll(/\s+/g,' ').trim()


console.log(removeExtraSpaces('    hehehe nn       fwijfoiwj              '))




const middleInt = (a, b, c) => {
    return a + b + c - Math.max(a, b, c) - Math.min(a, b, c);
  };
console.log(middleInt(1, 2, 2), middleInt(5, 5, 8), middleInt(5, 3, 5) ,middleInt(1, 1, 1), middleInt(-1, 25, 10)
)




/*

First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) firstDuplicate([ 5, '5', 3, 7, 4 ]) firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) firstDuplicate([ 1, 2, 3])
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])
*/


const firsstDuplicate = arr => {
    const seen = new Set()
    const duplicates = []
    for (let i of arr) {
        if (seen.has(i)) duplicates.push(i)
        else seen.add(i)
    }
    for (let i of arr) {
        if (duplicates.includes(i)) return i
    }
    return -1


}
console.log(firsstDuplicate([ 3, 7, 10, 0, 3, 10 ]), firsstDuplicate([ 5, 7, 7, 0, 5, 10 ]), firsstDuplicate([ 5, '5', 3, 7, 4 ]) ,firsstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) ,firsstDuplicate([ 1, 2, 3]),
firsstDuplicate([ 'foo', 'abc', '123', 'bar' ]))




const findDuplicates = arr => {
    const seen = new Set()
    const duplicates = []
    for (let i of arr) {
        if (seen.has(i)) duplicates.push(i)
        else seen.add(i)
    }
    return duplicates

}

console.log(findDuplicates([1,1,2,3,4,5,5]))



const reverseStringWords = str => {
    const arr = str.trim().split(' ')

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('')
    }
    return arr.join(' ')
}

console.log(reverseStringWords('hey man'))




// const countMultipleWords = arr => {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].split(' ').length > 1) count++
//     }
//     return count
// }

// QUESTION 17 PROBLEMS FUUUUCKCKCKKCKKCKCK
/*

Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
*/

const add = (arr1, arr2) => {
    let maxLength = Math.max(arr1.length, arr2.length)
    const output = []

    for (let i = 0; i < maxLength; i++) {
        let value1 = arr1[i] || 0
        let value2 = arr2[i] || 0

        output.push(value1 + value2)
    }
    return output
}

console.log(add([1,3,3],[1,3,3]))


/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) arrFactorial([0, 5]) arrFactorial([5 , 0, 6]) arrFactorial([])
-> [1, 2, 6, 24] -> [1,120]
-> [120, 1, 720] -> []

*/
const arrFactorial = arr => {
    return arr.map((x) => {
        let factorial = 1
        for (let i = x; i > 1; i--) {
            factorial *= i
        }
        return factorial
    })
}

console.log(arrFactorial([5,0,6]))


/*

Count Consonants
-> "olleH dlroW"
-> "I ekil tpircSavaJ" -> "olleH"
-> ""
-> ""
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") countConsonants("Hello World") countConsonants("JavaScript is fun")
-> 3 -> 8

*/

const countConsonants = str => {
    let counter = 0
    let trimmedStr = str.replaceAll(/\s/g, '')

    for (let i of trimmedStr) {
        if (/[^aeiou\d]/i.test(i)) counter +=1 
    }
return counter
}
console.log(countConsonants("Hello Wo34e4rld"))


/*
Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.

*/

const countMultipleWords = arr => {
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i].trim().split(' ')
        if (ele.length > 1) counter += 1
    }
    return counter
}

console.log(countMultipleWords(['hey man', 'h         ','wow']))

/*
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/

const countVowels = str => {
    let counter = 0
    for (let i of str) {
        if (/[aeiou]/i.test(i)) counter ++
    }

    return counter
}

console.log(countVowels('eee'))

/*
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from the original string.
*/

const noDigit = str => str.replace(/\d/g,'')
console.log(noDigit('1hu4444444'))


/*
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s.
*/
const no13 = arr => {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr)
        if (arr[i] === 13) arr[i] = 0
    }
    return arr
}

console.log(no13([13,3,3]))


// Write a function named noVowel() which takes a string argument and returns a new string with all vowels removed from the original string.

const noVowel = str => str.replaceAll(/[aeiou]/gi,'')

console.log(noVowel('MOHAMMAD'))

// Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.
// NOTE: Palindrome: It is a word that is read the same backward as forward
// Examples: kayak, civic, madam

const isPalindrome = str =>  {
    let r = str.length - 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[r]) return false
        else r -= 1
    }
    return true
}

console.log(isPalindrome('madeam'))

// Write a function named as isPrime() which takes a number as an argument and returns true if the number is prime or returns false otherwise when invoked.
// NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.
// Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
// NOTE: The smallest prime number is 2 and there is no negative prime numbers.

const isPrime = num => {
    if (num < 2) return false
    if (num % 2 === 0) return false
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}
console.log(isPrime(-4))


// Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.

const removeDuplicates = arr => {

    const noDuplicates = []

    for (let i of arr) {
        if (noDuplicates.includes(i)) continue
        noDuplicates.push(i)
    }
    return noDuplicates
}
console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]))





// //Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word separately reversed when invoked.
// NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.


//Sum Of Digits
// Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string.
// Examples:
// sumOfDigits("Javascript") sumOfDigits("John’s age is 29") sumOfDigits("$125.0")
// -> 0 -> 11 -> 8



const sumOfDigits = str => {
    let sum = 0
    for (let i of str) {
        if (/\d/.test(i)) sum += Number(i)
    }
return sum
}

console.log(sumOfDigits("$1125.0"))



//  16 QUESTIONS

//Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers.

const aaverageOfEdges = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3)
    let min = Math.min(num1, num2, num3)

    return (max + min) / 2
}

console.log(aaverageOfEdges(-2,-2,10))

//
//Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.


const count3OrLess = str => {
    let count = 0
    const arr = str.trim().split(/\s+/)
    for (let i of arr) {
        if (i.length <= 3) count++
    }
    return count
}
console.log(count3OrLess("My Doe idiid"))



// Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.
//NOTE: Ignore case sensitivity

const countA = str => {
    let count = 0
    for (const i of str) {
        if (/a/i.test(i)) count++
    }
    return count
}

console.log(countA('AVaA'))

//Write a function named countNeg() which takes an array of numbers as an argument and returns how many elements are negative when invoked.

const countNeg = arr => arr.filter( (x) => x < 0).length

console.log(countNeg([1,2,-1,-1]))

//Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive when invoked.

const countPos = arr => arr.reduce( (acc, curr) => curr > 0 ? acc + 1 : acc, 0)

console.log(countPos([-1,2,3,3]))

// Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

const countWords = str => {
    let count = 0
    const arr = str.trim().split(' ')
    for (const i of arr) {
        count++
    }
    return count
}
console.log(countWords("1 2 3 4"))

//Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.
// NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
// n! = n × (n-1) × (n-2) × ... × 2 × 1
// Assume you will not be given a negative number.

const ffactorial = num => {
    let factorial = 1

    for (let i = num; i > 1; i--) {
        factorial *= i
    }
    return factorial
}
console.log(ffactorial(1))

/*
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers.
Assume you will not be given negative numbers.

*/

const getEvens = (num1, num2) => {
    const output = []

    let max = Math.max(num1, num2)
    let min = Math.min(num1, num2)

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) output.push(i)
    }
    return output
}
console.log(getEvens(17,3))

/*
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers.
Assume you will not be given negative numbers. Examples:

*/

const ggetMultipleOf5 = (num1, num2) => {
    const output = []

    if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            if (i % 5 === 0) output.push(i)
        }
    }
    else {
        for (let i = num1; i <= num2; i++) {
            if (i % 5 === 0) output.push(i)
        }
    }

    return output
}

console.log(ggetMultipleOf5(17,99))

//Write a function named as firstlastWord() which takes a string word as an argument and returns the first and last words from the given string when invoked.
//NOTE: Return empty string if the given string does not have any word.

const ffirstLastWord = str => {
    if (str.trim().length < 1) return ''
    const arr = str.trim().split(' ')
    return arr[0] + arr.at(-1)

}
console.log(ffirstLastWord('I like Javascrupt'))

/*

Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/

const hhasVowel = str => /[aeiou]/i.test(str)

console.log(hhasVowel('hhhh'))

//Write a function named middleInt() which takes three number arguments and return the middle number.

const mmiddleInt = (num1, num2, num3) => {
   return  num1 + num2 + num3 - Math.max(num1, num2, num3) - Math.min(num1, num2, num3)
}
console.log(mmiddleInt(17,25,11))

//Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

const rremoveExtraSpaces = str => {
    return str.trim().replaceAll(/\s+/g,' ')
}
console.log(rremoveExtraSpaces('    i like     javascrupt  '))


// start Write a function named as startVowel() which takes a string word as an argument and returns true if given string starts with a vowel, and false otherwise when invoked.
//NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U

const sstartVowel = str => /[aeiou]/i.test(str[0])

console.log(sstartVowel('MOE'))

//Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.
// NOTE: If the length is less than 2, return an empty string.
// NOTE: Ignore extra spaces before and after the string.

const rreplaceFirstLast = str => str.at(-1) + str.slice(1,-1) + str[0]

console.log(rreplaceFirstLast('Hello'))


/*
Write a function named as swap4() which takes a string word as an argument and returns the string back with its first and last 4 characters swapped when invoked.
NOTE: Return empty string if the given string does not have 8 or more characters.
*/

const swapFour = str => {
    let trimmedStr = str.trim()
    if (trimmedStr.length < 8) return ''
    return str.slice(-4) + str.slice(4, -4) + str.slice(0, 4)
}

console.log(swapFour('JavaScript'))

///12345678
/// 5678

// 5678 

/*
Write a function named as swapFirstLastWord() which takes a string word as an argument and returns the string back with its first and last words swapped when invoked.
NOTE: Return empty string if the given string does not have 2 or more words.
*/

const swapFirstLastWerd = str => {
    const arr = str.trim().split(' ')
    if (arr.length < 2) return ''
    let first = arr[0]
    arr[0] = arr.at(-1)
    arr[arr.length - 1] = first
    return arr.join(' ')
}
console.log(swapFirstLastWerd('I  '))





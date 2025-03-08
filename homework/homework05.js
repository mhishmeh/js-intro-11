console.log(`\n--------------- Task One ---------------\n`);
/*
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 

*/

function countPos(arr) {
    return arr.filter((x) => x > 0).length
}
console.log(countPos([3,4,0,-1,9]))

console.log(`\n--------------- Task Two ---------------\n`);
/*

Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

*/

function countA(str) {
return (str.match(/[Aa]/g) || []).length
}

console.log(countA('heAAaaaaaaaaAa'))



console.log(`\n--------------- Task Three ---------------\n`);
/*

Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.
*/

function countVowels(str) {
    return (str.match(/[AEIOUaeiou]/g)|| []).length

}
console.log(countVowels('heyee'))


console.log(`\n--------------- Task Four ---------------\n`);

/*

Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

*/

function countConsonants(str) {
    return (str.match(/[^AEIOUaeiou]/g)|| []).length
}

console.log(countConsonants(''))






console.log(`\n--------------- Task Five ---------------\n`);

/*
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
*/

function countWords(arr) {
    const arrOfStr = arr.trim().split(' ')
    return arrOfStr.length
}

console.log(countWords('Cypress is an UI automation tool.'))



console.log(`\n--------------- Task Six ---------------\n`);

/*

Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.


*/

function factorial(num) {
    let product = 1
    for (let i = num; i >= 1; i--) {
        product *= i
        
    }
    return product
}

console.log(factorial(3))


console.log(`\n--------------- Task Seven ---------------\n`);
/*

Write a function named as isPalindrome() which takes a string word as an argument and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity

*/

function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) return false
    }
    return true
}
console.log(isPalindrome('OMARRAMO'))



console.log(`\n--------------- Task Eight ---------------\n`);
/*

Write a function named as countMultipleWords() which takes an array as an argument and returns the count of the elements that has multiple words when invoked.

Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 	

*/

function countMultipleWords(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].trim().split(' ')
        if (element.length > 1) count++
    }
    return count
}

console.log(countMultipleWords([ ]) )





console.log(`\n--------------- Task Nine ---------------\n`);

/*

Write a function named as count3OrLess() which takes a string word as an argument and returns the count of the words that has 3 characters or less when invoked.


*/

function count3OrLess(str) {
    const arr = str.split(' ')
    let count = 0
    for (let i of arr) {
        if (i.length <= 3) count++
    }
    return count
}

console.log(count3OrLess('JavaScript is fun'))






console.log(`\n--------------- Task Ten ---------------\n`);
function isPrime(num) {
    if (num <= 1) return false
    if (num === 2) return true

    for (let i = 3; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(25))



console.log(`\n--------------- Task Eleven ---------------\n`);

/*

Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.

*/




function add(arr1, arr2) {
    const output = []

    if (arr1.length < arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            output.push(arr1[i] + arr2[i])
        }
        let index = arr1.indexOf(arr1.at(-1))
        return output.concat(arr2.slice(index+1))
    }
    else {
        for (let i = 0; i < arr2.length; i++) {
            output.push(arr1[i] + arr2[i])
        }
        let index = arr2.indexOf(arr2.at(-1))
        return output.concat(arr1.slice(index+1))
    }


}

console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))

console.log(`\n--------------- Task Twelve ---------------\n`);
/*

Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

*/

function removeExtraSpaces(str) {
    return str.split(" ").filter(ele => ele !== "").join(" ")
}

console.log(removeExtraSpaces("      Hello    World     "))
console.log(removeExtraSpaces("     JavaScript is          fun"))







console.log(`\n--------------- Task Thirteen ---------------\n`);


/*

Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

*/


function findClosestTo10(arr) {
    let min = Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 10) continue
        if (Math.abs((10 - arr[i]))  < Math.abs((10 - min))) min = arr[i]
    }
    return  min
}

console.log(findClosestTo10([10, -13, 5, 70, 15,57]))
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]))
console.log(findClosestTo10([0, -1, -2]))



console.log(`\n--------------- Task Fourteen ---------------\n`);

/*

Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

*/

function isEmailValid(str) {
    if (str.includes(' ')) return false
    if ((str.match(/@/g) || []).length > 1) return false;
    if (!(/..+@..+\...+/.test(str))) return false
    return true
    }
    

    console.log(isEmailValid(""), 			
    isEmailValid("@gmail.com") ,	
    isEmailValid("johndoe@yahoo") ,	
    isEmailValid("johndoe@.com") ,	
    isEmailValid("a@outlook.com"), 	
    isEmailValid("johndoe@a.com") ,	
    isEmailValid("johndoe@@gmail.com"),
    isEmailValid("johndoe@gmail.com"))




    console.log(`\n--------------- Task Fifteen ---------------\n`);

    /*

    Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

*/

function isPasswordValid(str) {
    if (!(str.length >= 8 && str.length <= 16)) return false
    if (str.includes(' ')) return false
    if (!(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z\d])/.test(str))) return false
    return true
}
console.log(`\n--------------- Task One ---------------\n`);

/*
Write a function named hasLowerCase() which takes a string argument and returns true if there is a lowercase letter and false if it there isn’t. 
*/

const hasLowerCase = str => /[a-z]/.test(str)

console.log(hasLowerCase('moe'))


console.log(`\n--------------- Task Two ---------------\n`);

/*

Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.

*/

const noZero = arr => arr.filter( (ele) => ele !== 0)

console.log(`\n--------------- Task Three ---------------\n`);

/*
Write a function named numberAndSquare() which takes an array of numbers as argument and returns a multidimensional array with all numbers squared. 
*/

const numberAndSquare = arr => {

    const output = []
    for (let i of arr) {
        output.push([i,i**2])
    }
    return output
}

console.log(numberAndSquare([1,2,3]))


console.log(`\n--------------- Task Four ---------------\n`);

/*
Write a function named containsValue() which takes a string array and a string as arguments and returns a boolean value. Search the string variable inside of the array and return true if it exists in the array. If it doesn’t exist, return false. ​

*/

const containsValue = (strArr, str) => {
    return strArr.includes(str)
} 

console.log(containsValue(['hey','man'], 'man'))


console.log(`\n--------------- Task Five ---------------\n`);
/*

Write a function named reverseSentence() which takes a string as argument and returns the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".

*/

const reverseSentence = str => {
    const arr = str.split(' ')
    console.log(arr)
    let output = ''
    if (arr.length <= 1) return 'not enough words!'
    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i].toLowerCase() + ' '

    }
    const uppercase = output[0].toUpperCase()
    const final = uppercase + output.slice(1)
    return final.trim()

}

console.log(reverseSentence('Hello there im moe'))



console.log(`\n--------------- Task Six ---------------\n`);
/*

Write a function named removeStringSpecialsDigits() which takes a string as argument and return a string without the special characters or digits.


*/

const removeStringSpecialsDigits = str => {
    let output = str.split(/[^a-z]/i)
    console.log(output)
    let bar = ''
    for (let i of output) {
        bar += i + ' '
    }
    return bar.trim()
}

console.log(removeStringSpecialsDigits('js'))



console.log(`\n--------------- Task Seven ---------------\n`);

/*
Write a function named removeArraySpecialsDigits() which takes a string array as argument and return back without the special characters or digits.

*/

const removeArraySpecialsDigits = arrStr => {
    const output =  Array(arrStr.length).fill('')
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < arrStr[i].length; j++) {
        if ( /[a-z]/i.test(arrStr[i][j]) || arrStr[j] === ' ') output[i] += arrStr[i][j]

    }
  }
  return output
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]))



console.log(`\n--------------- Task Eight ---------------\n`);

/*
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.

*/

const getCommons = (str1, str2) => {
    const output = []

    for (let i of str1) {
        if( str2.includes(i) ) output.push(i)
    }
    return [...new Set(output)]
}

console.log(getCommons(  ["Javascript", "C#", "C#"], ["Python", "C#", "C++"]))



console.log(`\n--------------- Task Nine ---------------\n`);

/*
Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
*/


const noXInVariables = arr => {
    const output = Array(arr.length).fill('')
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if ( !(arr[i][j].toLowerCase() === 'x')) output[i] += arr[i][j]
        }
    }
    const finalOutput = []
    for (let i of output) {
        if (i.length !== 0) finalOutput.push(i)
    }
return finalOutput
}
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]) )
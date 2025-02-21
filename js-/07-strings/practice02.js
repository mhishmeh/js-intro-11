let str1 = 'I like apples and orange';
let str2 = 'Javascript is not a scipting progamming lanuage';
let str3 = "I don't like books";


console.log(str1.slice(7,12).toUpperCase())



/*
Task02

Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 
-if it has any vowel, then print true
-Else, print false
Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1: let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true


*/

function taskTwo(string) {
    let length = string.length
    let firstChar = string[0]
    let lastChar = string.at(-1)


    const vowels = ['a','e','i','o','u']
   
        if (string.some(vowels.toUpperCase) || string[i].some(vowels)) {
            console.log('true')
 
        } console.log('false')
    }

taskTwo('javascript')




function findMiddle(string) {
    let middle1 = Math.floor(string.length / 2) - 1
    let middle2 = Math.floor(string.length / 2)

    console.log(string.slice(middle1,middle2 + 1))
}

findMiddle('')


function divide(string) {
    if (string.length % 2 === 0) {
        let middle = string.slice(middle1,middle2 + 1)
    } else {
        let middle = stringp(middle1)
    }
}
let middle1 = Math.floor(string.length / 2) 

let strOne = "abab"
let result = strOne.slice(0,2) === strOne.slice(-2)
console.log(`Expected result: ${result}`)


str1 = '1234'
str2 = 'Green'
console.log(str1.slice(1,-1) + str2.slice(1,-1))

let s7 = 'xxbluexx'
console.log(s7.startsWith('xx') && s7.endsWith('xx'))


function swap(string){
let string_to_array = string.split(' ')
let lastWord = string_to_array.at(-1)
let firstWord = string_to_array[0]
string_to_array[0] = lastWord
string_to_array[string_to_array.length - 1] = firstWord
console.log(string_to_array.join(' '))


}

swap('i like apples        ')

let count = "i like          apples    "
console.log(count.trim().replace(/\s+/g,'').split(' ').length)



function kgToPounds(kilogram) {
    return kilogram * 2.2
}

console.log(kgToPounds(20))




const squareArea = x => {
return x * x
}

const squarePerimeter = x =>  {return 4 * x}


function countWords(string) {
    let arr = string.split(' ')
    return arr.length
}
/*

Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.


twoChar("java", 0) → "ja"
twoChar("java", 2) → "va"
twoChar("java", 3) → "ja"

*/



function twoChar(string,index) {
    let output = ''
    if (string[index+ 1] === undefined) {
        return output = string[0] + string[1]
    }
    else {
        output = string[index] + string[index+1]
        return output
    }
}

console.log(twoChar('java',3))



/*

Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".


lastTwo("coding") → "codign"
lastTwo("cat") → "cta"
lastTwo("ab") → "ba"




*/
function lastTwo(string) {
    let first = string.at(-2)
    let last = string.at(-1)
    console.log(string.slice(-4,-2) + last + first)
}

lastTwo('heyyyyyyy')



/*
Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.


minCat("Hello", "Hi") → "loHi"
minCat("Hello", "java") → "ellojava"
minCat("java", "Hello") → "javaello"



*/

function minCat(string1,string2) {
    if (string1.length === string2.length) {
        return string1 + string2
    }
    else if (string1.length > string2.length) {
        let startingPoint = string2.length
        return string1.slice(-startingPoint) + string2

    }
    else {
        let startingPoint = string2.length
        return string2.slice(-startingPoint) + string1
    }
}

console.log(minCat("Hello", "Hi"))



function withoutX2(string) {
    if (string.startsWith('a') ) {
        console.log(string[0] + string.slice())
    }
}
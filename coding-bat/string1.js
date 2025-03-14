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


/*

/*


Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.


makeOutWord("<<>>", "Yay") → "<<Yay>>"
makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
makeOutWord("[[]]", "word") → "[[word]]"

*/

function makeOutWord(str1, word) {
    return str1.slice(0,2) + word + str1.slice(2)
}

console.log(makeOutWord("[[]]", "word"))




/*


Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.


extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"

*/

const extraEnd = str => str.slice(-2).repeat(3)


console.log(extraEnd('Hello'))

/*


Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.


firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"

*/

const firstTwo = str => {
    if (str.length < 2) return str
    return str.slice(0,2)
}

console.log(firstTwo('abebe'))


/*


Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".


firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"

*/

const firstHalf = string => {
    let half = string.length / 2
    console.log(half)
    return string.slice(0,half)
}

console.log(firstHalf('HelloThere'))

/*


Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.


withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"

*/

const withoutEnd = str => str.slice(1,str.length-1)

console.log(withoutEnd('java'))

/*


Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).


comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"

*/

const comboString = (string1, string2 )=> {
    if (string1.length > string2.length) return string2+string1+string2
    return string1+string2+string1
}

console.log(comboString("hello","hi"))

/*
 

Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.


nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"

*/

const nonStart = (str1, str2) => str1.slice(1) + str2.slice(1)

console.log(nonStart("shotl", "java"))

/*


Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.


left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"

*/

const left2 = str => str.slice(2) + str.slice(0,2)

console.log(left2('hi'))

/*


Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

*/

const start2 = str => str.slice(-2) + str.slice(0,str.length-2)

console.log(start2('hello'))


/*

Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.


theEnd("Hello", true) → "H"
theEnd("Hello", false) → "o"
theEnd("oh", true) → "o"

*/

const theEnd = (str, boolean) => {
    if (boolean) return str[0]
    return str.at(-1)
}

console.log(theEnd('Hello',true))

/*


Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.


withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""

*/

const withouEnd2 = str => {
    return str.length < 3 ? '' : str.slice(1,str.length - 1)
}

console.log(withouEnd2('abc'))
console.log(withouEnd2(''))

/*


Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.


middleTwo("string") → "ri"
middleTwo("code") → "od"
middleTwo("Practice") → "ct"

*/

const middleTwo = str => {
    return str[(str.length / 2) - 1] + str[str.length / 2]

}

console.log(middleTwo('string'))
console.log(middleTwo('code'))

/*

Given a string, return true if it ends in "ly".


endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false

*/

const endsLy = str => str.endsWith('ly')

console.log(endsLy('leeely'))


/*


Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.


nTwice("Hello", 2) → "Helo"
nTwice("Chocolate", 3) → "Choate"
nTwice("Chocolate", 1) → "Ce"


*/

const nTwice = (str, num) => str.slice(0, num) + str.slice(str.length - num)

console.log(nTwice("Chocolate", 3))


/*


Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.


twoChar("java", 0) → "ja"
twoChar("java", 2) → "va"
twoChar("java", 3) → "ja"

*/

const twoChar = (str, num) => {
    if ((str.length < num) || num > str.slice(num, num + 2).length) return str.slice(0,2)
    return str.slice(num, num + 2)
}

console.log(twoChar('Hello',4 ))


/*


Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.


middleThree("Candy") → "and"
middleThree("and") → "and"
middleThree("solving") → "lvi"

*/

const middleThree = str => {
    let index = Math.floor(str.length / 2)
    return str.slice(index - 1, index + 2 )
}

console.log(middleThree('solving'))

/*


Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.


hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false

*/

const hasBad = str => {
    if (str.startsWith('bad')) return true
    if (str.slice(1, 4).startsWith('bad')) return true
    return false

}
console.log(hasBad('badxx'))
console.log(hasBad('xxbadxx'))

/*

Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.


atFirst("hello") → "he"
atFirst("hi") → "hi"
atFirst("h") → "h@"

*/

const atFirst = str => {
    if (str.length === 0) return '@@'
    if (str.length < 2) return str.slice() + '@'
    return str.slice(0, 2)
}

console.log(atFirst(''))

/*


Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.


lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"


*/

const lastChars = (str1, str2) => {
    if (str1.length < 1 && str2.length < 1) return '@@'
    if (str1.length < 1) return '@' + str2.at(-1)
    if (str2.length < 1) return str1[0] + '@'
    return str1[0] + str2.at(-1)
}

console.log(lastChars("hi", ""))

/*


Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".


conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"

*/

const conCat = (str1, str2) => {
    let combined = str1 + str2
    for (let i = 0; i < combined.length; i++) {
        if (combined[i] === combined[i + 1]) combined = combined.replace(combined[i],'')
    }
return combined
}

console.log(conCat("abc", ""))

/*

Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".


lastTwo("coding") → "codign"
lastTwo("cat") → "cta"
lastTwo("ab") → "ba"

*/

const lastTwo = str => str.slice(0,str.length - 2) + str.at(-1) + str.at(-2)

console.log(lastTwo('coding'))

/*

Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.


seeColor("redxx") → "red"
seeColor("xxred") → ""
seeColor("blueTimes") → "blue"

*/

const seeColor = str => {
    str.startsWith('red')
}
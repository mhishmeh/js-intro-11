/*
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.


monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false

*/

function monkeyTrouble(aSmile,bSmile) {
    return (aSmile && bSmile || aSmile == false && bSmile == false)
}

console.log(monkeyTrouble(false,false))



/*


We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.


parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false

*/



function parrotTrouble(boolean, number) {
    if (boolean) {
        if (number < 7 || number > 20) {
            return true
        }
        return false

    } 
    return false
    
}
console.log(parrotTrouble(true, 7))



/*


Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.


makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true


*/

function makes10(num1,num2) {
    if (num1 === 10 || num2 === 10) return true
    
    else if (num1 + num2 === 10) return true
    else return false
}

console.log(makes10(9, 9))


/*

Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.


nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false

*/


function nearHundred(number) {
    return (Math.abs(number - 100) <= 10 ||Math.abs(number - 200) <= 10 )
}

console.log(nearHundred(199))

/*

Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.


posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true

*/

function posNeg(num1, num2, boolean) {
    if (boolean === true) {
        if (num1 < 0 && num2 < 0) {
            return true
        }
        return false
    } else {
        if ((num1 >  0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
            return true
        } 
        return false
    }

}

console.log(posNeg(1, -1, false))


/*


Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.


notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"

*/

function notString(string) {
    if (string.startsWith('not')) return string
    return 'not ' + string
}

console.log(notString('not candy'))

/*

Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).


missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"

*/

function missingChar(string,index) {
    return string.slice(0,index) + string.slice(index+1)
}

console.log(missingChar("kitten", 0))


/*

Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.


delDel("adelbc") → "abc"
delDel("adelHello") → "aHello"
delDel("adedbc") → "adedbc"


*/

function delDel(string){
    if (string.slice(1,4) === 'del') {
        return string[0] + string.slice(4)
    }
    return string
}
console.log(delDel('adelbc'))


/*
 
Given a string, return a new string where the first and last chars have been exchanged.


frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"
*/

function frontBack(string) {
    return string.at(-1) + string.slice(1,string.length - 1) + string[0]
}

console.log(frontBack('code'))



/*


Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.


front3("Java") → "JavJavJav"
front3("Chocolate") → "ChoChoCho"
front3("abc") → "abcabcabc"

*/

function front3(string) {
    if (string.length < 3) {
        return string+string+string
    }
    let third = string.slice(0,3)
    return third+third+third
}
console.log(front3('Java'))



/*


Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.


backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"

*/

const backAround = string => string[string.length - 1] + string + string[string.length - 1]

console.log(backAround('hello'))



/*


Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see Introduction to Mod


or35(3) → true
or35(10) → true
or35(8) → false


*/

function or35(int) {
    return int % 3 === 0 || int % 5 === 0
}


console.log(or35(19))



/*

Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.


front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"



*/


function front22(string) {
    return string.slice(0,2) + string + string.slice(0,2)
}

console.log(front22("abc"))


/*


Given a string, return true if the string starts with "hi" and false otherwise.


startHi("hi there") → true
startHi("hi") → true
startHi("hello hi") → false
*/

const startHi = string => string.startsWith('hi')

console.log(startHi('hi there'))

/*  

Given two temperatures, return true if one is less than 0 and the other is greater than 100.


icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false


*/

function icyHot(int1,int2) {
    return
}

/*

Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.


noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false

*/

function noTriples(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (count === 3) return true
        if (arr[i+1] === value && arr[i+2] === value) return false
        else return true

        
    }
}

console.log(noTriples([1, 1, 2, 2, 1]))


/*

Given two temperatures, return true if one is less than 0 and the other is greater than 100.


icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
*/



function icyHot(num1,num2) {
    return ((num1 > 100 && num2 < 0) || (num2 > 100 && num1 < 0))
}

console.log(icyHot(-1, 120))


/*

Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.


mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("piz snacks") → false

*/

function mixStart(string) {
    return /^.ix/.test(string)

}

console.log(mixStart('pix snacks'))  // could also manually check index 1 and 2 for 'ix' because it is harded coded as finding the first three



/*

Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".


startOz("ozymandias") → "oz"
startOz("bzoo") → "z"
startOz("oxx") → "o"

*/

function startOz(string) {
    let output = ''
    if (string[0] === 'o') output += string[0]
    if (string[1] === 'z') output += string[1]
    return output
}

console.log(startOz("ozymandias"))
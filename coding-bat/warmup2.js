/*
Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.


stringMatch("xxcaazz", "xxcaazz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0

*/




function stringMatch(string1,string2) {
    let count = 0;
    for (let i =0; i< string1.length - 1; i++) {
        if (string1[i] === string2[i] && string1[i+1] === string2[i+1]) {
            count += 1
        } 

    }; return count
};



console.log(stringMatch("xxcaazz", "axc"))


/*
Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.


stringYak("yakpak") → "pak"
stringYak("pakyak") → "pak"
stringYak("yak123ya") → "123ya"

*/

function stringYak(string) {
    return string.replace(/y.k/,'')
}

console.log(stringYak('paky4k'))



/*


Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.


has271([1, 2, 7, 1]) → true
has271([1, 2, 8, 1]) → false
has271([2, 7, 1]) → true


*/

console.log(has271([2, 7, 1]))
function has271(arr) {
    for (let i =0; i < arr.length; i++) {
        let starting = arr[i]
        if (arr[i+1] === arr[i] + 5 && arr[i+2] === arr[i] - 1 || arr[i+2] === arr[i] + 1 || arr[i+2] === arr[i] + 2 || arr[i+2] === arr[i] - 2){
            return true
        }
    } return false
}


console.log(has271([2, 7, 1]))

let x = 10
x =  null ?? 0

console.log(x)

/*

Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".


altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"

*/

function altPairs(string) {
    let count = 0
    let output = ''

    for (let i = 0; i < string.length; i++) {
        count += 1
        output += string[i]
        console.log(i)
        if (count == 2) {
            i += 2
            count = 0
        }
        
    }
    console.log(output)
}
altPairs("CodingHorror") 
/*
Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;


frontTimes("Chocolate", 2) → "ChoCho"
frontTimes("Chocolate", 3) → "ChoChoCho"
frontTimes("Abc", 3) → "AbcAbcAbc"
*/

const frontTimes = (string,int) => {
    let output = ''
    for (let i = 0; i < int; i++) {
        output += string.slice(0,3)

    }
    return output
}
console.log(frontTimes("Chocolate", 2))

const frontTimes1 = (string,int) => string.slice(0,3).repeat(int) //


/*

Given a string and a non-negative int n, return a larger string that is n copies of the original string.


stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"

*/


function stringTimes(string, int) {
output = ''
for (let i = 0; i < int; i++) {
    output += string
}
return output
}

console.log(stringTimes("Hi", 2))



/*


Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".


countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3

*/

function countXXX(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'x') {
            console.log(string[i])
            count += 1

        }
        
    }return count -1
}
console.log(countXXX('xxxx'))




/*

Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.


stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"

*/

function stringX(string) {
    let beginning =  string[0] === 'x' ? 'x': ''
   
     let end =  string.at(-1) === 'x' ? 'x': ''
    
    let output = string.replaceAll('x','')
    return beginning + output + end

}

console.log(stringX('xabxxxcdx'))



/*


Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".


doubleX("axxbb") → true
doubleX("axaxax") → false
doubleX("xxxxx") → true


*/

function doubleX(string) {
    let index = string.indexOf('x')
    return string[index + 1] === 'x'
}

console.log(doubleX("axaxax"))


/*


Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".


stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"

*/


const stringBits = string => {
    let output = ''
    for (let i = 0; i < string.length; i += 2) {
        output += string[i]

    }
    return output
}
console.log(stringBits('Heeololeo'))


/*


Given a non-empty string like "Code" return a string like "CCoCodCode".


stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"

*/

function stringSplosion(string) {
    output = ''
    for (i = 0; i < string.length; i++) {
        output += string.slice(0, i + 1)
    }
    return output
}
console.log(stringSplosion('Code'))


/*

Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).


last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2

*/


function last2(string) {
    let count = 0
    let lastTwo = string.slice(-2)
    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === lastTwo[0]) {
            if (string[i + 1] === lastTwo[1]) count++
        }
        else {
            continue
        }
    }
    return count - 1


}
console.log(last2('xaxxaxaxx'))


/*


Given an array of ints, return the number of 9's in the array.


arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3

*/
function arrayCount9(arr) {
    let count = 0
    for (let number of arr) {
        if (number === 9) count ++
    }
    return count
}

console.log(arrayCount9([1, 2, 9]))

/*

Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.


arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false

*/

function arrayFront9(arr) {
    let firstFour = arr.slice(0,4) 
    if (firstFour.includes(9)) return true
    return false
}

console.log(arrayFront9([1, 9]))


/*


Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.


array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true

*/

function array123(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 && arr[i + 1] === 2 && arr[i + 2] === 3) return true

    }
    return false
}
console.log(array123([1, 1, 2, 3, 1]))



/*


Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.


array667([6, 6, 2]) → 1
array667([6, 6, 2, 6]) → 1
array667([6, 7, 2, 6]) → 1

*/

function array667(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 6 && (arr[i + 1] === 6 || arr[i +1] === 7)) count ++
    }
    return count
}

console.log(array667([6, 7, 2, 6,6]))

/*


Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.


noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false

*/

const noTriples = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1] && arr[i] === arr[i+2]) return false
    }
    return true
}

console.log(noTriples([1, 1, 2, 2, 1]))
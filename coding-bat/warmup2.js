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
console.log(`\n--------------------Task One-----------------------\n`);
function countVC(str){
    /* Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants. */

    const obj = {'vowels': 0, 'constants': 0}

    for (let i of str) {
        if (/[aeiou]/i.test(i)) obj['vowels']++
        else if (/[a-zA-Z]/.test(i) && /[^aeiou]/.test(i))obj['constants']++
    }
    return obj

}
console.log(countVC("Hello")) // {vowels: 2, consonants: 3}
console.log(countVC("Programming")) //{vowels: 3, consonants: 8}
console.log(countVC("123AbC")) //{vowels: 1, consonants: 2}
console.log(countVC("123!@#xyz")) //{vowels: 0, consonants: 3}
console.log(countVC("")) //     -> {vowels: 0, consonants: 0}
console.log(`\n--------------------Task Two-----------------------\n`);
function countChars(str){
    /*
    Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
*/
str = str.replaceAll(/\s+/g,'')
const obj = {'letters': 0, 'numbers': 0, 'special': 0}
for (let i of str) {
    if (/\d/.test(i)) obj['numbers']++
    else if (/[a-zA-Z]/.test(i)) obj['letters']++
    else obj['special']++
}
for (const key in obj) {
    if (obj[key] === 0) delete obj[key]
}
return obj


}
console.log(countChars("Hello")) 
console.log(countChars("Programming 123")) 
console.log(countChars("123AbC"))
console.log(countChars("123!@#xyz")) 
console.log(countChars("")) 
console.log(`\n--------------------Task Three-----------------------\n`);
function maxOccurrences(str){

str = str.replaceAll(/\s+/g,'')
if (!str) return ''

const obj = {}
for (let i of str) {
    if (obj[i]) obj[i]++
    else obj[i] = 1
}

let max = -Infinity
let maxLetter
for (const key in obj) {
    if (obj[key] > max) max = obj[key], maxLetter = key
}
return maxLetter
}
console.log(maxOccurrences("Hello")) //     -> "l"
console.log(maxOccurrences("Occurrences")) //   -> "c"
console.log(maxOccurrences("    ab    ")) //    -> "al"
console.log(maxOccurrences("12   3   21")) //   -> "1"
console.log(maxOccurrences("    ")) //  -> ""
console.log(maxOccurrences("")) //  -> ""
console.log(`\n--------------------Task Four-----------------------\n`);
function starOut(str){
    /*
    Write a function named starOut() which takes a string argument and returns it back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
*/

str = str.trim()

const arr = str.split('')
let output = ''

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*' || arr[i - 1] === '*' || arr[i + 1] === '*') continue
    output += arr[i]
}

    return output

}
console.log(starOut("ab**cd")) //    -> "ad"
console.log(starOut("ab**cd")) //   -> "ad"
console.log(starOut("xm*sm*sy")) //     -> "xy"
console.log(starOut("abc")) //​ -> "abc"
console.log(starOut("***")) //  -> ""
console.log(starOut("   ")) //-> "   "
console.log(starOut(""))//  -> ""
console.log(`\n--------------------Task Five-----------------------\n`);
function romanTolnt(str){


const obj = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
let sum = 0
for (let i = 0; i < str.length; i++) {
    if (obj[str[i + 1]] > obj[str[i]]) {
        sum += (obj[str[i + 1]] - obj[str[i]])
        i++

    }

    else sum += obj[str[i]]
}
return sum
}
console.log(romanTolnt("I")) // 1
console.log(romanTolnt("IV")) // 4
console.log(romanTolnt("CXII")) //112
console.log(romanTolnt("MMM")) //3000
console.log(romanTolnt("MMMDCCCLXXXVIII")) //-> 3888
console.log(romanTolnt("MDCLXVI")) //1666
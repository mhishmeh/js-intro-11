"use strict";
console.log('------------------------ TASK ONE ------------------------');
/*
Write a function named toCamelCase() which takes a string as its argument 
and returns a new string in camelCase. Assume the string only contains letters 
and spaces

*/

const toCamelCase = (str) => {
    const arr = str.trim().replace(/\s+/g, ' ').split(' ');
    let output = '';
    output += arr[0].toLowerCase();  
   
    if (arr.length < 2) return str
    for (let i = 1; i < arr.length; i++) { 
        let firstLetter = arr[i][0].toUpperCase(); 
    
        output += firstLetter + arr[i].toLowerCase().slice(1);
    }
    return output;
};
console.log(toCamelCase('first name')) // -> firstName
console.log(toCamelCase("last     name"))//     ->"lastName"
console.log(toCamelCase("   ZIP CODE"))//   ->"zipCode"
console.log(toCamelCase('I Learn Java Script'))//   -> "iLearnJavaScript"
console.log(toCamelCase('helloWorld'))//    -> “helloWorld
console.log('------------------------ TASK Two ------------------------');
/*
Write a function named toSnakeCase() which takes a string as its argument
and returns a new string in snake_case. Assume the string only contains letters
and spaces
NOTE: In snake case words are separated by underscores (_) and are all
lowercase.
*/
const toSnakeCase = (str) => str.trim().replace(/\s+/g,' ').split(' ').join('_')
   
console.log(toSnakeCase("first name")); //    ->"first_name"
console.log(toSnakeCase("last   name")); //   ->"last_name"
console.log(toSnakeCase("    I love Java Script")); //    ->"i_love_java_script"
console.log(toSnakeCase("already_snake_case")); //-> "already_snake_case"
console.log(toSnakeCase("hello")); // -> "hello"
console.log('------------------------ TASK Three ------------------------');
const alternatingCases = (str) => {
    let output = '';
    let tracker = 0;
    for (let i = 0; i < str.length; i++) {
        if (!(/[a-zA-Z]/.test(str[i])))
            output += str[i];
        else if (tracker % 2 === 0) {
            output += str[i].toUpperCase();
            tracker++;
        }
        else {
            output += str[i].toLowerCase();
            tracker++;
        }
    }
    return output;
};
console.log(alternatingCases("Hello")); //    -> "HeLlO"
console.log(alternatingCases("basketball")); //   -> "BaSkEtBaLl"
console.log(alternatingCases("Tech Global")); //  -> "TeCh GlObAl"
console.log(alternatingCases("")); //         -> ""
console.log(alternatingCases("123!@#aB")); //     -> "123!@#Ab

console.log('------------------------ TASK FOUR ------------------------');
/*
Write a function named isNeutral() that takes two strings comprised of + and
-, and return a new string which shows how the two strings interact in the
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are
shown as the number 0.
Note: The two strings will be the same length.
*/
function isNeutral(str1, str2) {
    let output = '';
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === '+' && str2[i] === '+')
            output += '+';
        else if ((str1[i] === '+' && str2[i] === '-') || (str1[i] === '-' && str2[i] === '+'))
            output += '0';
        else
            output += '-';
    }
    return output;
}
console.log(isNeutral("-", "+")); //        -> "0"
console.log(isNeutral("-+", "-+")); //        -> "-+"
console.log(isNeutral("-++-", "-+-+")); //    -> "-+00"
console.log(isNeutral("--++--", "++--++")); //-> "000000"
console.log(isNeutral("+++", "+++")); //     ->"+++"
/*
Write a function named isTrueOrFalse() which takes a string with sets of character/words
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should
be treated the same), you need to determine whether it falls into the positive/first half of the
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.

*/

console.log('------------------------ TASK Five ------------------------');
const isTrueOrFalse = (str) => {
    let postiveCount = 0;
    let negativeCount = 0;
    const arr = str.toLowerCase().split(' ');
    for (let i of arr) {
        if (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 109)
            postiveCount++;
        else if (i.charCodeAt(0) > 109 && i.charCodeAt(0) <= 122)
            negativeCount++;
    }
    return postiveCount >= negativeCount;
};
console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")); //    -> true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")); //         -> false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")); //    -> true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")); //     -> true
console.log(isTrueOrFalse("Got stuck in the Traffic")); //         -> false

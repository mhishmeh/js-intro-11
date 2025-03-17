/*
Starts With Vowel

Write a function named as startsVowel() which takes a string word as an argument and returns true if given string starts with a vowel letter, and false otherwise when invoked.
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i.
Examples: startsVowel("Tech") startsVowel("Apple") startsVowel("abc")
-> false -> true -> true

*/

function startsVowel(string) {
    return 'aeiouAEIOU'.includes(string[0])

    
}

console.log(startsVowel(''))


console.log(startsVowel('hi'))



/*
Write a function named as middle() which takes a string word as an argument and returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples: middle("Tech") middle("Global") middle("abcde") middle("1") middle("abc") middle(“1234”)
-> "ec" -> "ob" -> "c" -> "1" -> "b" -> "23"


*/

function middle(string) {
    if (string.length % 2 === 0) {
        let middle1  = (string.length/2) - 1
        let middle2 = string.length/2
        console.log(string[middle1],string[middle2])

    } else {
        console.log(string[(string.length -1) /2])
    }
}



middle('abcde')


function notString(string) {
    if (string.startsWith('not')){
        return string
    } else {
        return 'not' + string
    }
      
}

function front3(string) {
    let front = string.slice(0,3)
    return front + front + front
}



console.log(front3('heyeeye'))

/*

Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.


everyNth("Miracle", 2) → "Mrce"
everyNth("abcdefg", 2) → "aceg"
everyNth("abcdefg", 3) → "adg"



*/

function everyNth(string,n) {
    let output = ''
    for (let i = 0; i < string.length; i+=n) {
        output += string[i]
    }
    
    console.log(output)

}

everyNth('Miracle',2)



/*

Last Two Characters
-> "h" -> "ll" -> " " -> "3"
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns the last two characters of the given word when invoked.
NOTE: If the given word does not have 2 or more characters, then return the string back.
Examples: lastTwoCharacters("Tech") lastTwoCharacters("Global") lastTwoCharacters("") lastTwoCharacters(" ") lastTwoCharacters("1")
-> "ch" -> "al" -> "" -> " " -> "1"

*/


function lastTwoCharacters(string) {
    if (string.length < 2) {
        return string
    }
    return string.slice(-2)
}

console.log(lastTwoCharacters('tech'))


/*

Write a function named as middle() which takes a string word as an argument and returns the middle character if the string has odd length, and returns the middle two characters if the string has even length when invoked.
NOTE: If the given word is empty, then return the empty string back.


*/


function middle(string) {
    if (string.length === 0) {
        return string
    }
    if (string.length % 2 !== 0) { // odd length
        let middle = Math.floor((string.length / 2))
        console.log(string[middle])

    }
    else {
        let middle = string.length / 2
        console.log(string[middle - 1], string[middle])
    }
}

middle('abcde')



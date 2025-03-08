/*

Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument and
returns the given word back tripled if invoked.
Examples:
doubleOrTripleWord("Tech") doubleOrTripleWord("Apple") doubleOrTripleWord("") doubleOrTripleWord(" ") doubleOrTripleWord("1") doubleOrTripleWord("22")
First and Last Word
the string length is even or doubled if the string length is odd when
-> "TechTechTech" -> "AppleApple”
-> ""
->""
-> "11"
-> "222222"

*/

function doubleOrTripleWord(str) {
    if (str.length % 2 === 0) return str + str
    return str + str + str
}

console.log(doubleOrTripleWord("Apple"))
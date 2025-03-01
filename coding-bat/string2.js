/*


Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.


mixString("abc", "xyz") → "axbycz"
mixString("Hi", "There") → "HTihere"
mixString("xxxx", "There") → "xTxhxexre"
 */


// WAS HARD DO AGAIN
function mixString(string1,string2) {
    let conditional = Math.min(string1.length, string2.length)
    let output = ''
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < conditional; i++) {
        console.log(output)
        if ((count1 < string1.length) && (count2 < string2.length)) { // x y
        output += string1[i]
        output += string2[i]
        count1 += 1
        count2 += 1

        }
        if(count1 === string1.length) {
            console.log(string2.slice(i))
            return output += string2.slice(i) //
        }
        if (count2 === string2.length){
           return output += string1.slice(i)
        }



    }
    return output
}
console.log(mixString("xxxx", "There"))



/*


We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.


xyBalance("aaxbby") → true
xyBalance("aaxbb") → false
xyBalance("yaaxbb") → false


*/


function xyBalance(string) {
    let index = string.lastIndexOf('x')
    for (let i = index; i < string.length; i++) {
        if (string[i] === 'y') return true
    

    }
    return false
}
console.log(xyBalance('aaxbby'))



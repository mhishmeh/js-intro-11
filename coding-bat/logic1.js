/*


Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides evenly into another? (See also: FizzBuzz Code and Introduction to Mod)


fizzString2(1) → "1!"
fizzString2(2) → "2!"
fizzString2(3) → "Fizz!"


*/


function fizzString2(int) {
    if (int % 3 === 0 && int % 5 === 0) return 'FizzBuzz!'
    else if (int % 3 === 0) return 'Fizz!'
    else if (int % 5 === 0) return 'Buzz!'
    return `${int}!`
}


console.log(fizzString2(3))
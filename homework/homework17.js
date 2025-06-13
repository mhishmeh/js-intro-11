console.log('=-=-=-=-=-=-=-=-= TASK 1 =-=-=-=-=-=-=-=-=')
/* Write a function named findMedian() which takes two arrays of numbers as
its arguments and return the median of the two sorted arrays.
NOTE: The median is the middle number of a sorted array. So the median of
[1,3], [2] would be 2. If the array has an even length, you are to find the average
of the 2 middle numbers */


const findMedian = (arr1, arr2) => {
    const combined = [...arr1, ...arr2].sort()

    if (combined.length % 2 !== 0) return combined[Math.floor(combined.length / 2)]

    const middle1 = combined.length / 2
    const middle2 = (combined.length / 2) - 1

    return ((combined[middle1] + combined[middle2]) / 2)
}

console.log(findMedian([1, 3], [2])) //  -> 2
console.log(findMedian([1, 2], [3, 4])) //  -> 2.5
console.log(findMedian([4], [3])) //  -> 3.5
console.log(findMedian([4], [])) //   -> 4
console.log('=-=-=-=-=-=-=-=-= TASK 2 =-=-=-=-=-=-=-=-=')
/*Write a function named calculateFactorial() which takes a number as an
argument and returns the factorial of that number.
Note: Factorial is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer and an exclamation point.
Thus, factorial seven is written 7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7. Factorial
zero is defined as equal to 1. */


const calculateFactorial = num => {
    let factorial = 1
    for (let i = num; i > 1; i--) {
        factorial *= i
    }
    return factorial
}
console.log(calculateFactorial(0)) //  -> 1
console.log(calculateFactorial(1)) //  -> 1
console.log(calculateFactorial(5)) //  -> 120
console.log(calculateFactorial(6)) //  -> 720
console.log(calculateFactorial(10)) //  -> 3628800
console.log(calculateFactorial(4)) //  -> 24
console.log('=-=-=-=-=-=-=-=-= TASK 3 =-=-=-=-=-=-=-=-=')
/* Write a function named calculateGCD() which takes two numbers as
arguments and returns the greatest common divisor of the two numbers.
NOTE: GCD is a mathematical concept used to describe the largest number that
divides two or more integers without leaving a remainder. In other words, it is
the largest number that is a common factor of two or more numbers. */


const calculateGCD = (num1, num2) => {
    let gcd;
    for (let i = 1; i < Math.max(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) gcd = i
    }
    return gcd
}



console.log(calculateGCD(8, 12)) //  -> 4
console.log(calculateGCD(17, 5)) //  -> 1
console.log(calculateGCD(48, 18)) //  -> 6
console.log(calculateGCD(0, 5)) //-> 5
console.log(calculateGCD(21, 14))  // -> 7
console.log(calculateGCD(60, 48)) //  -> 12
console.log('=-=-=-=-=-=-=-=-= TASK 4 =-=-=-=-=-=-=-=-=')
/*Write a function named calculateLCM() which takes two numbers as
arguments and returns the least common multiple of the two numbers.
NOTE: LCM is a mathematical concept used to describe the largest number that
divides two or more integers without leaving a remainder. In other words, it is
the largest number that is a common factor of two or more numbers. */




const calculateLCM = (num1, num2) => {
    if (num1 === 0 || num2 === 0) return 0;

    let lcm = Math.max(num1, num2);

    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            return lcm;
        }
        lcm++;
    }
};
console.log(calculateLCM(8, 12)) //  -> 24
console.log(calculateLCM(17, 5)) //  -> 85
console.log(calculateLCM(48, 18)) //  -> 144
console.log(calculateLCM(0, 5)) //  -> 0
console.log(calculateLCM(21, 14)) //  -> 42
console.log(calculateLCM(60, 48)) //   -> 240
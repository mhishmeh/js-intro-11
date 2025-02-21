console.log(`\n--------------- Task One ---------------\n`);

let str1 = "5", str2 = "2";

let num1 = Number.parseInt(str1)
let num2 = Number.parseInt(str2)

console.log(`The sum of ${num1} and ${num2} is = ${num1 + num2}
The product of ${num1} and ${num2} is = ${num1 * num2}
The division of ${num1} and ${num2} is = ${num1 / num2}
The subtraction of  ${num1} and ${num2} is = ${num1 - num2}
The remainder of ${num1} and ${num2} is = ${num1 % num2}
The exponentiation of ${num1} and ${num2} is = ${num1 ** num2}
`)

console.log(`\n--------------- Task Two ---------------\n`);

let s1 = "200", s2 = "-50";

let numOne = Number.parseInt(s1), numTwo = Number.parseFloat(s2)

let max = Math.max(numOne,numTwo)
let min = Math.min(numOne,numTwo)
let avg = (numOne + numTwo) / 2
let difference = Math.abs(numOne - numTwo)

console.log(`The greatest value is = ${max}
The smallest value is = ${min}
The average is = ${avg}
The absolute difference is = ${difference}`)



console.log(`\n--------------- Task Three ---------------\n`);
let maxN = 50
let minN = 1

let randomNumber1 = Math.floor(Math.random() * (maxN - minN + 1) + minN);
let randomNumber2 = Math.floor(Math.random() * (maxN - minN + 1) + minN);

let absoluteDiff = Math.abs(randomNumber1 - randomNumber2)

console.log(`The absolute difference between numbers is = ${absoluteDiff};
`)

console.log(`\n--------------- Task Four ---------------\n`);

let randomN1 =  Math.floor(Math.random() * (maxN - minN + 1) + minN);
let randomN2 =  Math.floor(Math.random() * (maxN - minN + 1) + minN);
let randomN3 =  Math.floor(Math.random() * (maxN - minN + 1) + minN)
let randomN4 =  Math.floor(Math.random() * (maxN - minN + 1) + minN)
let randomN5 =  Math.floor(Math.random() * (maxN - minN + 1) + minN)

let theMax = Math.max(randomN1,randomN2,randomN3,randomN4,randomN5)
let theMin = Math.min(randomN1,randomN2,randomN3,randomN4,randomN5)

console.log(`the max value = ${theMax}
the min value = ${theMin}`)


console.log(`\n--------------- Task Five ---------------\n`);

let min50 = 50
let max100 = 100

let randomNumberOne = Math.floor(Math.random() * (max100 - min50 + 1) + min50)
let randomNumberTwo = Math.floor(Math.random() * (max100 - min50 + 1) + min50)
let randomNumberThree = Math.floor(Math.random() * (max100 - min50 + 1) + min50)

console.log(`The number 1 = ${randomNumberOne}
The number 2 = ${randomNumberTwo}
The number 3 = ${randomNumberThree}
The sum of the numbers is ${randomNumberOne+ randomNumberTwo + randomNumberThree}`)


console.log(`\n--------------- Task Six ---------------\n`);

/*

Write a program that generates 3 random numbers between 1 and 100 (1 and 100 are included) and find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.

*/

let max1_00 = 100
let min_1 = 1

let randDumb1 = Math.floor(Math.random() * (max1_00 - min_1 + 1) + min_1)
let randDumb2 = Math.floor(Math.random() * (max1_00 - min_1 + 1) + min_1)
let randDumb3  = Math.floor(Math.random() * (max1_00 - min_1 + 1) + min_1)

console.log(randDumb1 > 25 && randDumb2 > 25 && randDumb3 > 25)


console.log(`\n--------------- Task Seven ---------------\n`);
let name = "David"; 

console.log(`The length of the name is = ${name.length}
The first character in the name is = ${name[0]}
The last character in the name is = ${name.at(-1)}
The first 3 characters in the name are = ${name.slice(0,3)}
The last 3 characters in the name are = ${name.slice(-3)}
    `)
console.log(`\n--------------- Task One ---------------\n`);
/*
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).


*/

for (let i = 0; i <= 100; i++) {
    if (i % 7 === 0) console.log(i)
}

console.log(`\n--------------- Task Two ---------------\n`);


/*

Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
*/

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i)
}



console.log(`\n--------------- Task Three ---------------\n`);

/*
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive)

*/

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i)
}


console.log(`\n--------------- Task Four ---------------\n`);

/*

Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1

*/

for (let i = 0; i <=7; i++) {
    console.log(i ** 2)
}



console.log(`\n--------------- Task Five ---------------\n`);

/*
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).

*/
let output = 0
for (let i = 1; i <= 10; i++) {
    output += i
}
console.log(output)



console.log(`\n--------------- Task Six ---------------\n`);

/*
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number
*/
let randomNUM = Math.floor(Math.random() * (10) + 1)
let factorial = 1
for (let i = randomNUM; i >= 1; i--)  {
    factorial *= i
}
console.log(randomNUM, factorial)


console.log(`\n--------------- Task Seven ---------------\n`);
/*
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.

*/


let randomNumber1 = Math.floor(Math.random() * (100) + 1)
let attempts = 1
while (randomNumber1 % 5 !== 0) {
    attempts += 1
    randomNumber1 = Math.floor(Math.random() * (100) + 1)

}

console.log(`The random number is ${randomNumber1} and it took ${attempts} attempt/s to generate it.`)

console.log(`\n--------------- Task Eight ---------------\n`);


let countries = ['Germany', 'Argentina', 'Ukraine', 'Romania']
console.log(countries)

countries.sort()

console.log(countries)


console.log(`\n--------------- Task Nine ---------------\n`);

/*
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

*/

let animals = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'] 
console.log(animals)
console.log(animals.includes('Pluto'))

console.log(`\n--------------- Task Ten ---------------\n`);

let names = ['Garfield', 'Tom', 'Sylvester', 'Azrael']
names.sort()
console.log(names)

console.log(names.includes('Garfield') && names.includes('Felix'))




console.log(`\n--------------- Task Eleven ---------------\n`);

let nums = [10.5, 20.75, 70, 80, 15.75]
console.log(nums)
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}



console.log(`\n--------------- Task Twelve ---------------\n`);

/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

*/

let supplies = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler']

console.log(supplies)

let bpCount = 0
let ele = 0

for (let i = 0; i < supplies.length; i++) {
    if (supplies[i][0].toLowerCase() === 'b' || supplies[i][0].toLowerCase() === 'p') bpCount +=1

}
console.log(bpCount)


for (let i = 0; i < supplies.length; i++) {
    if (supplies[i].toLowerCase().includes('book') || supplies[i].toLowerCase().includes('pen')) ele += 1
}
console.log(ele)


console.log(`\n--------------- Task Thirteen ---------------\n`);


/*

Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

*/

let numbas = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]


console.log(numbas)

let overTen = 0
let underTen = 0
let equalTen = 0

for (let i = 0; i < numbas.length; i++) {
    if (numbas[i] > 10) overTen += 1
    if (numbas[i] < 10) underTen += 1
    if (numbas[i] === 10) equalTen += 1
}

console.log(`Elements that are more than 10 = ${overTen}
Elements that are less than 10 = ${underTen}
Elements that are 10 = ${equalTen}`)


console.log(`\n--------------- Task Fourteen ---------------\n`);



let = firstArray = [ 5, 8, 13, 1, 2 ]
let secondArray = [ 9, 3, 67, 1, 0 ]
let thirdArray = []

for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] > secondArray[i]) thirdArray.push(firstArray[i])
    else {
        thirdArray.push(secondArray[i])}
    
}
console.log(` 1st array is =  [${firstArray}]
2nd array is = [${secondArray}]
3rd array is = [${thirdArray}]`)




console.log(`\n--------------- Task Fifteen ---------------\n`);

/*

Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

*/

//

function firstDuplicate(arr) {
    let duplicates = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j <arr.length; j++) {
            if (arr[i] === arr[j]) return arr[i]
        }
    } return -1
}

console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))

console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))

console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))



console.log(`\n--------------- Task Sixteen ---------------\n`);


/*
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.



*/


function getDuplicates(arr) {
    let duplicates = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) duplicates.push(arr[i])
        }
    }
    let set = new Set(duplicates)
    return [...set]
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))




console.log(`\n--------------- Task Seventeen ---------------\n`);

/*
Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word separately reversed when invoked.



*/

function reverseStringWords(str) {
     
     return str.split('').reverse().join('').trim()
     
}

console.log(reverseStringWords('hello world'))
console.log(reverseStringWords("    ").length)




console.log(`\n--------------- Task Eighteen ---------------\n`);

/*

Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

*/

function getEvens(num1, num2) {
    let arr = []
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) arr.push(i)
    }
return arr
}

console.log(getEvens(3,3))

console.log(`\n--------------- Task Nineteen ---------------\n`);


function getMultipleOf5(num1, num2) {
    let arr = []
    for (let i = num1; i <= num2; i++) {
        if (i % 5 === 0) arr.push(i)
    }
return arr
}

console.log(getMultipleOf5(3,18))



console.log(`\n--------------- Task Twenty ---------------\n`);

/*
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

*/

function fizzBuzz(num1,num2) {
    let arr = []
    for (let i = num1; i <= num2; i++) {
        if (i % 3 === 0 && i % 5 === 0) arr.push('FizzBuzz')
        else if (i % 3 === 0) arr.push('Fizz')
        else if (i % 5 === 0) arr.push('Buzz')
        else arr.push(i)
        


    }
    return arr.join(' | ')
}
console.log(fizzBuzz(3,25))
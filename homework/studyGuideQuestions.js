 
function getDifferenceBetweenRandomNumbers(min,max) {
    let randomNumber1 = (Math.floor(Math.random() * (max - min +1) + min))
    let randomNumber2 = (Math.floor(Math.random() * (max - min +1) + min))


    let greatestNum = Math.max(randomNumber1,randomNumber2)
    let smallestNum = Math.min(randomNumber1,randomNumber2)

    let difference = greatestNum - smallestNum
    console.log(`Min number = ${smallestNum}
Max number = ${greatestNum}
Difference = ${difference}`)
    
}


getDifferenceBetweenRandomNumbers(1,10)




/*
Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive). 
Calculate the greatest and the smallest numbers and print their absolute difference.

Examples:
3,5,2 ->3 
7,3,1 ->6 
5,5,5 ->0 
1,10,9 ->9 
10,1,2 ->9


PSEUDO CODE
1. Generate 3 random numbers
2. Find max and min numbers among the random numbers
3. Calculate and output max - min
*/


// check if  a number is even or odd

function findIfEvenOrOdd(number) {
    if (number % 2 == 0) {
        console.log(`${number} is even!`)
    } else {
        console.log(`${number} is odd!`)
    }
}

findIfEvenOrOdd(5)



function findIfNegativeOrPositive(max,min) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    if (randomNumber > 0 ) {
        console.log(`${randomNumber} is positiive`)
    } else {
        console.log(`${randomNumber} is postive`)
    }
}

findIfNegativeOrPositive(-5,5) 



function findRemainder10(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    let remainder = randomNumber % 10
    console.log(`The random number: ${randomNumber} % 10 = ${remainder}`)

}

findRemainder10(50,100)


function sumOf2Numbers(max, min) {
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min)
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(randomNumber1, randomNumber2)

    let sum = randomNumber1 + randomNumber2
    console.log(sum)



}

sumOf2Numbers(10,1)


function point(min,max) {
    const numbers = []
    for (let i = 0; i < 5; i++ ) {
        numbers[i] = (Math.floor(Math.random() * (max - min +1) + min))
    }
    console.log(numbers)
    let increment = 5
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * increment
        increment -= 1

    }
    console.log(numbers)
    let sum = 0
    for (let num of numbers) {
        sum += num;
      }
      console.log(sum)
}

point(1,10)

function fourRandom() {
    let number1 = Math.floor(Math.random() * (25 - 1 +1) + 1)
    let number2 = (Math.floor(Math.random() * (50 - 26 +1) + 26))
    let number3 = (Math.floor(Math.random() * (75 - 51 +1) + 51))
    let number4 = (Math.floor(Math.random() * (100 - 76 +1) + 76))


    let greatestNum = Math.max(number1,number2,number3,number4)
    let smallestNum = Math.min(number1,number2,number3,number4)

    let difference = greatestNum - smallestNum

    let difference2nd3rd = number3 - number2

    let avg = (number1+number2 +number3 +number4) / 4

    console.log(`Diffrence of max and min = ${difference}
        Difference of second and third = ${difference2nd3rd}
        Average of all = ${avg}`)


}
fourRandom()

function randNumBetween1and100(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    if (randomNumber < 51) {
        console.log(`${randomNumber} -> first half`)
    } else {
        console.log(`${randomNumber} -> second half`)
    }
}

randNumBetween1and100(1,100)


function rectanglePerimeter(x,y) {
    return 2 * (x + y)
}


function doubleTheWord(string) {
    console.log(string+string)

}

doubleTheWord('tech')


function firstCharacter(word) {
    console.log(word[0])
}

firstCharacter("hello")



function firstTwoCharacters(string) {
    if (string.length < 2) {
        console.log(string)
    } else {
        console.log(string[0],string[1])

    }
}

firstTwoCharacters('')


function lastCharacter(string) {
    console.log(string[string.length -1 ])

}

lastCharacter('oamr')

function last2Characters(string) {

    if (string.length < 2) {
        return true
    }
    console.log(string[0], string[string.length -1 ])
}

last2Characters('omarisgay')



function hasFive(string) {
    if (string.length >= 5) {
        console.log('true')
    } else {
        console.log('fuck')
    }

}
hasFive('omarisgay')



function middleSHIT(string) {
    let middle = Math.floor((string.length/2))
    if (string.length % 2 == 0) {
        console.log(string[middle-1], string[middle])
    } else {
        console.log(string[middle])
    }
}
middleSHIT('Tech')


function checkVowel(word) {
    console.log(/^[aeioyu]/i.test(word))
}

checkVowel('i')


let drinkingAge = 21;
let omarAge = 20


let isOmarAllowedToDrink = drinkingAge > omarAge ? false : true

console.log(isOmarAllowedToDrink)



let canOmarDrink;

if (drinkingAge > omarAge) {
    canOmarDrink = false
} else {
    
}

Number.parseFloat()
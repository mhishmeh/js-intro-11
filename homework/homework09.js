console.log(`\n--------------- Task One ---------------\n`);


/*
Write a function named fizzBuzz1() which takes a number argument and returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. Otherwise, it will return the number itself.​

*/

const fizzBuzz1 = num => {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    else if (num % 5 === 0) return 'Buzz'
    else if (num % 3 ===  0) return 'Fizz'
    else return num
}

console.log(fizzBuzz1(55))


console.log(`\n--------------- Task Two ---------------\n`);

/*
Write a function named fizzBuzz2() which takes a number argument and returns and array consist of numbers starting from 1 to given number. However, it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.

*/

const fizzBuzz2 = num => {
    const output = []
    for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) output.push('FizzBuzz')
    else if (i % 5 === 0)  output.push('Buzz')
    else if (i % 3 ===  0)  output.push('Fizz')
    else output.push(i)

    }
    return output
   
}

console.log(fizzBuzz2(5))


console.log(`\n--------------- Task Three ---------------\n`);

/*

Write a function named findSumNumbers() which takes a string argument and returns sum of the all numbers appears in the string.

*/

const findSumNumbers = str => {
    let sum = 0
    let wholeNumber = ''
        if (str.replaceAll(/\D/g,'').length === str.length) return Number(str)
        for (let i = 0; i <= str.length; i++) {
        
        if (/\d/.test(str[i])) wholeNumber += str[i]
        else {
            sum += Number(wholeNumber)
            wholeNumber = ''
        }
            

    }
    return sum

    }

   


console.log(findSumNumbers('15j15'))


console.log(`\n--------------- Task Four ---------------\n`);

/*
Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears in the string.

*/

const findBiggestNumber = str => {
    let largest = 0
    let output = ''
    if (str.replaceAll(/\D/g,'').length === str.length) return Number(str)
    
    for (let i = 0; i < str.length; i++) {
        
        if (/\D/.test(str[i])) {
            if (Number(output) > largest) {
                largest = Number(output)
                output = ''
            }
            else {
                output = ''
            }
        }
        
        if (/\d/.test(str[i])) output += str[i]
    }
    if (output && Number(output) > largest) largest = Number(output)

    return largest
}



console.log(findBiggestNumber("abc$") 	,
findBiggestNumber("a1b4c  6#") 		,
findBiggestNumber("ab110c045d") 	,	
findBiggestNumber("525") ,		
findBiggestNumber("3 for 10 dollars"))


console.log(`\n--------------- Task Five ---------------\n`);

const countOccurencesOfCharacter = str => {
    let output = ''
    let count = 1
    let tmp = str[0]

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === tmp) count += 1
        else {
            output += `${count}${tmp}`
            tmp = str[i]
            count = 1

        }
     

    }
    return output
}



console.log(countOccurencesOfCharacter('wwwe'))


console.log(`\n--------------- Task Six ---------------\n`)

const fibonacciSeries1 = n => {
    const output = []
    for (let i = 0; i < n; i++) {
        if (i === 0) output.push(0) 
        else if (i === 1) output.push(1)
        else output.push(output[i - 2] + output[i - 1])

    }
    return output
}

console.log(fibonacciSeries1(7000))


console.log(`\n--------------- Task Seven ---------------\n`)
const fibonacciSeries2 = n => {


const output = []
for (let i = 0; i <= 9; i++) {
    if (i === 0) output.push(0) 
    else if (i === 1) output.push(1)
    else output.push(output[i - 2] + output[i - 1])

}
return output[n - 1]

}


console.log(fibonacciSeries2(9))


console.log(`\n--------------- Task Eight ---------------\n`)

const findUniques = (arr1, arr2) => {
    const output = []
    if (arr1 || arr2) {
        for (let i of arr1) {
            if (arr2.includes(i)) continue
            output.push(i)
        }
        for (let i of arr2) {
            if (arr1.includes(i)) continue
            output.push(i)
        }
        
    }
    return [...new Set(output)] 
}

console.log(findUniques([-1, -2], [1,2]))



console.log(`\n--------------- Task Nine ---------------\n`)

const isPowerOf3 = number => {

    let output = number
    for (let i = 0; i < number; i++) {
        if (output === 1) return true
        
        output = output / 3


    }
    return false
}


console.log(isPowerOf3(3))

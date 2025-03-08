const numbers = [5,7,1,3,10]


//for loop

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}



// for...of loop would be better

for (const number of numbers) {
    console.log(number)
}


// forEach() method

numbers.forEach(function(x) {
console.log(x)
})

const names = ['Mariia', 'Alex', 'John', 'Jane', 'Victoria']

names.forEach((x) => {
    if (x.length === 4) console.log(x)
    })


const nums = [5,3,2,1]

let sum = 0
let product = 1
const arrMultiplied = []

nums.forEach((x) => {
sum += x
product *= x
arrMultiplied.push(x * 5)
})

console.log(sum,product,arrMultiplied)
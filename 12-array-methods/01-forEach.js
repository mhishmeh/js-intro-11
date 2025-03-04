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
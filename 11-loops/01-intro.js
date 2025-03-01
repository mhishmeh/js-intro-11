
for (let i = 0; i <= 50 ; i++) {
    if ( i % 5 === 0) {
        console.log(i)
    }

}
let number = 1
for (let i = 1; i <= 6; i++) {
    number *= i
}
console.log(number)


let str = 'TechGlobal School';
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}


// count how many a's we have in the below string

let fruit = 'banana'
let count = 0
for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === 'a') count += 1

}
console.log(count)


let randomNumber1 = Math.floor(Math.random() * (10) + 1)
let randomNumber2 = Math.floor(Math.random() * (10) + 1)


console.log(`The random number1 is ${randomNumber1}`)
console.log(`The random number2 is ${randomNumber2}`)

let max = Math.max(randomNumber1,randomNumber2)
let min = Math.min(randomNumber1,randomNumber2)


for (let i = min; i < max; i++) {
    console.log(i)
}

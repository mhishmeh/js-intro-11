console.log('------ TASK ONE -----')

const toIntials = str => {
    const arr = str.split(' ')
    const firstInitial = arr[0][0]
    const lastInitial = arr[1][0]
    return `${firstInitial}. ${lastInitial}.`
}

console.log(toIntials('Joe Doe'))
console.log(toIntials('Moe Hishmeh'))

console.log('------ TASK TWO -----')

const hasNumbers = str => /[0-9]/.test(str)


console.log(hasNumbers('John is one'))

console.log('------ TASK THREE -----')

const elementLength = arr => {
    const output = []
    for (let i of arr) output.push(i.length)
    return output
}
console.log(elementLength([ "Hello", "8" ]))

console.log('------ TASK FOUR -----')

const isArraySumEvenOrOdd = arr => {
    let sum = 0
    if (arr.length < 1) return even
    for (let i of arr) sum += i
    
    if (sum % 2 === 0) return 'even'
    return 'odd'
}
console.log('------ TASK FIVE -----')
const reverse = str => {
    let output = ''
    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i]
    }
    return output
}

console.log(reverse('hello'))


console.log('------ TASK SIX -----')

const reverseWords = str => {
    const arr = str.trim().split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('')
    }
    return arr.join(' ')
}

console.log(reverseWords('Hello World'))
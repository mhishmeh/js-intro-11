const names = ['Mariia', 'Alex', 'John', 'Jane', 'Victoria']


const namesWithA = names.filter((x) => x.toLowerCase().includes('a'))
console.log(namesWithA.length)



const numbers = [10,5,100,77,50,65,0]

console.log(numbers.filter( (x) => x >= 50))


const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const fruitsWithApple = fruits.filter((x) => x.toLowerCase().includes('apple'))
const fruitsWithLetterA = fruits.filter((x) => x.toLowerCase().includes('a'))
const fruitsWithLetterI = fruits.filter((x) => x.toLowerCase().includes('i'))


console.log(fruitsWithApple)
console.log(fruitsWithLetterA.length)
console.log(fruitsWithLetterI.length)


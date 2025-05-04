console.log(`\n--------------- Task One ---------------\n`)

const countPalindrome = str => {
    if (str.trim().length < 1) return 0
    let count = 0
    const arr = str.trim().split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === arr[i].split('').reverse().join('').toLowerCase()) count++
    }
    return count
}

console.log(countPalindrome("Mom and Dad")) // -> 2
console.log(countPalindrome("See you at noon")) // -> 1
console.log(countPalindrome("Kayak races attracts racecar drivers")) // -> 2
console.log(countPalindrome("")) // -> 0
console.log(countPalindrome("No palindrome here")) // -> 0


console.log(`\n--------------- Task Two ---------------\n`)

const sum = (arr, bool) => {
    let sum = 0
    if (bool) {
        for (let i = 0; i < arr.length; i += 2) sum+= arr[i]
    }
    else {
        for (let i = 1; i < arr.length; i += 2) sum += arr[i]
    }
    return sum
}


console.log(sum([1, 5, 10], true)) // -> 11
console.log(sum([3, 7, 2, 5, 10], false)) // -> 12
console.log(sum([-1, 1, -2, 2], true)) // -> -3
console.log(sum([0, -1, 15, 1], false)) // -> 0
console.log(sum([1, 2, 3, 4, -4], true)) // -> 0

console.log(`\n--------------- Task Three ---------------\n`)

const nthChars = (str, num) => {
    let target = num - 1
    let output = ''
    for (let i = target; i < str.length; i += num) {
        output += str[i]
    }
    return output
}
console.log(nthChars("Java", 2)) // -> "aa"
console.log(nthChars("JavaScript", 5)) // -> "St"
console.log(nthChars("Java", 3)) // -> "v"
console.log(nthChars("Hi", 4)) // -> ""
console.log(nthChars("0123456789", 2)) // -> "13579"


console.log(`\n--------------- Task Four ---------------\n`)


const canFormString = (str1, str2) => {
    const arr = str2.toLowerCase().replaceAll(/\s+/g,'').split('')

 
    for (let i of arr) {

        if (!(str1.toLowerCase().includes(i))) return false
        str1 = str1.replace(i,'')
    }
    return true

}

console.log(canFormString("CONVERSATION", "voices rant on")) // -> true
console.log(canFormString("Hello", "Hi")) // -> false
console.log(canFormString("programming", "gaming")) // -> true
console.log(canFormString("halogen", "hello")) // -> false

console.log(canFormString("12", "123")) // -> false



console.log(`\n--------------- Task Five ---------------\n`)


const isAnaram = (str1, str2) => str1.toLowerCase().split('').sort() === str2.toLowerCase().split('').sort()

console.log(isAnaram('Apple', 'Peach'))



console.log(`\n--------------- Task Six ---------------\n`)

const count = (arr, bool) => {
    let count = 0
    if (bool) {
        for (let i of arr) {
            if (i % 2 === 0) count++
        }
    }
    else {
        for (let i of arr) {
            if (i % 2 !== 0) count++

        }
    }
    return count
    }


    console.log(count([1, 5, 10], true)) // -> 1
    console.log(count([3, 7, 2, 5, 10], false)) // -> 3
    console.log(count([-1, 1, -2, 2], true)) // -> 2
    console.log(count([0, -1, 15, 1], false)) // -> 3
    console.log(count([1, 2, 3, 4, -4], true)) // -> 3


    console.log(`\n--------------- Task Seven ---------------\n`)

    const sumDigitsDouble = str => {
        let sum = 0
        for (let i of str) {
            if (/\d/.test(i)) sum += Number(i)
        }
        if (sum === 0) return -1
        return sum * 2
    }
console.log(sumDigitsDouble(" Javascript ")) // -> -1
console.log(sumDigitsDouble("23abc45")) // -> 28
console.log(sumDigitsDouble("Hi-23")) // -> 10
console.log(sumDigitsDouble("ab12")) // -> 6
console.log(sumDigitsDouble("n0numh3r3")) // -> 12


console.log(`\n--------------- Task Eight ---------------\n`)

const countOccurrence = (str1, str2) => {
    let hashMap = {}
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    for (let i of str1) {
        if (i in hashMap) hashMap[i] += 1
        else hashMap[i] = 1
    }
    
    let min = Infinity
    for (let i of str2) {
        
        if (!(hashMap[i])) return 0

        min = Math.min(min, hashMap[i])   
    }
    return min
}

console.log(countOccurrence(" Javascript ", "Java")) // -> 1
console.log(countOccurrence("Hello", "World")) // -> 0
console.log(countOccurrence("Can I can a can", " anc ")) // -> 3
console.log(countOccurrence("Hello", "l")) // -> 2
console.log(countOccurrence("IT conversations", "IT")) // -> 2
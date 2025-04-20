const getDuplicates = arr => {
    const seen = new Set()
    const duplicates = []

    for (let i of arr) {
        if (seen.has(i) && !(duplicates.includes(i))) duplicates.push(i)
        else seen.add(i)
    }
    return duplicates
}

console.log(getDuplicates([1,2,1,3,2,2]))



const removeDuplicates = arr => {
    const seen = []
    for (let i of arr) {
        if (seen.includes((i))) continue
        seen.push(i)
    }
    return seen
}
console.log(removeDuplicates([1,1,2,2,3,3,4]))

const isPrime = num => {
    if (num < 2) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) return false
    }
    return true
}

console.log(isPrime(0))




const add = (arr1, arr2) => {
    const output = []
    let max = Math.max(arr1.length, arr2.length)
    

    for (let i = 0; i < max; i++) {
        let value1 = arr1[i] || 0
        let value2 = arr2[i] || 0
        output.push(value1 + value2)
    }
    return output
}

console.log(add([1,2,3],[1,2]))




const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('')
    return str.toLowerCase() === reversedStr.toLowerCase()
}

console.log(isPalindrome('Kayak'))



const reverseStringWords = str => {
    const arr = str.trim().split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('')
        
    }
    return arr.join(' ')
}

console.log(reverseStringWords('     ').length)
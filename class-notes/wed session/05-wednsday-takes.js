/*

Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])  -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])                         -> 1

*/

function firstPos(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) return arr[i]
    }
}

console.log(firstPos([0, 3, -9,  5, 8]) )


function lastNeg(arr) {
    for (let i = arr.length - 1; i >=0; i--) {
        if (arr[i] < 0) return arr[i]
    }
}
console.log(lastNeg([0, 3, -9,  5, 8]))



const firstLongest = arr => {
    let longest = arr[0]

    for (const ele of arr) {
        if (ele.length > longest.length) longest = ele
    }
    return longest
}

console.log(firstLongest(["Apple", "Banana", "Orange"]))


const min = arr => {
    let smallest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) smallest = arr[i]
    }
    return smallest
}

console.log(min([0, 3,  5, 8]))


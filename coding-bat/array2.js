/*


Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.


sum67([1, 2, 2]) → 5
sum67([1, 2, 2, 6, 99, 99, 7]) → 5
sum67([) -> 4

*/


//add nums to sum until value is 6. continue until value is 7???

function sum67(nums) {
    let sum = 0;
    let found6 = nums.findIndex((x) => x === 6)
    let found7 = nums.findIndex((x) => x === 7)

    let slice1 = nums.slice(0,found6)
    let slice2 = nums.slice(found7 + 1)

    const arr = [...slice1, ...slice2]
    arr.forEach((x) => sum += x)
    return sum
    

}

console.log(sum67([]))


/*


Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.


has22([1, 2, 2]) → true
has22([1, 2, 1, 2]) → false
has22([2, 1, 2]) → false

*/

function has22(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            if (arr[i + 1] === 2) return true
        }
    }
    return false
}

console.log(has22([1, 2, 2]))


/*


Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.


sum28([2, 3, 2, 2, 4, 2]) → true
sum28([2, 3, 2, 2, 4, 2, 2]) → false
sum28([1, 2, 3, 4]) → false

*/

function sum28(arr) {
    let sum = 0
    arr.forEach( (x) => {
        if (x === 2) sum+= x
    

    }) 
    return sum === 8
}


console.log(sum28([1, 2, 3, 4]))


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find shortest fruit -> Kiwi

let shortestFruit = fruits.reduce((acc,x) => {
    if(x.length < acc.length) return acc = x
    else return acc

},)


console.log(shortestFruit)


const numbers = [-2, -5, 3, 0, 5, 8, 10]


let evenAndPos = numbers.reduce((acc,x) => {
    return (x > 0) && (x % 2 === 0) ? acc + 1 : acc
    
},0)

console.log(evenAndPos)


const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
  ];
  // sum of numbers of inner arrays : [6, 35, 300]
let output = []
for (let i = 0; i < nums.length; i++) {
    output.push(nums[i].reduce((acc, x) =>  acc += x,0))
}

console.log(output)



const words = ['hello', 'tueday', 'HEYY','apple']

let fiveAndUpperCase = words.filter((x) => (x.length === 5)).map((x) => x.toUpperCase())

console.log(fiveAndUpperCase)


/*


We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.


isEverywhere([1, 2, 1, 3], 1) → true
isEverywhere([1, 2, 1, 3], 2) → false
isEverywhere([1, 2, 1, 3, 4], 1) → false

*/

function isEverywhere(arr, num) {
    if (arr.length <= 1) return true
    for (let i = 0; i < arr.length; i+=2) {
        if (!(arr[i] === num|| arr[i+1] === num)) return false
    }
    return true

}

console.log(isEverywhere([2, 1, 2, 1, 2], 2))


/*


Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.


either24([1, 2, 2]) → true
either24([4, 4, 1]) → true
either24([4, 4, 1, 2, 2]) → false

*/

function either24(arr) {
    let foundTwos = false
    let foundFours = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2 && arr[i + 1] === 2) {
            foundTwos = true
        }
        if (arr[i] === 4 && arr[i + 1] === 4) {
            foundFours = true
        }

    }

    if (foundTwos === foundFours) return false
    return true

}

console.log(either24([1, 2, 2]))
console.log(either24([4, 4, 1, 2, 2]))


/*


Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.


matchUp([1, 2, 3], [2, 3, 10]) → 2
matchUp([1, 2, 3], [2, 3, 5]) → 3
matchUp([1, 2, 3], [2, 3, 3]) → 2

*/

function matchUp(arr1,arr2) {
    let count = 0
    for (let i = 0; i < arr1.length; i++ ) {
        if ((arr1[i] !== arr2[i]) && ((Math.abs(arr1[i] - arr2[i]) <= 2))) count += 1
    }
    return count
}

console.log(matchUp([1, 2, 3], [2, 3, 10]))
console.log(matchUp([1, 2, 3], [2, 3, 5]))
console.log(matchUp([1, 2, 3], [2, 3, 3]))


/*


Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.


has77([1, 7, 7]) → true
has77([1, 7, 1, 7]) → true
has77([1, 7, 1, 1, 7]) → false

*/

function has77(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 7 && arr[i+1] === 7 || arr[i] === 7 && arr[i + 2] === 7) return true

    
}
return false
}
console.log(has77([1, 7, 7]))
console.log(has77([1, 7, 1, 7]))
console.log(has77([1, 7, 1, 1, 7]))


/*


Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.


has12([1, 3, 2]) → true
has12([3, 1, 2]) → true
has12([3, 1, 4, 5, 2]) → true

*/


function has12(arr) {
    let one = arr.indexOf(1)

    return arr.includes(1) && arr.slice(one).includes(2)
}

console.log(has12([3, 1, 4, 5, 2]))

/*


Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.


modThree([2, 1, 3, 5]) → true
modThree([2, 1, 2, 5]) → false
modThree([2, 4, 2, 5]) → true

*/

function modThree(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 === 0 && arr[i + 1]  % 2 === 0 && arr[i + 2]  % 2 === 0) return true
        if (arr[i] % 2 !== 0 && arr[i + 1]  % 2 !== 0 && arr[i + 2]  % 2 !== 0) return true
    }
    return false
}

console.log(modThree([2, 1, 3, 5]))
console.log(modThree([2, 1, 2, 5]))
console.log(modThree([2, 4, 2, 5]))

/*


Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.


haveThree([3, 1, 3, 1, 3]) → true
haveThree([3, 1, 3, 3]) → false
haveThree([3, 4, 3, 3, 4]) → false

*/

function haveThree(arr) {
    let found = true
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) count+= 1 
        if (arr[i] === 3 && arr[i+1] === 3) found = false
    }
    return count === 3 && found
}

console.log(haveThree([1,3,1,3,1,3]))
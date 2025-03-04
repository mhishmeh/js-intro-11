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
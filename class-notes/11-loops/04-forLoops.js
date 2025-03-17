/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->     [ 5, 8, 2, 1, 2 ]
Second array ->   [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/


const firstArr = [ 5, 8, 2, 1, 2 ]
const secondArr  = [ 9, 3, 5, 1, 0 ]

let thirdArr = []

for (let i = 0; i < firstArr.length; i++) {
    thirdArr.push(firstArr[i] * secondArr[i])

}
console.log(thirdArr)

const cities = ['Berlin', 'Rome', 'Chicago', 'Kyiv', 'Istanbul', 'Tokyo'];



const citiesWithFive = []

for (let city of cities) {
    if (city.length > 5) citiesWithFive.push(city)
}

console.log(citiesWithFive)
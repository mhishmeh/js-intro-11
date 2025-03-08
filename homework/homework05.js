console.log(`\n--------------- Task Ten ---------------\n`);




console.log(`\n--------------- Task Eleven ---------------\n`);

/*

Write a function named add() which takes two array of numbers as argument and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.

*/




function add(arr1, arr2) {
    const output = []

    if (arr1.length < arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            output.push(arr1[i] + arr2[i])
        }
        let index = arr1.indexOf(arr1.at(-1))
        return output.concat(arr2.slice(index+1))
    }
    else {
        for (let i = 0; i < arr2.length; i++) {
            output.push(arr1[i] + arr2[i])
        }
        let index = arr2.indexOf(arr2.at(-1))
        return output.concat(arr1.slice(index+1))
    }


}

console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]))
console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]))

console.log(`\n--------------- Task Twelve ---------------\n`);
/*

Write a function named as removeExtraSpaces() which takes a string word as an argument and returns the string back with all extra spaces removed when invoked.

*/

function removeExtraSpaces(str) {
    return str.split(" ").filter(ele => ele !== "").join(" ")
}

console.log(removeExtraSpaces("      Hello    World     "))
console.log(removeExtraSpaces("     JavaScript is          fun"))







console.log(`\n--------------- Task Thirteen ---------------\n`);


/*

Write a function named findClosestTo10() which takes an array of numbers as argument and returns the closest element to 10 from the given array.

*/


function findClosestTo10(arr) {
    let min = Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 10) continue
        if (Math.abs((10 - arr[i]))  < Math.abs((10 - min))) min = arr[i]
    }
    return  min
}

console.log(findClosestTo10([10, -13, 5, 70, 15,57]))
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]))
console.log(findClosestTo10([0, -1, -2]))



console.log(`\n--------------- Task Fourteen ---------------\n`);

/*

Write a function named as isEmailValid() which takes a string email as an argument and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

*/

function isEmailValid(str) {
    if (str.includes(' ')) return false
    if ((str.match(/@/g) || []).length > 1) return false;
    if (!(/..+@..+\...+/.test(str))) return false
    return true
    }
    

    console.log(isEmailValid(""), 			
    isEmailValid("@gmail.com") ,	
    isEmailValid("johndoe@yahoo") ,	
    isEmailValid("johndoe@.com") ,	
    isEmailValid("a@outlook.com"), 	
    isEmailValid("johndoe@a.com") ,	
    isEmailValid("johndoe@@gmail.com"),
    isEmailValid("johndoe@gmail.com"))




    console.log(`\n--------------- Task Fifteen ---------------\n`);

    /*

    Requirement: 
Write a function named as isPasswordValid() which takes a string email as an argument and returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

*/

function isPasswordValid(str) {
    if (!(str.length >= 8 && str.length <= 16)) return false
    if (str.includes(' ')) return false
    if (!(/(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z\d])/.test(str))) return false
    return true
}
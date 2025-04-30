console.log(`\n--------------- Task One ---------------\n`)
/*
Write a function named calculateTotalPrice1() which takes an object of some shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
*/

// calculateTotalPrice1({ apple: 3, mango: 1 }) 			-> 10.99


const calculateTotalPrice1 = obj => {
    let apple = 2
    let orange = 3.29
    let mango = 4.99
    let pinapple = 5.25

    let total = 0
    for (let key in obj) {
        if (key === 'apple') {
            total += apple * obj[key]
        }
        else if (key === 'orange') {
            total += orange * obj[key]
         }
        else if (key === 'mango') {   
            total += mango * obj[key]
        }
        else total += pinapple * obj[key]
    }

    return total

}


console.log(calculateTotalPrice1({ apple: 3, mango: 1 }))  // -> 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })) //  -> 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })) //  -> 0
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })) //  -> 12.24


console.log(`\n--------------- Task Two ---------------\n`)

/*
Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.

*/

const calculateTotalPrice2 = obj => {
    let apple = 2
    let orange = 3.29
    let mango = 4.99
    let pinapple = 5.25

    let total = 0
    for (let key in obj) {
        if (key.toLowerCase() === 'apple') {
            let discount = Math.floor(obj[key] / 2)
            total += apple * obj[key] - discount

        }
        else if (key.toLowerCase() === 'orange') {
            total += orange * obj[key]
         }
        else if (key.toLowerCase() === 'mango') {
            if (obj[key] < 3) total += mango * obj[key]   
            let discout = Math.floor(obj[key] / 4) 
            total += mango * obj[key] - (discout * mango)
        }
        else total += pinapple * obj[key]
    }

    return total

}

console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })) //  -> 24.96
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })) //  -> 45.81
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })) //  -> 0
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })) //  -> 29.51



console.log(`\n--------------- Task Three ---------------\n`)

const nthWord = (str, n) => {
    const words = str.split(' ').filter(word => word !== '');
    if (n > words.length || n < 1) return '';
    return words[n - 1];
};

console.log(nthWord("I like programming languages", 2))

console.log(`\n--------------- Task Four ---------------\n`)

const isArmstrong = (num) => {
    let numString = num.toString();
    let numLength = numString.length;
    let sum = 0;
    for (let i = 0; i < numLength; i++) {
        let digit = parseInt(numString[i]);
        sum = sum + (digit ** numLength);
    }
    return sum === num;
}

console.log(isArmstrong(153))



console.log(`\n--------------- Task Five ---------------\n`)
const reverseNumber = (number) => {
    let result = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        result = (result * 10) + lastDigit;
        number = Math.floor(number / 10);
    }
    return result;
}
console.log(reverseNumber(371) )


console.log(`\n--------------- Task Six ---------------\n`)

const doubleOrTriple = (numbers, isDouble) => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isDouble === true) {
            result.push(numbers[i] * 2);
        } else {
            result.push(numbers[i] * 3);
        }
    }
    return result;
};

console.log(doubleOrTriple([1, 5, 10], true))



onsole.log(`\n--------------- Task Seven ---------------\n`)
const splitString = (text, number) => {
    let textLength = text.length;
    if (textLength < number) {
        return "";
    }
    if (textLength % number !== 0) {
        return "";
    }
    let answer = "";
    let count = 0;
    for (let i = 0; i < textLength; i++) {
        answer = answer + text[i];
        count = count + 1;
        if (count === number && i !== textLength - 1) {
            answer = answer + " ";
            count = 0;
        }
    }
    return answer;
};

console.log(splitString("JavaScript", 5))
console.log(`\n--------------- Task One ---------------\n`);

console.log(`I start to practice "JavaScript" today, and I like it.`);
console.log(`The secret of getting ahead is getting started.`);
console.log(`"Don't limit yourself."`);
console.log(`Invest in your dreams. Grind now. Shine later.`);
console.log(`It's not the load that breaks you down, it's the way you carry it.`);
console.log(`The hard days are what make you stronger.`);
console.log(`You can waste your lives drawing lines. Or you can live your life crossing them.`);



console.log(`\n--------------- Task Two ---------------\n`);
console.log(`\tJavaScript is a high-level programming language primarily used to\nbuild web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.\n\n\t It is open source and has a huge community support, which means\nthere are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn.`);


console.log(`\n--------------- Task Three ---------------\n`);

let myAge = 26;
let myFavoriteNumber = 13;
let myHeight = '5 foot 11';
let myWeight = 220;
let myFavoriteLetter = 'x';

console.log(`My age is ${myAge}`);
console.log(`My favorite Number is ${myFavoriteNumber}`);
console.log(`My Height is ${myHeight}`);
console.log(`My weight is ${myWeight}`);
console.log(`My favorite letter is ${myFavoriteLetter}`);


console.log(`\n--------------- Task Four ---------------\n`);
let num1 = 25
let num2 = 35

let sum = num1+num2
console.log(`The sum of the numbers = ${sum}`)



console.log(`\n--------------- Task Five ---------------\n`);

let n1 = 5
let n2 = 7
let product = n1*n2

console.log(`The product of the numbers = ${product}`)


console.log(`\n--------------- Task Six ---------------\n`);

let number1 = 24;
let number2 = 10;

let Sum = number1 + number2;
let Product = number1   * number2;
let Subtraction = number1 - number2;
let Division = number1 / number2;
let remainder = number1 % number2;
console.log(`The sum of the numbers is = ${Sum}\nThe product of the numbers is = ${Product}\nThe subtraction of the numbers is = ${Subtraction}\nThe division of the numbers is = ${Division}\nThe remainder of the numbers is = ${remainder}`)


console.log(`\n--------------- Task Seven ---------------\n`);
let i1 = 7;
let i2 = 11;
let average = (i1+i2) / 2
console.log(`The average of the numbers is: ${average}`);


console.log(`\n--------------- Task Eight ---------------\n`);
let a1 = 6;
let a2 = 10;
let a3 = 12;
let a4 = 15;
let a5 = 17;

let averageOfNumbers  = (a1+a2+a3+ a4 +a5) /5
console.log(`The average of the numbers is: ${averageOfNumbers}`);


console.log(`\n--------------- Task Nine ---------------\n`);
let b1 = 5;
let b2 = 6;
let b3 = 10;
console.log(`The 5 multiplied with 5 is = ${b1*b1}\nThe 6 multiplied with 6 is = ${b2*b2}\nThe 10 multiplied with 10 is = ${b3*b3}`)


console.log(`\n--------------- Task Ten ---------------\n`);
let side = 7;
let areaOfASquare = side * side;
let perimeterOfASquare = 4 * side
console.log(`The perimeter of the square = ${perimeterOfASquare}\nThe area of the square = ${areaOfASquare}`)

console.log(`\n--------------- Task Eleven ---------------\n`);

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
let favNumber = 7;
console.log(`The favorite book is ${favBook}\nThe favorite color is ${favColor}\nThe favorite number is ${favNumber}`);



console.log(`\n--------------- Task Twelve ---------------\n`);

let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 St Chicago IL 12345';

console.log(`\tUser who joined this program is ${firstName} ${lastName}. ${firstName}'s age is ${age}.\n${firstName}'s email address is ${emailAddress}, phone number is ${phoneNumber} and address is ${address}.`)


function multipyBy5(max,min) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    let product = randomNumber * 5
    console.log(`The random number (${randomNumber}) * 5 = ${product}`)
}

multipyBy5(50,0)
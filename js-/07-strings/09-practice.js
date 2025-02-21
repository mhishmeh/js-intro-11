function getLastFive(string) {
    console.log(string.slice(-1,-5))
}


getLastFive('Morning')




function combineFirstAndLastThree(string) {
    let firstThree = string.slice(0,3)
    let lastThree = string.slice(-3)
    let combinedString = firstThree + lastThree
    
    console.log(combinedString)
}


combineFirstAndLastThree('Hello')


function greetName(greet,name) {
    console.log( `${greet}, ${name}!`)
}
greetName('hey','moe')

let str = "4"

function average(num1, num2) {
    return (num1+num2) / 2
}

console.log(average(3,3))
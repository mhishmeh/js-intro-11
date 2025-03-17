const vehicle = {
    move: function() {
        console.log('MOVE')
    }
}

const car = {
    __proto__: vehicle,
    drive: function() {
        console.log('DRIVE')
    }
}


const myCar = {
    __proto__:car,
    electricCharging: true

}

console.log(myCar.electricCharging)
myCar.drive();


let obj = {}

console.log(obj.__proto__.__proto__)
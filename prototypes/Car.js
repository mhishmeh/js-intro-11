//create a car class
// add a constructor 


class Car {
    constructor(make, model, year, price) {
        this.make = make
        this.model = model
        this.year = year
        this.price = price
    }



    drive(){
        console.log(`${this.make} ${this.model} drives!`)
    }

    brakes() {
         console.log(`${this.make} ${this.model} brakes!`)
    }
}



const car1 = new Car('Tesla', 'Model x')


const cars = [car1, car2, car3]

for (let car of cars) {
    console.log(car)
    car.drive()
    car.brakes()
    console.log(`${car.year} ${car.make} ${car.model} is ${car.price}`)
}
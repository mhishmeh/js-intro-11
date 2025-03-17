class Person {
    constructor(fullname, age) {
        this.fullname = fullname
        this.age = age
    }

    eat(str) {
        console.log(`Person eats ${str}`)
    }
    sleep(num) {
        console.log(`Person sleeps for ${num} hours`)
    }
    walk() {
        return true
    }
}

const person = new Person('John',24)

person.eat('orange')
person.sleep(6)




class Dancer extends Person {
    constructor(fullname, age, groupName){
        super(fullname, age)
        this.groupName = groupName

    }
    dance() {
        return true
    }

}


const moe = new Dancer('mohamadHishmeh', 26, 'hishmehs')

moe.eat('apple')
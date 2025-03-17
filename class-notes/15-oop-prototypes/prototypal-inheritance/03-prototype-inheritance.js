function Animal(name, age) {
    this.name = name
    this.age = age

}

Animal.prototype.sleep = function () {
    console.log('SLEEP')
}

Object.create()
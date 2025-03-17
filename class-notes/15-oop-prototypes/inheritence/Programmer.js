
const Person = require('./Person.js')

class Programmer extends Person {
    constructor(fullname, age, companyName) {
        super(fullname, age)
        this.companyName = companyName
    }






    code(language) {
        console.log(`programmer codes in ${language}`)
    }
}
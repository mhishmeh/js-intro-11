class Author {
    constructor(firstName, lastName, country, books) {
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.books = books
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    getBooks() {
        return this.books
    }

}







module.exports = Author
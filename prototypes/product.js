class Product {
    constructor(name, quantity, price) {
        this.name = name
        this.quantity = quantity
        this.price = price
    }

    sell(num) {
        this.quantity -= num
    }

    return(num) {
        this.quantity += num
    }

    applyDiscount(percentage) {
        this.price -= this.price * percentage
    }
}

module.exports = Product
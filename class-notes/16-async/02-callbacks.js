function goToCarvana() {

    setTimeout(() => {
        console.log('Carvana website is loaded...')

    },500)
   
}

function clickOnFiancing() {
    setTimeout(() => {
        console.log('Carvana fiancing page is loaded...')

    },1000)
}

function validateHeading(expected) {
    setTimeout(() => {
        console.log(`${expected} heading is visible`)

    },750)
}

function test1() {
    goToCarvana()
    clickOnFiancing()
    validateHeading('FINANCING MADE EASY')

}

test1()

/*

expected flow:
carvana website is loaded...
carvana fiancing page is loaded...
finaccing header is loaded...

*/

/*
actual flow without handling async
Carvana website is loaded...
FINANCING MADE EASY heading is visible
Carvana fiancing page is loaded...

*/
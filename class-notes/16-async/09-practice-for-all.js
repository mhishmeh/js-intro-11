function goToAmazon1(callback, error) {
    const bool = true
    setTimeout(() => {
        console.log('Amazon is loading...')
        if (bool) callback();
        else error()
    }, 500)
}

function clickOnLocationHeaderItem1(callback, error) {
    const bool = true
    setTimeout( () => {
        console.log('Locating header item is clicked...')
        if (bool) callback();
        else error()
    }, 200)
}

function validateDialogisVisible(callback, error) {
    const bool = true
    setTimeout( () => {
        console.log('Dialog is visible')
        if (bool) callback();
        else error()
    },300)
}

function test1() {
    goToAmazon1(() => {}, () => {})
}


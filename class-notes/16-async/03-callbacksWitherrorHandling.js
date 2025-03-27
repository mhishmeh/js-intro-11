const { getRandomNumber } = require('./../../utils/MathHelper.js')


console.log(getRandomNumber(0,1))

function getEven(successCallback, errorCallback) {
    setTimeout(() => {
        const ran = getRandomNumber(0,10)
        console.log(`The random number is ${ran}`)
        if (ran % 2 === 0) successCallback()
        else errorCallback()
    },1000)



}

getEven(() => {
    console.log('success')
}, () => {
    console.log('ERROR')
})
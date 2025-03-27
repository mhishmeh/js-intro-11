function connectToServer() {
    return new Promise((resolve, reject) => {
        const serverUp = false;
        if (serverUp) resolve('Server Connection is complete...')
        else reject('Error: Server is down')
    })
}


connectToServer()
.then((data) => {
    console.log(data)
})
.catch((data) => {
    console.log(typeof data)
})
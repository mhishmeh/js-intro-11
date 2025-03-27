function connectToServer() {
    return new Promise((resolve, reject) => {
        const bool = true
        if (bool) {
            console.log('connection Succesful')
            resolve()
        }
        else {
            console.log('conneciton failure')
            reject()
        }
    })
}


async function test1() {
    await connectToServer()
}

test1()
//keys are always unique but values can be duplicates


const computer = {
    os: 'MacOS',
    color: 'Black',
    memory: '1 TB',
    price: 999.99
};
Object.freeze(computer)
Object.isFrozen(computer)


// for in loop

for (const key in computer) {
    console.log(key) // keys
    console.log(computer[key]) // values

}

console.log('\n-------------- for of loop--------')


Object.keys(computer)
Object.values(computer)
Object.entries(computer)

for (const key of Object.keys(computer)) {
    console.log(key)

    console.log(computer[key]) // can still get values even from Object.keys() array
}

for (const value of Object.values(computer)) { // you can ONLY get values from Object.values()
    console.log(value) // loop thorugh values one by one
}



for (const entry of Object.entries(computer)) {
    console.log(entry) //entry
    console.log(entry[0]) // keys
    console.log(entry[1]) // values
}

// could also work

for (const [ k, v ] of Object.entries(computer)) {
    console.log(k,v)
}




function print1() {
    console.log('1')
}

function program() {
    return print1()
}

program()


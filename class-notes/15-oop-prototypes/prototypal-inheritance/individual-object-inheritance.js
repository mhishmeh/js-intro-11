const baseTable = {
    name: 'Table',
    adjustable: true
}


const diningTable = {
    __proto__: baseTable, //inheriting properties of baseTable object
    name: 'Table',
    purpose: 'Dining',
    material: 'Wood'
}

const officeTable = {
    __proto__: baseTable,
    name: 'Table',
    purpose: 'Work-Office',
    materiak: 'Wood'
}
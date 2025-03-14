






const student = {
    firstName:'John',
    lastname: 'Smith',
    hobbies: ['Soccer', 'Watching Movies'],
    examScores: {
        midterm: 60,
        final: 90
    }

}

console.log(student.hobbies)
console.log(student.examScores)
console.log(student.hobbies[0])
let sum = 0
for (let i in student.examScores) {
    console.log(i)
    sum += student.examScores[i]
    
}
console.log(sum /(Object.keys(student.examScores).length))
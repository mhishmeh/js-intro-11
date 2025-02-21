console.log(`\n--------------- Task One ---------------\n`);
function taskOne(min,max) {
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min)
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1) + min)
    let randomNumber3 = Math.floor(Math.random() * (max - min + 1) + min)

    let avg = (randomNumber1 + randomNumber2 +randomNumber3) / 3

    if (avg >= 50) {
        return console.log('true')
    }
    else {
        return console.log('false')
    }

}


taskOne(1,100)


console.log(`\n--------------- Task Two ---------------\n`);

function taskTwo(min,max) {
    let randomNumber1 = Math.floor(Math.random() * (max - min + 1) + min)
    let randomNumber2 = Math.floor(Math.random() * (max - min + 1) + min)
    let randomNumber3 = Math.floor(Math.random() * (max - min + 1) + min)


    if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3) {
       return console.log('TRIPLE MATCH!')
    }
    else if (randomNumber1 === randomNumber2 || randomNumber1 == randomNumber3 || randomNumber2 === randomNumber3) {
        return console.log('DOUBLE MATCH')

    } else {
    return console.log('NO MATCH!')
    }
}


taskTwo(1,3)

console.log(`\n--------------- Task Three ---------------\n`);

function hasA(string) {
    return console.log(string.includes('a') || string.includes('A'))
}

hasA('Hy')


console.log(`\n--------------- Task Four ---------------\n`);

function doubleOrTripleWord(string) {
    if (string.length % 2 === 0) {
        return console.log(string+ string + string)
    } else {
        return console.log(string+string)
    }
}



console.log(`\n--------------- Task Five ---------------\n`);

function firstWord(string) {
    let arr = string.split(' ')
    return console.log(arr[0])
}

firstWord('hey brother')


console.log(`\n--------------- Task Six ---------------\n`);
function lastWord(string) {
    let arr = string.split(' ')
    return console.log(arr.at(-1))
}

lastWord('hey brother')

console.log(`\n--------------- Task Seven ---------------\n`);

function  firstlastWord(string) {
    let arr = string.split(' ')
    return console.log(arr[0], arr.at(-1))
}

firstlastWord('Hey brother How are you')

console.log(`\n--------------- Task Eight ---------------\n`);

function startVowel(string) {
    return (string.toLowerCase().startsWith('a') || string.toLowerCase().startsWith('e' || string.toLowerCase().startsWith('i') || string.toLowerCase().startsWith('o') ||string.toLowerCase().startsWith('u'))) 
}
console.log(startVowel('hhh'))

console.log(`\n--------------- Task Nine ---------------\n`);


function swap4(string) {
    if (string.length < 8) {
        return ''
    } else {
        return  string.slice(-4) + string.slice(4,string.length-4) + string.slice(0,4) 
    }
}

console.log(swap4("TechGlobal"))


console.log(`\n--------------- Task Ten ---------------\n`);

function swapFirstLastWord(string) {
    let newString = string.trim()
    let arr = newString.split(' ')
    if (arr.length < 2) {
        return ''
    } else {
        let firstWord = arr[0]
        let lastWord = arr.at(-1)
      
        let middle = arr.slice(1,arr.length -1)
        return `${lastWord} ${middle} ${firstWord}`.replaceAll(',',' ')
    }
}
console.log(swapFirstLastWord('hey bro how are you'))
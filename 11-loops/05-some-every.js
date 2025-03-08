const numbers = [ 1, 2, 3, 4, 5 ]


let flag = true; //assume all numbers are positive


for (const num of numbers) {
    if (num <= 0) flag = false; break;
};
console.log(flag)
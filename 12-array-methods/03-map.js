const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];

console.log(cities.find((x) => x.length === 4))
console.log(cities.findLast((x) => x.length ===6))
console.log(cities.findIndex((x) => x === 'LA'))
console.log(cities.find((x) => x.includes('i')))
console.log(cities.findLast((x) => x.length === 4))

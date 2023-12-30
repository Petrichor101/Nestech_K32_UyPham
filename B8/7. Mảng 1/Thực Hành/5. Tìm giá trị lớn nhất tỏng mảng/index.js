let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0]
for (let i of numbers){
    if (i > max) {
        max = i
    }
}

console.log(max)
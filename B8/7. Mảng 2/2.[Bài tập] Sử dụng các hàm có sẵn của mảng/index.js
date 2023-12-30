// Bài 1

let arr = []
let str = ''
bai1Add = () => {
    let newElement = document.getElementById('el').value
    arr.push(newElement)
    document.getElementById('arr').innerText = arr
}

bai1Del = () => {
    arr = []
    document.getElementById('arr').innerText = arr
}

bai1Main = () => {
    let result = document.getElementById('str')
    for (let i of arr){
        str += ` ${i}`
    }
    result.innerText = str
}

// Bài 2

bai2 = (e) => {
    let number = e.target.value
    let arr = []
    let str = ''
    let result = document.getElementById('result')
    for (let i of number) {
        arr.push(i)
    }

    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0){
            str += '-'
        }
        
    }

    result.innerText = str
}   

// Bài 3

bai3 = (e) => {
    let str = e.target.value
    let arr = str.split(' ')
    let newStr = ''
    for (let i of arr){
        newStr += i.slice(0,1).toLowerCase() + i.slice(1).toUpperCase() + ' '
    }
    document.getElementById('newStr').innerText = newStr
}


// Bài 1

bai1 = () => {
    let a = []
    let b = []
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++){
            b[j] = (Math.floor(Math.random()*10))
        }
        a[i] = [...b]
    }
    a.forEach((row, index)=> {
        document.getElementById('b1result').innerHTML += `Row ${index+1}: ${row} <br>`
    })
}

// Bài 2

bai2 = (e) => {
    let str = e.target.value
    let newStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    document.getElementById('b2result').innerText = newStr
}

// Bài 3

bai3 = () => {
    const charArray = ['a', '1', 'b', '2', 'c', '3', '4']
    let count = 0
    for (let i = 0; i < charArray.length; i++) {
        if (!isNaN(parseInt(charArray[i]))) {
            count++
        }
    }
    document.getElementById('b3arr').innerText = `Mảng được khởi tạo: ${charArray}`
    document.getElementById('b3result').innerText = `Số ký tự trong mảng: $`
}

// Bài 4

bai4 = (e) => {
    document.getElementById('b4result').innerText = `Độ dài của chuỗi: ${e.target.value.length}`
}

// Bài 5

bai5 = (e) => {
    const form = e.target
    const str1 = form.elements['str1'].value
    const str2 = form.elements['str2'].value
    
    document.getElementById('b5result').innerText = str1 == str2 ? '2 chuỗi bằng nhau' : '2 chuỗi không bằng nhau'



    e.preventDefault()
}

// Bài 6

bai6 = (e) => {
    let str = e.target.value
    let strNew = ''
    for (let i = 0; i < str.length; i++){
        strNew += (str[i] == '-') ? '_' : str[i]
    }

    document.getElementById('b6result').innerText = strNew
}
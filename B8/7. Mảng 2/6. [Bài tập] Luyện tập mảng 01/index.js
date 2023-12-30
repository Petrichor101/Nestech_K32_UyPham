// Bài 1 & 2 & 3

bai123 = (e) => {
    let numbers = []
    let count = 0
    let total = 0
    for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random()*100))
    }
    document.getElementById('n').innerText = `Dãy số: ${numbers}`
    numbers.forEach((x) => {count += (x >= 10 ? 1 : 0)})
    document.getElementById('ncount').innerText = `Có ${count} số lớn hơn hoặc bằng 10`
    document.getElementById('nmax').innerText = `${Math.max(...numbers)} là số lớn nhất`

    numbers.forEach((x) => {total += x})

    document.getElementById('navg').innerText = `Trung bình giá trị của các dãy số là ${total / 10}`
}

// Bài 4
let b4arr = []


bai4 = (e) => {
    b4arr.push(isNaN(parseFloat(e.target.value)) ? 0 : parseFloat(e.target.value))
    document.getElementById('narray').innerText = b4arr
    let revArr = [...b4arr].reverse()

    document.getElementById('revarray').innerText = revArr
}

resetb4 = () => {
    b4arr = []
    document.getElementById('narray').innerText = b4arr
    document.getElementById('revarray').innerText = []

}

// Bài 5

bai5 = (e) => {
    let str = e.target.value
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '-'){
            if (!isNaN(parseFloat(str[i + 1]))){
                count += 1
            }
        }
    }

    document.getElementById('negav').innerText = count > 0 ? `Có ${count} số nguyên âm trong chuỗi` : 'Không có số nguyên âm trong chuỗi'
}

// Bài 6

bai6 = () => {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random()*20)
    }
    let randomInt = Math.floor(Math.random()*20)
    document.getElementById('randomInts').innerText = arr
    document.getElementById('randomInt').innerText = randomInt
    document.getElementById('isIncluded').innerText = `is ${arr.includes(randomInt) ? '' : 'not'} in the array`
}

// Bài 7


let radarr = []


bai7init = () => {
    for (let i = 0; i < 10; i++) {
        radarr[i] = Math.floor(Math.random()*100)
    }
    document.getElementById('radarr').innerText = radarr
}

bai7 = (e) => {
    let n = parseFloat(e.target.value)
    console.log(radarr.includes(n))

    let include

    if (radarr.includes(n)){
        include = true
        for (let i = radarr.indexOf(n); i < radarr.length - 1; i++) {
            radarr[i] = radarr[i + 1]
            
        }
        radarr[radarr.length - 1] = 0
    }

    console.log(radarr)

    document.getElementById('resultRadArr').innerText = include ? `Mảng sau khi số trên đã được xóa: ${radarr}` : `Số trên không có trong mảng`
    
}

// Bài 8

bai8 = () => {
    let arr = []
    let rearrangedArr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random()*100)
    }
    document.getElementById('ogArr').innerText = `Mảng ban đầu: ${arr}`


    for (let i = 0; i < 10; i++) {
        rearrangedArr[i] = Math.max(...arr)
        arr.splice(arr.indexOf(Math.max(...arr)),1)
    }

    document.getElementById('rearrangedArr').innerText = `Mảng sau khi được sắp xếp: ${rearrangedArr}`
}

// Bài 9

bai9 = () => {
    let a = []
    let b = []
    let c = []

    for (let i = 0; i < 10; i++) {
        a[i] = Math.floor(Math.random()*100)
        b[i] = Math.floor(Math.random()*100)
        c[i] = Math.floor(Math.random()*100)
        c[i + 10] = Math.floor(Math.random()*100)
    }

    document.getElementById('arrayA').innerText = `Mảng a: ${a}`
    document.getElementById('arrayB').innerText = `Mảng b: ${b}`
    document.getElementById('arrayC').innerText = `Mảng c: ${c}`
    
    
    for (let i = 0; i < 10; i++) {
        c[i + 20] = parseFloat(`${a[i]}${b[i]}`)
    }

    document.getElementById('arrayCnew').innerText = `Mảng c mới: ${c}`
}
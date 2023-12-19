// Bài 1

bai1 = () => {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)


    console.log(a, b)
    if (a % b == 0){
        document.getElementById('result').innerText = 'a có chia hết cho b'
    } else if (isNaN(a) || isNaN(b)){
        document.getElementById('result').innerText = 'a và b phải là số'
    } else {
        document.getElementById('result').innerText = 'a không chia hết cho b'
    }
}

// Bài 2

bai2 = () => {
    let age = parseInt(document.getElementById('age').value)
    if (age >= 15) {
        document.getElementById('allowed').innerText = 'Được học lớp 10'
    } else if (isNaN(age)) {
        document.getElementById('allowed').innerText = 'Tuổi phải là số nguyên'
    } else {
        document.getElementById('allowed').innerText = 'Chưa được học lớp 10'
    }
}

// Bài 3

bai3 = () => {
    let n = parseFloat(document.getElementById('n').value)
    let result = document.getElementById('comp')
    if (isNaN(n)){
        result.innerText = 'Chỉ nhập số'
    } else if (n > 0) {
        result.innerText = `Số ${n} lớn hơn 0`
    } else if (n < 0) {
        result.innerText = `Số ${n} bé hơn 0`
    } else {
        result.innerText = 'Đấy là số 0 mà...'
    }
}

// Bài 4

bai4 = (e) => {
    let a = parseFloat(document.getElementById('x').value)
    let b = parseFloat(document.getElementById('y').value)
    let c = parseFloat(document.getElementById('z').value)
    let result = document.getElementById('max') 
    console.log(a, b, c)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerText = 'a, b và c phải là số'
    } else {
        result.innerText = 'Số lớn nhất là ' + Math.max(a, b, c)
    }
    e.preventDefault()
}

// Bài 5

var stdList = []

bai5 = (e) => {
    let inputs = e.target.querySelectorAll('.stdInput')
    let std = {
        name: inputs[0].value,
        kt: parseFloat(inputs[1].value),
        ghk1: parseFloat(inputs[2].value),
        chk1: parseFloat(inputs[3].value),
    }

    std['dtb'] = ((std.kt * 4 + std.ghk1 * 2 + std.chk1 * 3) / 9).toFixed(2)

    if (isNaN(std['kt']) || isNaN(std['ghk1']) || isNaN(std['chk1'])){
        document.getElementById('ALERT').innerText = "CHỈ ĐƯỢC NHẬP SỐ"
    } else if (!(0 <= std['kt'] && std['kt'] <= 10) || !(0 <= std['ghk1'] && std['ghk1'] <= 10) || !(0 <= std['chk1'] && std['chk1'] <= 10)) {
        document.getElementById('ALERT').innerText = "Điểm không được bé hơn 0 hay lớn hơn 10"
    } else {
        document.getElementById('ALERT').innerText = ""
        stdList = [...stdList, std]
        stdList.sort((a, b) => b.dtb - a.dtb)
        bxh()

    }



    console.log(stdList)
    

    e.preventDefault()
}

bxh = () => {
    let bxhTable = document.getElementById('bxh')
    while (bxhTable.rows.length > 2) {
        bxhTable.deleteRow(2);
    }

    stdList.forEach((obj, index) => {
        var row = bxhTable.insertRow(-1)
        var cellRank = row.insertCell(0)
        var cellName = row.insertCell(1)
        var cellScore = row.insertCell(2)

        cellRank.innerHTML = index + 1
        cellName.innerHTML = obj.name
        cellScore.innerHTML = obj.dtb

        row.addEventListener('mouseover', handleMouseOver)
        row.addEventListener('mouseout', handleMouseOut)
    })
}

handleMouseOver = (e) => {
    var index = e.target.parentNode.childNodes[0].innerText - 1
    var box = document.getElementById('infoBox')
    box.innerHTML = `Tên: ${stdList[index].name}<br>Điểm KT: ${stdList[index].kt}<br>Điểm thi giữa HKI:${stdList[index].ghk1}<br>Điểm thi cuối HKI:${stdList[index].chk1}`
    box.style.display = 'block'
    box.style.left = e.pageX + 'px'
    box.style.top = e.pageY + 'px'
    
}

handleMouseOut = (e) => {
    var box = document.getElementById('infoBox')
    box.style.display = 'none'
}


// Bài 6
bai6 = (e) => {
    let inputs = e.target.getElementsByTagName('INPUT')
    let ds = parseInt(inputs[0].value)
    let dgb = parseInt(inputs[1].value)
    let hh = parseFloat(inputs[2].value) / 100

    if (isNaN(ds) || isNaN(dgb) || isNaN(hh)) {
        document.getElementById('hh').innerText = 'CHỈ ĐIỀN SỐ'
    } else if ( ds < 0 || dgb < 0 || hh < 0) {
        document.getElementById('hh').innerText = 'CÁC DỮ LIỆU PHẢI LỚN HƠN 0'
    } else {
        document.getElementById('hh').innerText = ds * dgb * hh
    }

    document.getElementById('hh')
    e.preventDefault()
}

// Bài 7

bai7 = (e) => {
    let inputs = e.target.getElementsByTagName('INPUT')
    let h = parseInt(inputs[0].value)
    let m = parseInt(inputs[1].value)
    let s = parseInt(inputs[2].value)

    let total = (h*60 + m + Math.ceil(s/60)) * 1000

    document.getElementById('tiencuoc').innerText = total
    e.preventDefault()
}
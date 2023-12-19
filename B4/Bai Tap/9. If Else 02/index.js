// Bài 1

ctof = (e) => {
    let c = parseFloat(e.target.value)
    let f = (9/5) * c + 32
    document.getElementById('Fd').value = f.toFixed(2)
}

ftoc = (e) => {
    let f = parseFloat(e.target.value)
    let c = 5/9 * (f - 32)
    document.getElementById('Cd').value = c.toFixed(2)
}

// Bài 2

mtoft = (e) => {
    let m = parseFloat(e.target.value)
    let f = m*3.28084

    console.log(m)

    if (isNaN(m)){
        document.getElementById('ft').value = 'CHỈ NHẬP SỐ'
    } else {
        document.getElementById('ft').value = f.toFixed(2)
    }
}

fttom = (e) => {
    let f = parseFloat(e.target.value)
    let m = f/3.28084
    if (isNaN(f)){
        document.getElementById('m').value = 'CHỈ NHẬP SỐ'
    } else {
        document.getElementById('m').value = m.toFixed(2)
    }
    
}

// Bài 3

bai3 = (e) => {
    let a = parseFloat(e.target.value)
    if (isNaN(a)){
        document.getElementById('sqrArea').innerText = 'CHỈ NHẬP SỐ '
    } else {
        document.getElementById('sqrArea').innerText = 'Diện tích của hình vuông là ' + (a*a)
    }
}

// Bài 4

bai4 = (e) => {
    let a = document.getElementById('length').value
    let b = document.getElementById('width').value
    if (isNaN(a) || isNaN(b)) {
        document.getElementById('rectResult').innerText = 'CHỈ NHẬP SỐ'
    } else if (a <= 0 || b <= 0) {
        document.getElementById('rectResult').innerText = 'ĐỘ DÀI CÁC CẠNH PHẢI LỚN HƠN 0'
        return
    } else {
        document.getElementById('rectResult').innerText = 'Diện tích của hình chữ nhật là ' + (a*b)
    }
    e.preventDefault()
}

// Bài 5

bai5 = (e) => {
    let inputs = e.target.getElementsByTagName('INPUT')
    let a = parseFloat(inputs[0].value)
    let b = parseFloat(inputs[1].value)
    let result = document.getElementById('triS')
    if (isNaN(a) || isNaN(b)) {
        result.innerText = 'CHỈ NHẬP SỐ'
        return
    } else if (a <= 0 || b <= 0) {
        result.innerText = 'ĐỘ DÀI CÁC CẠNH PHẢI LỚN HƠN 0'
        return
    } else {
        result.innerText = 0.5 * a * b
    }
    

    e.preventDefault()
}

// Bài 6 và bài 7

bai6 = (e) => {
    let inputs = e.target.getElementsByTagName('INPUT')
    let a = parseFloat(inputs[0].value)
    let b = parseFloat(inputs[1].value)
    let c = parseFloat(inputs[2].value)
    let result = document.getElementById('x')

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerText = 'CHỈ NHẬP SỐ'
        return
    }

    switch (a){
        case 0:
            result.innerText = 'x = ' + (0-c)/b
            break
        default:
            let delta = b**2 - 4 * a * c
            if (delta < 0) {
                result.innerText = 'Vô nghiệm'
            } else if (delta == 0) {
                result.innerText = 'Nghiệm kép x1 = x2 = ' + (-b / (2*a)) 
            } else if (delta > 0) {
                let x1 = (-b + delta*(1/2)) / (2 * a)
                let x2 = (-b - delta*(1/2)) / (2 * a)
                result.innerHTML = 'x1 = ' + x1.toFixed(5) + '<br>x2 = ' + x2.toFixed(5)
            }
    }
    e.preventDefault()
}

// Bài 8

bai8 = (e) => {
    let age = parseInt(e.target.value)
    let result = document.getElementById('ageResult')
    if (isNaN(age)) {
        result.innerText = 'CHỈ NHẬP SỐ'
        return
    } else if (age > 0 && age < 120) {
        result.innerText = age + ' là tuổi của một người'
    } else if (age < 0 || age > 120) {
        result.innerText = age + ' không phải là tuổi của một người'
    }
    e.preventDefault()
}

// Bài 9
bai9 = (e) => {
    let inputs = e.target.getElementsByTagName('INPUT')
    let a = parseFloat(inputs[0].value)
    let b = parseFloat(inputs[1].value)
    let c = parseFloat(inputs[2].value)
    let result = document.getElementById('isTri')

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerText = 'CHỈ NHẬP SỐ'
        return
    } else if (
        (a + b) > c &&
        (a + c) > b &&
        (b + c) > a &&
        a > 0 && b > 0 && c > 0
    ) {
        result.innerText = 'a, b, c là cạnh của một tam giác'
    } else {
        result.innerText = 'a, b. c không phải là cạnh của một tam giác'
    }

    e.preventDefault()
}

// Bài 10

bai10 = (e) => {
    let kwh = parseFloat(e.target.value)
    let result
    if (isNaN(kwh)) {
        result = 'CHỈ NHẬP SỐ'

    } else if (kwh <= 50){
        result = kwh*1728
    } else if (kwh <= 100) {
        result = (kwh - 50) * 1786 + 50*1728
    } else if (kwh <= 200) {
        result = (kwh - 100) * 2074 + 50*1786 + 50*1728
    } else if (kwh <= 300) {
        result = (kwh - 200) * 2612 + 100*2074 + 50*1786 + 50*1728
    } else if (kwh <= 400) {
        result = (kwh - 300) * 2919 + 100*2612 + 100*2074 + 50*1786 + 50*1728
    } else {
        result = (kwh - 400) * 3015 + 100*2919 + 100*2612 + 100*2074 + 50*1786 + 50*1728
    }

    document.getElementById('giadien').innerText = result
}

// Bài 11

bai11 = (e) => {

}

// Bài 12

bai12 = (e) => {
    let inputs = e.target.getElementsByTagName('INPUT')
    let p = parseFloat(inputs[0].value)  
    let m = parseFloat(inputs[1].value)
    let r = parseFloat(inputs[2].value) / 100
    let result = p*Math.pow(1 + r, m)

    document.getElementById('tonglaisuat').innerText = result.toFixed(2)
    e.preventDefault()
}

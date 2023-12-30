// Bài 1

b1 = (e) => {
    document.getElementById('b1result').innerText = isNaN(parseFloat(e.target.value)**(1/2)) ? '' :`Kết quả bình phương của x là: ${(parseFloat(e.target.value)**(1/2)).toFixed(3)}`
    
}

// Bài 2

b2 = (e) => {
    let r = parseFloat(e.target.value)
    document.getElementById('b2result').innerText = isNaN(r) ? '' :
    `
    Chu vi và diện tích hình tròn bán kính r là: ${(2*r*Math.PI).toFixed(3)} m; ${(r**2*Math.PI).toFixed(3)} m2
    `
}

// Bài 3

b3 = (e) => {
    let n = Math.floor(parseFloat(e.target.value))
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }

    document.getElementById('b3result').innerText = isNaN(n) ? '' : `Giai thừa của ${n} là ${factorial}`
}

// Bài 4

b4 = (e) => {
    if (e.target.value.length > 0) {
        document.getElementById('b4result').innerText = isNaN(e.target.value) ? 'Ký tự đó không phải là số' : 'Ký tự đó là số'
    } else {
        document.getElementById('b4result').innerText = ''
    }
}

// Bài 5

b5 = (e) => {
    let form = e.target
    let a = parseFloat(form.elements['a'].value)
    let b = parseFloat(form.elements['b'].value)
    let c = parseFloat(form.elements['c'].value)

    document.getElementById('b5result').innerText = `Số nguyên bé nhất trong 3 số a, b, c là: ${Math.min(a, b, c)}`
    e.preventDefault()
}

// Bài 6

b6 = (e) => {
    let n = parseFloat(e.target.value)
    document.getElementById('b6result').innerText = `Số ${n} ${n >= 0 ? '' : 'không phải'} là số nguyên dương`
}

// Bài 7

b7 = (e) => {
    let form = e.target
    let a = form.elements['a']
    let b = form.elements['b']

    let c = a.value
    a.value = b.value
    b.value = c
    
    e.preventDefault()
}

// Bài 8

b8 = () => {
    let a = []
    for (let i = 0; i < 10; i++) {
        a[i] = Math.floor(Math.random()*100)
    }

    document.getElementById('b8arr').innerText = a.join('; ')
    document.getElementById('b8rev').innerText = a.reverse().join('; ')

}

// Bài 9

let b9 = []


b9khoitao = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < 10; i++) {
        b9[i] = characters[Math.floor(Math.random()*characters.length)]
    }

    document.getElementById('b9arr').innerText = b9.join('; ')
}

b9tim = (e) => {
    let s = e.target.value
    let matchingChars = b9.filter(function (element) {
    return element == s;
    })

    document.getElementById('b9result').innerText = matchingChars.length > 0 ? matchingChars.length : '-1'

}
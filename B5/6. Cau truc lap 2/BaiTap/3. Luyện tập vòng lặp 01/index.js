// Bài 1

bai1 = () => {
    for (let i = 1; i <= 100; i++) {
        if (i == 99) {
            alert('Đã hoàn thành')
            return
        }
        console.log(i)
    }
}

// Bài 2

bai2 = () => {
    let t = parseFloat(prompt('Nhập nhiệt độ'))
    if (isNaN(t)){
        alert('CHỈ NHẬP SỐ DƯƠNG')
    } else if (t < 20) {
        alert('YÊU CẦU TĂNG NHIỆT ĐỘ')
    } else if (t > 100) {
        alert('YÊU CẦU GIẢM NHIỆT ĐỘ')
    }
}

// Bài 3, 4, 5 

bai345 = () => {
    let fib = [1,1]
    let i = 2
    let total = 0
    while (fib.length < 20) {
        fib[i] = fib[i - 1] + fib[i - 2] 
        console.log(fib)
        i++
    }
    document.getElementById('fibSeq').innerText = fib
    for (let i of fib){
        if (i % 5 == 0){
            document.getElementById('fib/5').innerText = i
            break
        }
    }
    for (let i of fib){
        total += i
    }
    document.getElementById('fibSum').innerText = total
}

// Bài 6

bai6 = () => {
    let num = []
    let total = 0

    for (let i = 0; i < 30; i++) {
        num[i] = 7*i
        total += 7*i
    }
    console.log(num)
    document.getElementById('/7').innerText = num
    document.getElementById('sum').innerText = total
}

// Bài 7

bai7 = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

// Bài 8

bai8 = () => {
    let a = parseFloat(prompt('Nhập số đầu tiên của dãy số'))
    let b = parseFloat(prompt('Nhập số cuối cùng của dãy số'))
    let r = []

    if (isNaN(a) || isNaN(b)) {
        alert('CHỈ NHẬP SỐ')
        return
    }

    for (let i = a; i <= b; i++) {
        r.push(i)
    }

    let pp = r[Math.floor([Math.random()*r.length])]
    let attempt = 1
    let ans

    do {
        if (attempt == 1) {
            ans = parseFloat(prompt('Nhập giá trị muốn đoán'))
        } else if (attempt > 1) {
            ans = parseFloat(prompt(`Còn ${4-attempt} lần thử, nhập giá trị muốn đoán`))
        }
        
        if (ans == pp) {
            alert(`Đáp án là ${pp}!!!`)
        } else if (ans < pp) {
            alert('Số được chọn lớn hơn đáp án của bạn')
        } else if (ans > pp) {
            alert('Số được chọn nhỏ hơn đáp án của bạn')
        }

        if (attempt = 3 && ans != pp) {
            alert('Bạn đã thua, quá gà')
        }

        attempt++
    } while (attempt <= 3 && ans != pp)
}
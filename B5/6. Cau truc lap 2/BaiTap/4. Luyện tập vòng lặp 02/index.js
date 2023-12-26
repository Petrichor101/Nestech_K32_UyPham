// Bài 1

bai1 = () => {
    let fib = [1, 1]
    let outp = [...fib]
    for (let i = 2; fib[fib.length-1] < 100; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
        if (fib[fib.length-1] < 100) {
            outp[i] = fib[fib.length-1]
        }
    }
    document.getElementById('fib').innerText = outp
}

// Bài 2

bai2 = (e) => {
    let n = parseInt(e.target.value)
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
        
    }
    document.getElementById('factorial').innerText = factorial
}

// Bài 3

bai3 = () => {
    for (let i = 1; i <= 5; i++){
        console.log('*'.repeat(i))
    }
    console.log('')
    for (let i = 5; i >= 1; i--) {
        console.log('*'.repeat(i))
    }
        console.log('')
    for (let i = 1; i <= 5; i++) {
        console.log(' '.repeat(5-i) + '*'.repeat(i))
    }
    console.log('')

    for (let i = 5; i >= 1; i--) {
        console.log(' '.repeat(5-i) + '*'.repeat(i))
    }
}

// Bài 4

bai4 = () => {
    let height = 5
    let width = 10
    for (var i = 0; i < height; i++) {
        var row = ''
        for (var j = 0; j < width; j++) {
            if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
                row += '* '
            } else {
                row += '  '
            }
        }
        console.log(row)
    }
}


// Bài 6
bai6 = () => {
    let x = 9
    let y = 6
    for (let row = 0; row < y; row++) {
        let line = '';
        for (let col = 0; col < x; col++) {
            if ((row == 0 && (col == 2 || col == 6)) ||
                (row == 1 && (col == 0 || col == 4 || col == 8)) ||
                (row == 2 && (col == 1 || col == 7)) ||
                (row == 3 && (col == 2 || col == 6)) || 
                (row == 4 && (col == 3 || col == 5)) ||
                (row == 5 && (col == 4))) {
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
    }
}

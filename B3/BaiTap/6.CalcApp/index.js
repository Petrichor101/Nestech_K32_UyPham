calc = (cal) => {
    let result
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    a = parseFloat(a)
    b = parseFloat(b)
    switch (cal){
        case 1:
            result = a + b
            break
        case 2:
            result = a - b
            break
        case 3:
            result = a * b
            break
        case 4:
            result = a / b
            break
    }
    document.getElementById('result').value = result
}
// Bài 1
bai1 = () => {
    let num
    let total = 0;
    while (num != -1) {
        num = parseInt(prompt("Enter a number:"))
        total += num;
    }
    alert(total)
}

// Bài 2

bai2 = () => {
    let i = 0
    while (i < 100) {
        document.write("<hr width = " + i + "%>")
        i++
    }
}
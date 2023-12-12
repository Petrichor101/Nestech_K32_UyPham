//Bai 1
bai1 = () => {
    var i = 10;
    var f = 20.5;
    var b = true;
    var s = "Hà Nội";
    document.write('i = ' + i)
    document.write('<br/>')
    document.write('f = ' + f)
    document.write('<br/>')
    document.write('b = ' + b)
    document.write('<br/>')
    document.write('s = ' + s)
}


//Bai 2

bai2 = () => {
    let width = 20
    let height = 10
    let area = width * height
    document.write('<br/>')
    document.write('Area = ' + area)
}


//Bai 3
bai3 = () => {
    let a, b
    a = parseInt(prompt("Enter the first integer (a):"));
    b = parseInt(prompt("Enter the second integer (b):"));

    if (isNaN(a) || isNaN(b)){
        alert("Invalid input")
    } else (
        alert(
            (a % b == 0) ? `b=${b} is a multiple of a=${a}` : `b=${b} is not a multiple of a=${a}`
        )
    )
}

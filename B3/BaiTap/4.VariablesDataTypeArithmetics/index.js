// Bài 1
averageScore = (e) => {
    let vl = parseFloat(document.getElementById('vl').value)
    let hh = parseFloat(document.getElementById('hh').value)
    let sh = parseFloat(document.getElementById('sh').value)

    if ((isNaN(vl) || isNaN(hh) || isNaN(sh))) {
        alert("Điểm không hợp lệ, vui lòng chỉ nhập số từ 0.0 - 10.0")
    }

    console.log(vl, hh, sh)

    let avg = (vl + hh + sh) / 3
    document.getElementById('avg').value = avg.toFixed(2)
    e.preventDefault()
}

// Bài 2

ctof = (e) => {
    let c = parseFloat(document.getElementById("c").value)
    let f = (9/5) * c + 32
    document.getElementById('f').value = f.toFixed(2)
}

ftoc = (e) => {
    let f = parseFloat(document.getElementById("f").value)
    let c = 5/9 * (f - 32)
    document.getElementById('c').value = c.toFixed(2)
}

// Bài 3 & 4

calc = (e) => {
    let r = parseFloat(e.target.value)
    document.getElementById('p').value = (2*r*Math.PI).toFixed(2)
    document.getElementById('s').value = (r**2*Math.PI).toFixed(2)
}
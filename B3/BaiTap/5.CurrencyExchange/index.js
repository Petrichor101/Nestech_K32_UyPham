vndtousd = (e) => {
    let vnd = e.target.value
    document.getElementById('usd').value = (vnd/24270.00).toFixed(2)
}

usdtovnd = (e) => {
    let usd = e.target.value
    document.getElementById('vnd').value = (usd*24270.00).toFixed(2)
}
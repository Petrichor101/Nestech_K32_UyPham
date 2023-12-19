days = (e) => {
    let month = parseInt(e.target.value)

    let days = {
        1: '31',
        2: '28 or 29',
        3: '31',
        4: '30',
        5: '31',
        6: '30',
        7: '31',
        8: '31',
        9: '30',
        10: '31',
        11: '30',
        12: '31'
    }

    document.getElementById('d').innerText = days[month] + ' days'
}
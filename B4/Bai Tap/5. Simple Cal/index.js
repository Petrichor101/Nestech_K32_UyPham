const buttons = document.querySelectorAll('button');

function handleMouseOver(event) {
    event.target.style.backgroundColor = '#B8B8B8'
}

function handleMouseLeave(event) {
    event.target.style.backgroundColor = 'white'
}

buttons.forEach(button => {
    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('mouseleave', handleMouseLeave);
});

let usrFunc = ''
let bgFunc = ''
let calcScreen = document.getElementById('screen')

clear = () => {
    usrFunc = ''
    bgFunc = ''
}

cal = () => {
    result = eval(bgFunc)
    usrFunc = result
}

handleClick = (e) => {
    let key = e.target.value
    let text = e.target.innerText

    switch (key) {
        case 'clear':
            clear()
            break
        case '=':
            cal()
            break
        default:
            usrFunc += text
            bgFunc += key
    }

    calcScreen.innerText = usrFunc
}
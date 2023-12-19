let x = window.innerWidth
let y = window.innerHeight
let button = document.getElementById('no')

run = (e) => {
    let randomLeft = Math.random()*x; 
    let randomTop = Math.random()*y

    button.style.transform = `translate(${randomLeft}px, ${randomTop}px)`;
    e.preventDefault()

    
}
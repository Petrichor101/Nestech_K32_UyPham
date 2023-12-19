let imgObj


init = () => {
    imgObj = document.getElementById('myImg')
    imgObj.style.position = 'absolute'
	imgObj.style.left = '0px'
}

moveUp = () => {
    imgObj.style.top = parseInt(imgObj.style.left) + (-10) + 'px';
}

moveLeft = () => {
    imgObj.style.left = parseInt(imgObj.style.left) + (-10) + 'px';
}

moveRight = () => {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

moveDown = () => {
    imgObj.style.top = parseInt(imgObj.style.left) + 10 + 'px';
}


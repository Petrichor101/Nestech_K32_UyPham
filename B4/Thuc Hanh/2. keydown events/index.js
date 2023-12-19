  let element = document.getElementById('nobita');

  moveSelection = (event) => {
    const currentLeft = parseInt(element.style.left);
    const currentTop = parseInt(element.style.top);
    const windowWidth = window.innerWidth;
    const elementWidth = element.clientWidth;

    switch (event.code) {
      case "ArrowLeft":
        element.style.left = (currentLeft - 5) + 'px';
        checkBoundaryLeft();
        console.log(event.code);
        break;
      case "ArrowRight":
        element.style.left = (currentLeft + 5) + 'px';
        checkBoundaryRight();
        console.log(event.code);
        break;
      case "ArrowUp":
        element.style.top = (currentTop - 5) + 'px';
        console.log(event.code);
        break;
      case "ArrowDown":
        element.style.top = (currentTop + 5) + 'px';
        console.log(event.code);
        break;
    }
  }

  checkBoundaryLeft = () => {
    const currentLeft = parseInt(element.style.left);

    if (currentLeft + element.clientWidth < 0) {
      // If moved beyond the left boundary, reset to the right
      element.style.left = (window.innerWidth - 5) + 'px';
    }
  }

  checkBoundaryRight = () => {
    const currentLeft = parseInt(element.style.left);
    const windowWidth = window.innerWidth;

    if (currentLeft > windowWidth) {
      // If moved beyond the right boundary, reset to the left
      element.style.left = '0px';
    }
  }

  init = () => {
    window.addEventListener('keydown', moveSelection);
  }

  init();
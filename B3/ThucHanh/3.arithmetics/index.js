initialize = () => {
    let width 
    let height
    let area

    width = parseInt(prompt("Enter the width:"))
    height = parseInt(prompt("Enter the height:"))
    if (isNaN(width) || isNaN(height)){
        alert("Invalid input")
    } else {
        area = width * height
        document.write("Width: " + width + "<br>")
        document.write("Height: " + height + "<br>")
        document.write("The area is: " + area)
    }
}
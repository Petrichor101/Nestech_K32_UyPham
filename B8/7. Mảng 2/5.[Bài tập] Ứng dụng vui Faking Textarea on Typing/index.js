let text = 'TÔI BỊ GAY!!!'
const input = document.getElementById('message');
const key = /^[^\b]$/g

main = (e) => {

    
    let currentValue = input.value;
    currentValue = currentValue.slice(0, -1);
    input.value = currentValue;

    e.target.value = text.slice(0, e.target.value.length + 1)

    if (e.target.value.length == 1 && e.data == null) {
        e.target.value = ''
    } 

}


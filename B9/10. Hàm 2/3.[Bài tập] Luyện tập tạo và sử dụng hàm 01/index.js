// Bài 1

alertMessage = () => {
    alert('Xin Chào')
}

// Bài 2

bai2 = (e) => {
    alert(parseFloat(e.target.value) + 1)
}

// Bài 3

bai3 = (e) => {
    let form = e.target
    let n1 = parseFloat(form.elements['no1'].value)
    let n2 = parseFloat(form.elements['no2'].value)

    alert(n1 > n2 ? 'Số thứ nhất lớn hơn số thứ 2' : `Tổng của hai số là ${n1 + n2}`)

    console.log(n1)
    e.preventDefault()
}

// Bài 4

function addNumbers() {
    alert(result)
    firstNum = 4;
    secondNum = 8;
    sum = firstNum + secondNum;
    alert(sum)

    return sum;
}

// Bài 5
const starArray = ['Polaris', 'Aldebaran', 'Deneb', 
                    'Vega', 'Altair', 'Dubhe', 'Regulus']
                    
const constellationArray = ['Ursa Minor', 'Taurus', 'Cygnus', 
                    'Lyra', 'Aquila', 'Ursa Major', 'Leo']

bai5 = () => {
    let star = prompt('Nhập tên của một ngôi sao')
    let refinedStar = ''

    for (let i of star.split(' ')){
        refinedStar += `${i.slice(0,1).toUpperCase()}${i.slice(1).toLowerCase()} `
    }
    refinedStar = refinedStar.trimEnd()
    alert(starArray.includes(refinedStar) ? `Tên chòm sao tương ứng: ${constellationArray[starArray.indexOf(refinedStar)]}` 
    : 'Không tìm thấy tên chòm sao tương ứng')
}
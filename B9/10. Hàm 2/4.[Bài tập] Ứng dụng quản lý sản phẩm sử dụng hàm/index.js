let productList = []

addProduct = (e) => {
    
    let product = e.target.elements['newProduct']

    if (product.value != ''){
        productList.push(product.value)
        listRenderer()
    }
    
    product.value = ''
    e.preventDefault()

    return ''

}

validateInput = (e) => {
    if (e.target.value == '') {
        document.getElementById('addProductButton').disabled = true
    } else {
        document.getElementById('addProductButton').disabled = false
    }
}

handleDelete = (e) => {
    productList.splice(e.target.id, 1)
    listRenderer()
}

handleEdit = (e) => {
    let newName = prompt("Enter the product's new name: ")
    productList[e.target.id] = newName
    listRenderer()
}

listRenderer = () => {
    let productListElement = document.getElementById('productListElement')
    productListElement.innerHTML = ''
    document.getElementById('productLabel').innerText = productList.length >= 1 ? 'Name' : ''
    document.getElementById('quantity').innerText = productList.length >= 1 ? `Quantity: ${productList.length}` : ''

    productList.forEach((product, index) => {
        let row = document.createElement('div')
        let name = document.createElement('div')
        let editButton = document.createElement('button')
        let delButton = document.createElement('button')

        editButton.innerText = 'Edit'
        editButton.id = index
        editButton.addEventListener('click', handleEdit)

        delButton.innerText = 'Delete'
        delButton.id = index
        delButton.addEventListener('click', handleDelete)

        name.innerText = product
        name.className = 'productName'

        row.style.backgroundColor = index % 2 == 0 ? 'white' : 'lightgrey'
        row.className = 'container'

        row.append(name, editButton, delButton)
        productListElement.append(row)
    })
}

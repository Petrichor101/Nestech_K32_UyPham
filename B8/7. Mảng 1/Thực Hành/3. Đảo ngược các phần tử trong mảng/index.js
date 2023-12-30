reverse = () => {
    let arr = [-3,5,1,3,2,10]
    console.log(arr)
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr[i] = arr[arr.length - 1 - i]
    }
    console.log(newArr)
}
isPalindrome = (e) => {
    let og = e.target.value
    let rv = og.split('').reverse().join('')
    document.getElementById('result').innerText = `${og} is ${og == rv ? '' : 'not'} Palindrome`
}
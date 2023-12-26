var numbers = parseInt(prompt("Nhập số lượng số nguyên tố cần in ra:"));
var count = 0;
var N = 2;
while (count < numbers) {
  var isPrime = true
  for (var i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      isPrime = false
      break
    }
  }
  if (isPrime) {
    console.log(N)
    count++
  }
  N++
}

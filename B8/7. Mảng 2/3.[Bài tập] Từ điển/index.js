const en = [
  "apple",
  "book",
  "cat",
  "dog",
  "elephant",
  "flower",
  "guitar",
  "house",
  "ice cream"
]

const vi = [
  "quả táo",
  "sách",
  "con mèo",
  "con chó",
  "con voi",
  "bông hoa",
  "đàn guitar",
  "ngôi nhà",
  "kem"
];


main = (e) => {
    let word = e.target.value.toLowerCase()
    let index = en.findIndex(x => x == word)
    let result = document.getElementById('vi')
    if (index == -1) {
        result.innerText = "Không có trong từ điển"
    } else (
        result.innerText = vi[index]
    )
    
}

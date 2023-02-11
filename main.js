let wordsArr
let searchInput = document.getElementById("searchInput"),
    description = document.getElementById("description")
fetch('words.json')
    .then((response) => response.json())
    .then((data) => wordsArr = data);

function search() {
    for (let i of wordsArr) {
        if (i.word.toLowerCase() == searchInput.value.toLowerCase()) {
            console.log(i.description)
            description.innerHTML = i.description
            return
        }
    }
    description.innerHTML = "Ничего не найдено :("
}
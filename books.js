const input = document.getElementById('addInput')

console.log(input)
document.getElementById('addButton').addEventListener('click', sendRequest)

function sendRequest() {
    const name = input.value
    console.log(name)
    let url = `https://www.googleapis.com/books/v1/volumes?q=${name}`

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data.items)
            const ul = document.querySelector('#list')

            const html = data.items.map(function (item) {
                return `
<img src="${item.volumeInfo.imageLinks.smallThumbnail}"> 
<li>
<h3>${item.volumeInfo.title} </h3> 
<p> Автор: </p>${(item.volumeInfo.authors[0])}
</li>`
            })

            ul.insertAdjacentHTML('afterbegin', html.join(' '))
        })

}

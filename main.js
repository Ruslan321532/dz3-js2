const menu = document.querySelector('.menu')
fetch(`https://fakestoreapi.com/products`)
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        menu.innerHTML += `
            <div class="all__content">
            <img src="${item.image}" alt="">
            <h2 class = 'card_title'>${item.title}</h2>
            <p class ="card__category">Категория: ${item.category}</p>
            <p class ="card__price">цена: ${item.price}</p>
            <p class ="card__rating">Рейтинг: ${item.rating.rate}</p>
            </div>
        `
    })
})
menu('all')

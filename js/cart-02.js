window.addEventListener("click", (event) => {
    // Находим обертку для элементов в нашей корзине
    const productWrapperInCart = document.querySelector('.cart-wrapper');

    //находим кнопку по которой кликнули
  if (event.target.hasAttribute('data-cart')) {
    //находим ближайшего родителя данной кнопки чтобы получить данные из конкретной карточки
    const card = event.target.closest('.card');

    // const img = card.querySelector('.product-img');
    // const title = card.querySelector('.item-title');
    // const count = card.querySelector('.text-muted');
    // const weight = card.querySelector('price__weight');

    //собираем данные о товаре в объект
    const product = {
        id: card.dataset.id,
        imgSrc: card.querySelector('.product-img').getAttribute('src'),
        title: card.querySelector('.item-title').innerText,
        itemsInBox: card.querySelector('[data-items-in-box]').innerText,
        weight: card.querySelector('.price__weight').innerText,
        price: card.querySelector('.price__currency').innerText,
        counter: card.querySelector('[data-counter]').innerText,
    }
    // Проверяем есть ли товар в корзине. Запрашиваем наличае товара по id

const itemInCart = productWrapperInCart.querySelector(`[data-id="${product.id}"]`);

if (itemInCart) {    
    const countInCart = itemInCart.querySelector('[data-counter]');
    countInCart.innerText = parseInt(countInCart.innerText) + parseInt(product.counter) ;
} else {
    // Собираем представление выбранного товара в корзину. Используем интерполяцию. В обратных кавычках собираем код HTML а вместо значений подставляем в ${.........} переменные
    const cardItemHTML = `<div class="cart-item" data-id=${product.id}>
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src="${product.imgSrc}" alt="${product.title}">
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${product.title}</div>
            <div class="cart-item__weight">${product.itemsInBox}/${product.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${product.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${product.price}</div>
                </div>

            </div>
            <!-- // cart-item__details -->

        </div>
    </div>
</div>`;

productWrapperInCart.innerHTML += cardItemHTML;

// Либо через productWrapperInCart.insertAdjacentHTML('beforeend', cardItemHTML) первый аргумент показывает куда вставлять в элемент кусок HTML кода, второй аргумент сам код. Такой синтаксис более гибкий. Можно поставить код в начало, конец afterbegin afterend beforbegin beforeend
}
    
  }
  //Отображение содержание корзины. Если там что-то есть то не отображаем
  toggleCartStatus();
});

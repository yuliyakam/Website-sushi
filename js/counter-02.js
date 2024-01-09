window.addEventListener("click", (event) => {
  // event.target.dataset.action - event.target возвращает объект на котором кликнули. dataset - обращается к дата атрибуту этого элемента. В разметке html есть два елемента содержащих префикс action:
  // div class="items__control" data-action="minus" и div class="items__control" data-action="plus" поэтому при клике по таким элементам в консоль выводиться "minus" и "plus"
  // if (event.target.dataset.action) {
  // console.log(event.target.dataset.action);}

  // if (event.target.dataset.action === 'plus') {
  //     console.log('push plus');
  // }
  // if (event.target.dataset.action === 'minus') {
  //     console.log('push minus');
  // }
  let counter;
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Находим родителя элемента на котором был клик с классом counter-wrapper
    const counterWrapper = event.target.closest(".counter-wrapper");
    // По родителю находим ребенка с дата атрибутом data-counter
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    ++counter.innerText;
  }
    // Если при значении кол-ва товаров = 1 пользователь кликает на минус, то в корзине удаляется выбранный до этого товар   
  if (
    event.target.dataset.action === "minus" &&
    parseInt(counter.innerText) > 1
  ) {
    --counter.innerText;
  } else  if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
    event.target.closest('.cart-item').remove();
  }
  toggleCartStatus();

});

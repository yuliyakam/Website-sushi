function toggleCartStatus() {
    //получаем обертку в корзине над всеми товарами. Если внутри нет вложений, те длина массивоподобной коллекции дом эл-в у этого узла = 0 artWrapper.children.length
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyInfo =  document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    const totalPrice = document.querySelector('.total-price');
    const sumOfDelivery = document.querySelector('.delivery-cost');


   
if (cartWrapper.children.length > 0) {
//    cartEmptyInfo.style = "display: none";
   // тк в классах прописан класс none который работает аналогично, то мы можем добавлять нашей обертке data-cart-empty видимость за счет этого класса
cartEmptyInfo.classList.add("none");
orderForm.classList.remove("none");
calcTotalPriceAndDelivery();

} else {
//    cartEmptyInfo.style = "display: block";
cartEmptyInfo.classList.remove("none");
orderForm.classList.add("none");
calcTotalPriceAndDelivery();
totalPrice.innerText = 0;
sumOfDelivery.innerText = '';
}
}
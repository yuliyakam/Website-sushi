function calcTotalPriceAndDelivery() {
    const totalPrice = document.querySelector('.total-price');
    const allProductInCart = document.querySelectorAll('.cart-item');
    const sumOfDelivery = document.querySelector('.delivery-cost');
    // стоимомть доставки, если сумма заказа меньше 250
    let delivery = 600;
    let sum = 0;
    allProductInCart.forEach((item) => {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        sum += parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    });
    totalPrice.innerText = sum;
    if (sum > 600) {
        sumOfDelivery.classList.add('free');
        sumOfDelivery.innerText = "бесплатно";
    } else {
        sumOfDelivery.classList.remove('free');        
        sumOfDelivery.innerText = delivery;
        totalPrice.innerText = sum + delivery;        
    }
}
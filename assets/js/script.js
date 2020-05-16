// $(document).ready(function () {
//     $("#cartModal").modal("show");
//   });

/* Source : https://www.youtube.com/watch?v=YeFzkC2awTM */

let removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);

for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener('click', function () {
        this.closest("tr").remove();
        updateCardTotal();
    })
}
/* La fonction remove ne fonctionne pas sur l'icône*/

function updateCardTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartItems = cartItemContainer.getElementsByClassName('cart-item');
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let priceElement = cartItem.getElementsByClassName('cart-price')[0];
        let quantityElement = cartItem.getElementsByClassName('form-control')[0];
        /* console.log(priceElement, quantityElement); => undefined */ 
        let price = parseFloat(priceElement.innerText.replace('€', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName('price')[0].innerText = total + '€';
}
/* La fonction update ne fonctionne pas : "script.js:26 Uncaught TypeError: Cannot read property 'innerText' of undefined"*/



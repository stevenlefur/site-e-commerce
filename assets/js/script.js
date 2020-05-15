// $(document).ready(function () {
//     $("#cartModal").modal("show");
//   });

let removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
        updateCardTotal();
    })
}
/* La fonction remove ne fonctionne pas sur l'icône*/

function updateCardTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartItems = document.getElementsByClassName('cart-item');
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[0];
        let priceElement = cartItem.getElementsByClassName('cart-price')[0];
        let quantityElement = cartItem.getElementsByClassName('form-control')[0];
        let price = parseFloat(priceElement.innerText.replace('€', ''));
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('price')[0].innerText = total;

}
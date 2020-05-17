// $(document).ready(function () {
//     $("#cartModal").modal("show");
//   });

/* Source : https://www.youtube.com/watch?v=YeFzkC2awTM */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
    console.log(removeCartItemButtons);

    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    let quantityInputs = document.getElementsByClassName('form-control');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
}

function removeCartItem() {
    this.closest("tr").remove();
    updateCardTotal();
}

function quantityChanged(event) {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0 ) {
         input.value = 1;
    }
    updateCardTotal();  
}

function updateCardTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartItems = cartItemContainer.getElementsByClassName('cart-item');
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let priceElement = cartItem.getElementsByClassName('cart-price')[0];
        let quantityElement = cartItem.getElementsByClassName('form-control')[0];
        let price = parseFloat(priceElement.innerText.replace('€', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('price')[0].innerText = total + '€';
}
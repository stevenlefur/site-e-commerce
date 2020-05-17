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

    let addToCartButtons = document.getElementsByClassName('add');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
}

function removeCartItem() {
    this.closest("tr").remove();
    updateCardTotal();
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCardTotal();
}

function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement;
    let imgSrc = shopItem.getElementsByClassName('picture')[0].src;
    let product = shopItem.getElementsByClassName('name')[0].innerText;
    let price = shopItem.getElementsByClassName('price')[0].innerText;
    addItemToCart(imgSrc, product, price);
    updateCardTotal();
}

function addItemToCart(imgSrc, product, price) {
    let cartItem = document.createElement('tr');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemContents = `
        <td class="w-25">
        <img src="${imgSrc}"
        class="img-fluid img-thumbnail" alt="Sheep">
        </td>
        <td>${product}</td>
        <td class='cart-price'>${price}</td>
        <td class="qty"><input type="text" class="form-control" id="input1" value="1">
        </td>
        <td>1</td>
        <td>
            <a href="#" class="btn btn-danger btn-sm">
                <i class="fa fa-times"></i>
            </a>
        </td>`
        cartItem.innerHTML = cartItemContents;
    cartItems.append(cartItem);
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
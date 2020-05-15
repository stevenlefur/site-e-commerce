// $(document).ready(function () {
//     $("#cartModal").modal("show");
//   });
  
let removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener('click', function(event){
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove()
    })
}
/* La fonction remove ne fonctionne pas sur l'icône*/
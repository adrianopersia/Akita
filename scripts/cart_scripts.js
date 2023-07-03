document.getElementById("popup").style.display = "none";
document.getElementById("image").addEventListener("click", function(){
    let popupMenu = document.getElementById("popup");
    if (popupMenu.style.display === "none"){
      popupMenu.style.display = "block";
      popupMenu.animate([{opacity:'0.0'}, {opacity:'1.0'}],
        {duration: 300, fill:'forwards'})
    }else{
      popupMenu.style.display = "none";
    }
});

document.getElementById("buttonPopup").addEventListener("click", function() {
    let popupMenu = document.getElementById("popup");
    popupMenu.style.display = "none";
});

/* CART CODE */

let visibleCart = false; //mantiene el estado visible del carrito

if(document.readyState=='loading'){ //carga todos los elementos de la pagina y luego el script
    document.addEventListener('DOMContentLoaded',ready);
}else{
    ready();
}

function ready(){ //funcionalidad a eliminar
    let itemDeleteButton = document.getElementsByClassName('buttonDelete');
    for(let i=0;i<itemDeleteButton.length;i++){
        let button = itemDeleteButton[i];
        button.addEventListener('click',itemDeleteCart);
    }

    //agregamos funcionalidad a sumar item
    let plusButtonQuantity = document.getElementsByClassName('plusQuantity');
    for(let i=0;i<plusButtonQuantity.length;i++){
        let button = plusButtonQuantity[i];
        button.addEventListener('click',plusQuantity);
    }

    //agregamos funcionalidad a restar item
    let restButtonQuantity = document.getElementsByClassName('restQuantity');
    for(let i=0;i<restButtonQuantity.length;i++){
        let button = restButtonQuantity[i];
        button.addEventListener('click',restQuantity);
    }

    //agregamos funcional a los botones Comprar
    let addCartButton = document.getElementsByClassName('button');
    for(let i=0;i<addCartButton.length;i++){
        let button = addCartButton[i];
        button.addEventListener('click',addCartClicked);
    }

    //agregamos funcionalidad al boton pagar
    document.getElementsByClassName('payButton')[0].addEventListener('click',payClicked);
}

function itemDeleteCart(event){ //elimina item
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    //actualizamos total cuando eliminamos
    TotalCartUpdate();
}

function TotalCartUpdate(){
    //seleccionamos contenedores
    let cartContainer = document.getElementsByClassName('carts')[0];
    let cartItems = cartContainer.getElementsByClassName('itemCart');
    let total = 0;

    //recorremos los elementos del carrito
    for(let i=0;i<cartItems.length;i++){
        let item = cartItems[i];
        let elementPrice = item.getElementsByClassName('itemCartPrice')[0];
        console.log(elementPrice);
        //sacamos los simbolos
        let price = parseFloat(elementPrice.innerText.replace('$','').replace('.',''));
        console.log(price);
        let itemQuantity = item.getElementsByClassName('itemCartQuantity')[0];
        let quantity = itemQuantity.value;
        console.log(quantity);
        total = total + (price*quantity);
    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName('cartTotalPrice')[0].innerText = '$' + total.toLocaleString("es") + ',00';
}

//aumentamos en uno la cantidad
function plusQuantity(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let actualQuantity = selector.getElementsByClassName('itemCartQuantity')[0].value;
    console.log(actualQuantity);
    actualQuantity++;
    selector.getElementsByClassName('itemCartQuantity')[0].value = actualQuantity;
    //actualizamos total
    TotalCartUpdate();
}

function restQuantity(event){
    let buttonClicked = event.target;
    let selector = buttonClicked.parentElement;
    let actualQuantity = selector.getElementsByClassName('itemCartQuantity')[0].value;
    console.log(actualQuantity);
    actualQuantity--;

    //controlamos que no sea menor que 1
    if(actualQuantity>=1){
        selector.getElementsByClassName('itemCartQuantity')[0].value = actualQuantity;
        //actualizamos total
        TotalCartUpdate();
    }
    
}

function addCartClicked(event){
    let button = event.target;
    let item = button.parentElement;
    let title = item.getElementsByClassName('productName')[0].innerText;
    console.log(title);
    let price = item.getElementsByClassName('itemCartPrice')[0].innerText;
    let imageSrc = item.getElementsByClassName('imageIndex')[0].src;
    console.log(imageSrc)

    //agrega elementos al carrito. Enviamos por parametro los valores
    addItemCart(title, price, imageSrc);
}

function addItemCart(title, price, imageSrc){
    let item = document.createElement('div');
    item.classList.add = 'item';
    let cartItems = document.getElementsByClassName('itemsCart')[0];

    //controlamos el item que esta ingresando y no se ecuentra en el
    let itemCartName = cartItems.getElementsByClassName('productName');
    for(let i=0;i<itemCartName.length;i++){
        if(itemCartName[i].innerText==title){
            alert("El producto ya se encuentra en el carrito.")
            return;
        }
    }

    let itemCartContent = `
    <div class="itemCart">
        <img src="${imageSrc}" alt="" width="80px">
        <div class="itemCartDetails">
            <span class="itemCartTitle">
                ${title}
            </span>
            <div class="quantitySelector">
                <i class="fa-solid fa-minus restQuantity"></i>
                <input type="text" value="1" class="itemCartQuantity" disabled>
                <i class="fa-solid fa-plus plusQuantity"></i>
            </div>
            <span class="itemCartPrice">${price}</span>
        </div>
        <span class="buttonDelete">
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>
    `
    item.innerHTML = itemCartContent;
    cartItems.append(item);

    //agregamos la funcionalidad eliminar el nuevo producto

    item.getElementsByClassName('buttonDelete')[0].addEventListener('click',itemDeleteCart);

    //agregamos sumar cantidad al nuevo elemento

    let plusButtonQuantity = item.getElementsByClassName('plusQuantity')[0];
    plusButtonQuantity.addEventListener('click', plusQuantity);

    //agregamos restar cantidad al nuevo elemento

    let restButtonQuantity = item.getElementsByClassName('restQuantity')[0];
    restButtonQuantity.addEventListener('click', restQuantity);
}

function payClicked(event){
    alert("Gracias por su compra!");
    //eliminamos todos los elementos del carrito

    let itemsCart = document.getElementsByClassName('itemsCart')[0];
    while(itemsCart.hasChildNodes()){
        itemsCart.removeChild(itemsCart.firstChild);
    }
    TotalCartUpdate();

}
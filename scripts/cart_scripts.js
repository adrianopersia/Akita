let productsInCart = [];
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


window.addEventListener("load", ()=>{
    const productsInCartJsonString = sessionStorage.getItem("cart");
    if(productsInCartJsonString){
        productsInCart = JSON.parse(productsInCartJsonString);
    }
    let amount = 0;
    for(const product of productsInCart){
        createProductCart(product);
        amount += product.price;
    }
    itemCart.innerHTML += `
    <div class="cartTotal">
                    <div class="row">
                        <strong>Total</strong>
                        <span class="cartTotalPrice">
                            $${amount}
                        </span>
                    </div>
                    <button class="payButton" id="payButton">Pagar <i class="fa-solid fa-sack-dollar"></i></button>
                </div>

    `
    const payButton = document.getElementById("payButton");
    payButton.addEventListener("click", ()=> {
        alert("Gracias por su compra!");
        itemCart.style.display = "none"
    })
})

const itemCart = document.getElementById('itemsCart');

const createProductCart = (product) =>{
    const imageIndexContainerCart = document.createElement('div');
    imageIndexContainerCart.className = "itemCart";
    
    const imageIndexCart = document.createElement('img');
    imageIndexCart.className = "cartImage";
    imageIndexCart.style.height = "150px"
    imageIndexCart.src = product.image;

    const containerCart = document.createElement('div');
    containerCart.className = "itemCartDetails";

    const productNameCart = document.createElement("span");
    productNameCart.className = "itemCartTitle";
    productNameCart.style.fontSize = "30px";
    productNameCart.style.fontWeight = "bold";
    productNameCart.innerText = product.name + "\n";

    const divElement = document.createElement("div");
  
    const priceBackgroundCart = document.createElement("span");
    priceBackgroundCart.innerText = `$${product.price}`;
    priceBackgroundCart.className = "itemCartPrice";
    priceBackgroundCart.style.fontSize = "30px";
  
    imageIndexContainerCart.appendChild(imageIndexCart);
    
    divElement.appendChild(productNameCart);
    divElement.appendChild(priceBackgroundCart);
  
    imageIndexContainerCart.appendChild(divElement);
  
    itemCart.appendChild(imageIndexContainerCart);
  }

/* A MEJORAR 


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
        console.log(button);
    }

    //agregamos funcionalidad al boton pagar
    //document.getElementsByClassName('payButton')[0].addEventListener('click',payClicked);
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
*/






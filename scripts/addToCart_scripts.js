const productsInCart = [];
const mainContainer = document.getElementById("mainContainer");


window.addEventListener("load",()=>{
  fillmainContainer();
});

const createProductCart = (product) =>{
  const productCartHTML = 
  `
  <div class="imageIndexContainer">
  <div class="container">
      <img class="imageIndex" src="${product.image}" alt="">
      <a class="button" id="addButton" onclick="${productsInCart.push(JSON.stringify(product))}">Comprar</a>
  </div>
  <div>
      <p class="productName">${product.name}<p>
      <p class="priceBackground">$${product.price}</p></div>
  </div>
  `
  return productCartHTML;
}

const fillmainContainer = () =>{
  mainContainer.innerHTML = '';
  for(const product of Product.getFakeData()){
      mainContainer.innerHTML += createProductCart(product);
  }
  //console.log(mainContainer.innerHTML);
}




function addItemCart(name, price, image){

    createProductCart();

    //agregamos la funcionalidad eliminar el nuevo producto

    item.getElementsByClassName('buttonDelete')[0].addEventListener('click',itemDeleteCart);

    //agregamos sumar cantidad al nuevo elemento

    let plusButtonQuantity = item.getElementsByClassName('plusQuantity')[0];
    plusButtonQuantity.addEventListener('click', plusQuantity);

    //agregamos restar cantidad al nuevo elemento

    let restButtonQuantity = item.getElementsByClassName('restQuantity')[0];
    restButtonQuantity.addEventListener('click', restQuantity);
}


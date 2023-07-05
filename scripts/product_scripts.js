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

document.getElementById("popupproduct").style.display = "none";
document.getElementById("cat").addEventListener("click", function(){
    let popupProduct = document.getElementById("popupproduct");
    if (popupProduct.style.display === "none"){
      popupProduct.style.display = "block";
      popupProduct.animate([{opacity:'0.0'}, {opacity:'1.0'}],
        {duration: 300, fill:'forwards'})
    }else{
      popupProduct.style.display = "none";
    }
});

document.getElementById("buttonPopup").addEventListener("click", function() {
  let popupProduct = document.getElementById("popupproduct");
  popupProduct.style.display = "none";
});

/* CART */

const productsInCart = [];
const mainContainer = document.getElementById("mainContainer");

window.addEventListener("load",()=>{
  fillmainContainer();
});

const createProductCart = (product) =>{
  const imageIndexContainerElement = document.createElement('div');
  imageIndexContainerElement.className = "imageIndexContainer";

  const containerElement = document.createElement('div');
  containerElement.className = "container";
  
  const imageIndexElement = document.createElement('img');
  imageIndexElement.className = "imageIndex";
  imageIndexElement.src = product.image;

  const buttonElement = document.createElement("a");
  buttonElement.className = "button";
  buttonElement.innerText = "Comprar";
  buttonElement.addEventListener("click", ()=>{
    productsInCart.push(product);
    console.table(productsInCart);
  })

  const divElement = document.createElement("div");

  const productNameElement = document.createElement("p");
  productNameElement.innerText = product.name;
  productNameElement.className = "productName"

  const priceBackgroundElement = document.createElement("p");
  priceBackgroundElement.innerText = `$${product.price}`;
  priceBackgroundElement.className = "priceBackground";

  containerElement.appendChild(imageIndexElement);
  containerElement.appendChild(buttonElement);
  
  divElement.appendChild(productNameElement);
  divElement.appendChild(priceBackgroundElement);

  imageIndexContainerElement.appendChild(containerElement);
  imageIndexContainerElement.appendChild(divElement);

  mainContainer.appendChild(imageIndexContainerElement);
}


const fillmainContainer = () =>{
  for(const product of Product.getFakeData()){
      createProductCart(product);
  }
}






    
const products = Product.getFakeData();


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

let productsSuggest = Product.getSuggestions();
let productsFiltered = Array.from(products);
const searchbar = document.getElementById("searchBar");
searchbar.addEventListener("input", function(){
    const filteredValue = searchbar.value;
    productsSuggest = products.getSuggestions().filter(function(e){
      return e.toString().startsWith(filteredValue);
    });
    
})
console.log(productsSuggest);

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
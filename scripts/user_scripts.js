const wrapper = document.querySelector('.wrapperUser');
const loginLink = document.querySelector('.linkLogin');
const registerLink = document.querySelector('.linkRegister');
const userName = document.getElementById("user");
const getEmail = document.getElementById("mail");
const getPass = document.getElementById("pass");

registerLink.addEventListener("click", function() {
  wrapper.classList.add("active");
  const userMap = {
    "name":userName.value,
    "password:":getPass.value,
    "email":getEmail.value 
  }
});

loginLink.addEventListener("click", function() {
  wrapper.classList.remove("active");
});

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


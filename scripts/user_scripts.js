const wrapper = document.querySelector('.wrapperUser');
const loginLink = document.querySelector('.linkLogin');
const registerLink = document.querySelector('.linkRegister');
const userName = document.getElementById("user");
const getEmail = document.getElementById("mail");
const getPass = document.getElementById("pass");
const registerButton = document.getElementById('registerBack');

registerButton.addEventListener("click", async function(){
  const userMap = {
    name: userName.value,
    password: getPass.value,
    email: getEmail.value 
  };
  console.log(userMap);
  const response = await axios.post("http://localhost:8000/api/users/create", {
    data: JSON.stringify(userMap),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response.data);
});

registerLink.addEventListener("click", async function() { //no es secuencial espera a que axios traiga la respuesta
  wrapper.classList.add("active");
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


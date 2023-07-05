const wrapper = document.querySelector('.wrapperUser');
const loginLink = document.querySelector('.linkLogin');
const registerLink = document.querySelector('.linkRegister');
const userName = document.getElementById("user");
const getEmail = document.getElementById("mail");
const getPass = document.getElementById("pass");
const getEmailReg = document.getElementById("mailRegister");
const getPassReg = document.getElementById("passRegister");
const registerButton = document.getElementById('registerBack');

registerButton.addEventListener('click', () => {
  axios.post('http://localhost:8000/api/users/create', {
    name: userName.value,
    email: getEmailReg.value,
    password: getPassReg.value
  })
  .then(function (response) {
    if(response.status == 201){
        alert("Usuario creado con exito, disfrute!");
    }
  })
  .catch(function (error) {
    if(response == error){
      alert("Error al crear usuario, actualice y vuelva a intentarlo.");
    }
  });
})

document.getElementById('loginButton').addEventListener('click',() => {
  axios.post('http://localhost:8000/api/auth/login', {
    email: getEmail.value,
    password: getPass.value
  })
  .then(function (response) {
    console.log(response.data['token']);
    const token = response.data['token']
    if(response.status == 200){
      alert("Bienvenido!");
    }
  })
  .catch(function (error) {
    if(response == error){
      alert("Error al iniciar sesion, actualice y vuelva a intentarlo.")
    }
  });

})

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
    popupMenu.style.display = "none";
});

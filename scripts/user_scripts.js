const wrapper = document.querySelector('.wrapperUser');
const loginLink = document.querySelector('.linkLogin');
const registerLink = document.querySelector('.linkRegister');

registerLink.addEventListener("click", function() {
  wrapper.classList.add("active");
  console.log("mati");
});

loginLink.addEventListener("click", function() {
  wrapper.classList.remove("active");
});

const email= document.getElementById("email");
let userEmail= localStorage.getItem("correo");
console.log(localStorage.getItem("correo"));
email.innerHTML= userEmail;
email.href="myprofile.html";
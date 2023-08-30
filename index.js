document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("autos").addEventListener("click", function () {
    localStorage.setItem("catID", 101);
    window.location = "products.html";
  });
  document.getElementById("juguetes").addEventListener("click", function () {
    localStorage.setItem("catID", 102);
    window.location = "products.html";
  });
  document.getElementById("muebles").addEventListener("click", function () {
    localStorage.setItem("catID", 103);
    window.location = "products.html";
  });
});

function logearse(e) {
  if (!localStorage.getItem("correo") || !localStorage.getItem("pass")) {
    window.location.href = "login.html";
  }
}
logearse();

document.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    localStorage.clear();

    alert("LocalStorage ha sido borrado.");
  }
});

/* floatingInput3
nav-item
function storeEmail() {
  let email = document.getElementsByClassName("floatingInput3").value;
  localStorage.setItem ("correoElectronico", email);
}
let correo = document.getElementById("floatingInput3").value
function storeEmail() {
}
sessionStorage*/

const email= document.getElementById("email");
let userEmail= localStorage.getItem("correo");
console.log(localStorage.getItem("correo"));
email.innerHTML= userEmail;
email.href="myprofile.html";
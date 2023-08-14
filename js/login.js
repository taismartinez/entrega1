
document.getElementById("boton").addEventListener("click", validarRegistro);


//Validar Registro
function validarRegistro(e){
    let correo = document.getElementById("floatingInput3").value;
     let contraseña = document.getElementById("exampleInputPassword1").value;
     const checkbox = document.getElementById("exampleCheck1");
   
     if(correo && contraseña.length >= 6 && checkbox.checked){
       window.open("index.html");
      }else {
        document.getElementById("obligatorio").style.display = 'block';
        document.getElementById("obligatorio1").style.display = 'block';
        document.getElementById("obligatorio2").style.display = 'block';
            e.preventDefault();

      }
       }
    
    

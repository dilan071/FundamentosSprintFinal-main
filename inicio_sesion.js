function iniciarSesion() {

    var cedula = document.getElementById("cedula").value;
    var contrasena = document.getElementById("contrasena").value;

     console.log("Cédula ingresada:", cedula);
     console.log("Contraseña ingresada:", contrasena);

    
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


    var credencialesValidas = false;
    for (var i = 0; i < usuarios.length; i++) {
        var usuario = usuarios[i];
        if (usuario.cedula === cedula && usuario.contrasena === contrasena) {
            credencialesValidas = true;
            break;
        }
    }

    
    if (credencialesValidas) {
        window.location.href = "escritura_texto.html";
    } else {
        alert("Las credenciales son incorrectas. Por favor, inténtalo de nuevo.");
    }

  
    return false;
}

// Función para guardar el texto en localStorage
function guardarTexto() {
    var nuevoTexto = document.getElementById("texto").value.trim();
    if (nuevoTexto === "") {
        alert("Por favor, ingresa un texto para guardar.");
        return;
    }
    var textosGuardados = JSON.parse(localStorage.getItem("textosGuardados")) || [];
    textosGuardados.push(nuevoTexto);
    localStorage.setItem("textosGuardados", JSON.stringify(textosGuardados));
    alert("Texto guardado correctamente.");
    document.getElementById("texto").value = ""; 
}

// Función para buscar el texto en localStorage
function buscarTexto() {
    var textoBusqueda = document.getElementById("busquedaTexto").value.trim().toLowerCase();
    if (textoBusqueda === "") {
        alert("Por favor, ingresa un texto para buscar.");
        return;
    }
    var textosGuardados = JSON.parse(localStorage.getItem("textosGuardados")) || [];

    // Contador de palabras
    var conteoPalabras = 0;

    textosGuardados.forEach(function(texto) {
        var palabras = texto.toLowerCase().split(/\s+/); 
        palabras.forEach(function(palabra) {
            if (palabra === textoBusqueda) {
                conteoPalabras++;
            }
        });
    });

    
    if (conteoPalabras === 0) {
        alert("La palabra \"" + textoBusqueda + "\" no se encontró.");
    } else {
        alert("La palabra \"" + textoBusqueda + "\" se encontró " + conteoPalabras + " veces.");
    }
}


function leerArchivo() {
    var archivoInput = document.getElementById("archivoTxt");
    var archivo = archivoInput.files[0];
    var resultadoDiv = document.getElementById("resultadoArchivo");

    resultadoDiv.classList.add('texto-blanco');

    if (!archivo) {
        resultadoDiv.innerHTML = "<p>Por favor, selecciona un archivo .txt</p>";
        return;
    }

    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        var palabras = contenido.trim().split(/\s+/);
        resultadoDiv.innerHTML = "<p>Número de palabras en el archivo: " + palabras.length + "</p>";
    };
    lector.readAsText(archivo);
}

function verificarPalindromo() {
    var palabra = document.getElementById("palabraPalindrome").value.trim().toLowerCase();
    var resultadoDiv = document.getElementById("resultadoPalindromo");

    resultadoDiv.classList.add('texto-blanco');

    if (palabra === "") {
        resultadoDiv.innerHTML = "<p>Por favor, ingresa una palabra.</p>";
        return;
    }

    var esPalindromo = palabra === palabra.split('').reverse().join('');
    if (esPalindromo) {
        resultadoDiv.innerHTML = "<p>\"" + palabra + "\" es un palíndromo.</p>";
    } else {
        resultadoDiv.innerHTML = "<p>\"" + palabra + "\" no es un palíndromo.</p>";
    }
}


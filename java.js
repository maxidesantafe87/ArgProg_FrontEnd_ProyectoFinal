

function ocultar() {
    document.getElementById('otros').style.display = 'none';
    document.getElementById('botonEstudios').style.display = 'block';
}

function mostrar() {
    document.getElementById('otros').style.display = 'block';
    document.getElementById('botonEstudios').style.display = 'none';
    document.getElementsByClassName("otros")[0].className = "otrosa";
}


function ocultarLaboral() {
    document.getElementById('otrosLaboral').style.display = 'none';
    document.getElementById('botonLaboral').style.display = 'block';
}

function mostrarLaboral() {
    document.getElementById('otrosLaboral').style.display = 'block';
    document.getElementById('botonLaboral').style.display = 'none';
    document.getElementsByClassName("otrosLaboral")[0].className = "otrosLaborala";
}

function ocultarExtra() {
    document.getElementById('otrosExtra').style.display = 'none';
    document.getElementById('botonExtra').style.display = 'block';
}

function mostrarExtra() {
    document.getElementById('otrosExtra').style.display = 'block';
    document.getElementById('botonExtra').style.display = 'none';
    document.getElementsByClassName("otrosExtra")[0].className = "otrosExtraa";
}
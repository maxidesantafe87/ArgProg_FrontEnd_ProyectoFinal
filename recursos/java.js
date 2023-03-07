
function ocultarExtra() {
  
    document.getElementById('otrosExtra').style.display = 'none';
    document.getElementById('botonExtra').style.display = 'block';
    document.getElementById('pieDePagina').style.display = 'block';
    
    
    
    
     
}

function mostrarExtra() {
    
  document.getElementById('pieDePagina').style.display = 'none';
  document.getElementById('otrosExtra').style.display = 'block';
  
    document.getElementById('botonExtra').style.display = 'none';
    
    document.getElementsByClassName("otrosExtra")[0].className = "otrosExtraa";
    
}



function cambioDeColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color;
  }



  function cambioDeColorCV() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    var elementos = document.querySelectorAll('[id="colorCV"]');
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.backgroundColor = color;
    }
  }
  
  function restablecerValoresOriginales() {
    var elementos = document.querySelectorAll('[id="colorCV"]');
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].style.backgroundColor = "#2E89F8DB";
    }
    document.body.style.backgroundColor = "#F5F5F5";
    document.documentElement.style.backgroundColor = "#F5F5F5";
}
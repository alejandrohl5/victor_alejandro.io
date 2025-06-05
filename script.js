let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const intereses = document.querySelectorAll(".interes");

  intereses.forEach(interes => {
    const audio = interes.querySelector("audio");

    interes.addEventListener("mouseover", function() {
      // Detener cualquier audio que esté reproduciéndose
      document.querySelectorAll("audio").forEach(a => {
        if (a !== audio) {
          a.pause();
          a.currentTime = 0;
        }
      });

      // Reproducir el audio correspondiente
      audio.play();
    });

    interes.addEventListener("mouseout", function() {
      // Detener el audio cuando el mouse sale del área del ícono
      audio.pause();
      audio.currentTime = 0;
    });
  });
});



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const desc = btn.nextElementSibling;
    const isVisible = desc.style.display === 'block';
    desc.style.display = isVisible ? 'none' : 'block';
    btn.textContent = isVisible ? 'Ver más' : 'Ocultar';
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const intereses = document.querySelectorAll(".interes");

  intereses.forEach(interes => {
    const audio = interes.querySelector("audio");

    interes.addEventListener("mouseover", function() {
      // Detener cualquier audio que esté reproduciéndose
      document.querySelectorAll("audio").forEach(a => {
        if (a !== audio) {
          a.pause();
          a.currentTime = 0;
        }
      });

      // Reproducir el audio correspondiente
      audio.currentTime = 0; // Reinicia el audio
      audio.play();
    });

    interes.addEventListener("mouseout", function() {
      // Detener el audio cuando el mouse sale del área del ícono
      audio.pause();
      audio.currentTime = 0;
    });
  });
});


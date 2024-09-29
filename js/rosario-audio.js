// Toggle Light/Dark Mode
const themeToggleBtn = document.getElementById('toggleTheme');

// Verificar y aplicar el tema guardado en localStorage al cargar la página
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="bi bi-moon"></i>';  // Ícono de modo oscuro
} else {
    themeToggleBtn.innerHTML = '<i class="bi bi-sun"></i>';  // Ícono de modo claro
}

// Evento para alternar el modo oscuro
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Si el modo oscuro está activo, guarda 'dark' en localStorage, si no, guarda 'light'
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="bi bi-moon"></i>';  // Cambia a ícono de modo oscuro
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="bi bi-sun"></i>';  // Cambia a ícono de modo claro
    }
});

// Toggle Menu (off-canvas)
const menuToggleBtn = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
menuToggleBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('translate-x-full');
});




// Función para actualizar el estado del rosario en localStorage
const updateRosarioStatus = (variable) => {
    localStorage.setItem(`rosario`, variable);
};

// Función para obtener el estado del rosario desde localStorage
const getRosarioStatus = () => {
    let estado = localStorage.getItem('rosario')
    if (estado == undefined){
        updateRosarioStatus("Por rezar")
    }else{
        return estado
    }
};


// funcion para ir a pagina
let redirect = (url) =>{
    window.location.href = url
}


// ver si hay un dia activo de novena o no
const buscarKeyFatima = () => {
    // Itera sobre todos los elementos en localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // Obtiene la clave en el índice i
      // Verifica si la clave contiene la palabra 'fatima'
      if (key.includes('Fatima')) {
        const valor = localStorage.getItem(key); // Obtiene el valor de la clave
        // Verifica si el valor es 'En curso'
        if (valor === 'En curso') {
          return key; // Retorna la clave que cumple con la condición
        }
      }
      else {
        continue
        //return null; // Si no encuentra ningún elemento, retorna null
      }
    }

  };


//Oraciones Rosario
const rosario = {
    gozosos:{
        nombre: "Gozosos",
        audio: "../audio/Rosario-Gozosos.mp3"
    },
    gloriosos:{
        nombre: "Gloriosos",
        audio: "../audio/Rosario-Gloriosos.mp3"
    },
    dolorosos:{
        nombre: "Dolorosos",
        audio: "../audio/Rosario-Dolorosos.mp3"
    },
    luminosos:{
        nombre: "Luminosos",
        audio: "../audio/Rosario-Luminosos.mp3"
    }
}

// funcion para saber qué dia es y qué misterio rezar

let misterioDiario = rosario.gozosos

let getMisterio = () =>{
    let fecha = new Date();
    let dia = fecha.getDay()

    if (dia === 1 || dia === 6) {
        misterioDiario = rosario.gozosos
      } else if (dia === 2 || dia === 5) {
        misterioDiario = rosario.dolorosos
      } else if (dia === 3 || dia === 0) {
        misterioDiario = rosario.gloriosos
      } else if (dia === 4) {
        misterioDiario = rosario.luminosos
      } else {
        misterioDiario = rosario.gozosos
      }
    };

getMisterio()

// poner el misterio en el titulo
let misteryType = document.getElementById('misterio_type')
misteryType.innerHTML = misterioDiario.nombre

let audioContainer = document.getElementById('audio')

let audio = document.createElement('audio')
audio.id = "audioPlayer"
audio.src = misterioDiario.audio
audioContainer.appendChild(audio)

// play button
let playPause = document.getElementById('play-pause')

// boton play
let play = `
<svg width="64px" height="64px" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path d="M5 3.96542C5 2.67502 6.44536 1.86931 7.61162 2.53263L19.0636 9.58012C20.1709 10.207 20.1709 11.793 19.0636 12.4199L7.61162 19.4674C6.44536 20.1307 5 19.325 5 18.0346V3.96542Z"></path>
  </g>
</svg>
`
let pause = `
              <svg width="64px" height="64px" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"></path>
                  <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"></path>
                </g>
              </svg>
`
playPause.innerHTML = play

// Agregar el evento de clic al botón
playPause.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPause.innerHTML = pause; // Cambiar a pausa
    } else {
        audio.pause();
        playPause.innerHTML = play; // Cambiar a play
    }
});

// barra de progreso
let barra = document.getElementById('barra');
// Obtener el contenedor de la barra de progreso
let progressBarContainer = document.getElementById('progressBarContainer');

// Función para actualizar la barra de progreso
function actualizarBarraDeProgreso() {
    const porcentaje = (audio.currentTime / audio.duration) * 100; // Calcular el porcentaje
    barra.style.width = `${porcentaje}%`; // Actualizar el ancho de la barra
}

// Agregar evento de clic al contenedor de la barra de progreso
progressBarContainer.addEventListener('click', (e) => {
    // Calcular la posición del clic en relación al contenedor
    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // Posición del clic en el contenedor
    const porcentaje = (clickX / rect.width); // Porcentaje del clic

    // Establecer el nuevo tiempo del audio
    audio.currentTime = porcentaje * audio.duration; // Mover el tiempo actual del audio
});


// Agregar un evento para actualizar la barra de progreso mientras se reproduce el audio
audio.addEventListener('timeupdate', actualizarBarraDeProgreso);

// Obtener los elementos de tiempo
let currentTimeDisplay = document.getElementById('currentTime');
let totalDurationDisplay = document.getElementById('totalDuration');

// Función para actualizar el tiempo
function actualizarTiempo() {
    // Obtener el tiempo actual y la duración
    let currentTime = audio.currentTime;
    let duration = audio.duration;

    // Actualizar el tiempo actual
    currentTimeDisplay.textContent = formatearTiempo(currentTime);

    // Actualizar la duración total solo una vez
    if (!totalDurationDisplay.textContent.includes(":")) { // Verifica si ya se ha actualizado
        totalDurationDisplay.textContent = formatearTiempo(duration);
    }
}

// Función para formatear el tiempo en minutos:segundos
function formatearTiempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = Math.floor(segundos % 60);
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
}

// Agregar un evento para actualizar el tiempo mientras se reproduce el audio
audio.addEventListener('timeupdate', actualizarTiempo);

// Botón para atrasar
document.getElementById('atrasar').addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10); // Atrasar 10 segundos, no menos de 0
});

// Botón para adelantar
document.getElementById('adelantar').addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10); // Adelantar 10 segundos, no más que la duración total
});



// boton finalizar

/*let botonFinish = document.getElementsByClassName('finish-btn')

for (let boton of botonFinish){
    boton.addEventListener('click', (e) =>{
        let botonClick = e.target
        console.log(botonClick)
        // guardar progreso en local storage
        let finalizado = "Completo"
        updateRosarioStatus(finalizado)
        // funcion para ver donde va
        let novenaDay = buscarKeyFatima()
        if (novenaDay != undefined){
        let day = novenaDay.slice(-1)
        let url = "fatima-" + day + ".html"
        redirect(url)
        }else{
        let url = "../index.html"
        redirect(url)
        }
    })
}*/

// Array de textos que quieres que se lean
let oracionesIniciales = [
    {   oracion: 'Señal de la cruz',
        texto: `Por la señal de la santa cruz, de nuestros enemigos, líbranos señor Dios nuestro,
        En el nombre del Padre, del Hijo, y del Espíritu Santo, Amén`,
        voz: "voz1"
    },
    {   oracion: "Acto de contricción",
        texto: `Señor mío Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío, Por ser Tú quién eres, Bondad infinita, y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido, 
        
        También me pesa que puedes castigarme con las penas del infierno, Ayudada de tu divina gracia, propongo firmemente nunca más pecar, confesarme, y cumplir la penitencia que me fuere impuesta, Amén.

        Señor, ábreme los labios,
        Y mi boca proclamará tu alabanza.

        Dios mío, ven en mi auxilio,
        Señor, date prisa en socorrerme.

        Gloria al Padre, al Hijo, y al Espíritu Santo,
        Como era en el principio, ahora y siempre, por los siglos de los siglos, Amén.`,
        voz: "voz1"
    },
]
// Cargar los misterios del dia en una variable (sale de rosario.js)
let misterios = misterioDiario
console.log(misterios)

// funcion leerTextos

 let leerTextos = () =>{

 }


/*// Función para pausar o resumir la lectura
function togglePlayPause() {
    if (isPlaying) {
        // Si está reproduciendo, pausar
        window.speechSynthesis.pause();
        isPlaying = false;
        playButton.innerHTML = "<i class='bi bi-play'></i>"; // Cambiar el texto del botón
    } else {
        // Si está en pausa, resumir o iniciar
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume(); // Reanudar si estaba en pausa
        } else {
            leerTextos(); // Iniciar desde el principio si no se había iniciado
        }
        isPlaying = true;
        playButton.innerHTML = "<i class='bi bi-pause'></i>"; // Cambiar el texto del botón
    }
}*/

let audioContainer = document.getElementById('audio')
console.log(misterioDiario)

//Oraciones Rosario
const rosarioAudio = {
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

let getAudio = () =>{
    let fecha = new Date();
    let dia = fecha.getDay()

    if (dia === 1 || dia === 6) {
        return rosarioAudio.gozosos
      } else if (dia === 2 || dia === 5) {
        return rosarioAudio.dolorosos
      } else if (dia === 3 || dia === 0) {
        return rosarioAudio.gloriosos
      } else if (dia === 4) {
        return rosarioAudio.luminosos
      } else {
        return rosarioAudio.gozosos
      }
    };

let foundAudio = getAudio()
console.log(foundAudio)

let audio = document.createElement('audio')
audio.id = "audioPlayer"
audio.src = foundAudio.audio
audio.playbackRate = 1.25; // Cambia a 1.25x
audioContainer.appendChild(audio)
audio.controls = true

// Oculta el elemento de audio visualmente
audio.style.display = 'none';

// Iniciar la lectura al hacer clic en el botón play
let playButton = document.getElementById('audio-play');
console.log(playButton)
playButton.addEventListener('click', () => {
console.log('click')
if (audio.paused) {
    audio.play();
    console.log('hizo play')
    playButton.innerHTML = "<i class='bi bi-pause'></i>"; // Cambiar a pausa
} else {
    console.log('aca')
    audio.pause();
    playButton.innerHTML = "<i class='bi bi-play'></i>" // Cambiar a play
}});



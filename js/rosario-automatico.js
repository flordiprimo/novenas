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


// Función para pausar o resumir la lectura
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
}

// Iniciar la lectura al hacer clic en el botón play
let playButton = document.getElementById('audio-play');
playButton.addEventListener('click', () => {
    togglePlayPause();
});



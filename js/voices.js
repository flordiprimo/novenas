// Definir variables para las voces
let vocesDisponibles = [];
let voz1, voz2;
let isPlaying = false; // Controlar el estado de reproducción
let utteranceEnded = true
let indice = 0; // Para controlar qué texto se está leyendo

// Función para obtener las voces disponibles en el sistema
function obtenerVoces() {
    console.log('ejecuta')
    vocesDisponibles = window.speechSynthesis.getVoices();
    console.log(vocesDisponibles)
    
    // Asegurarse de que hay al menos dos voces disponibles
    if (vocesDisponibles.length > 0) {
        // Seleccionar dos voces diferentes (cambia los criterios según tus necesidades)
        voz1 = vocesDisponibles.find(voz => voz.lang.includes('es-US') /*&& voz.name.includes('Google')*/) || vocesDisponibles.find(voz => voz.lang.includes('es-AR') && voz.name.includes('Isabela')) || vocesDisponibles[0];
        voz2 = vocesDisponibles.find(voz => voz.lang.includes('es-ES') && voz.name.includes('Google')) ||vocesDisponibles.find(voz => voz.lang.includes('es-ES')) || vocesDisponibles[1];
        console.log('voces seleccionadas', voz1, voz2)
    }else{
        console.log('no se encontraron voces')
    }
}

// Asegurarse de que las voces estén disponibles
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    console.log('tiene que ejecutar')
    window.speechSynthesis.onvoiceschanged = obtenerVoces;
}
// Intentar cargar las voces de inmediato si ya están disponibles
if (speechSynthesis.getVoices().length > 0) {
    obtenerVoces(function leer(texto, voz) {
    console.log(voz)
// Dividir el texto en fragmentos (oraciones) si es muy largo
const fragmentos = texto.match(/[^.!?]+[.!?]+/g) || [texto]; // Dividir por oraciones
let indiceActual = 0;

function leerFragmento() {
    if (indiceActual >= fragmentos.length) {
        console.log("Lectura completada");
        isPlaying = false;
        return;
    }

    let utterance = new SpeechSynthesisUtterance(fragmentos[indiceActual]);
    utterance.lang = "es-AR"
    //utterance.voice = voz; // Asignar la voz seleccionada
    utterance.rate = 1; // Velocidad fija
    window.speechSynthesis.speak(utterance);

    utterance.onend = () => {
        indiceActual++;
        leerFragmento(); // Leer el siguiente fragmento
    };

    utterance.onerror = (e) => {
        console.error("Error durante la lectura:", e);
    };
}

isPlaying = true;
utteranceEnded = false;
leerFragmento(); // Iniciar la lectura con el primer fragmento
});
}

console.log(vocesDisponibles)

// Función para leer el array de textos en secuencia
function leer(texto, voz) {
    console.log(voz)
// Dividir el texto en fragmentos (oraciones) si es muy largo
const fragmentos = texto.match(/[^.!?]+[.!?]+/g) || [texto]; // Dividir por oraciones
let indiceActual = 0;

function leerFragmento() {
    if (indiceActual >= fragmentos.length) {
        console.log("Lectura completada");
        isPlaying = false;
        utteranceEnded = true
        return;
    }

    let utterance = new SpeechSynthesisUtterance(fragmentos[indiceActual]);
    utterance.voice = voz; // Asignar la voz seleccionada
    utterance.rate = 1; // Velocidad fija
    window.speechSynthesis.speak(utterance);
    utteranceEnded = false

    utterance.onend = () => {
        indiceActual++;
        leerFragmento(); // Leer el siguiente fragmento
    };

    utterance.onerror = (e) => {
        console.error("Error durante la lectura:", e);
    };
}

isPlaying = true;
leerFragmento(); // Iniciar la lectura con el primer fragmento
}

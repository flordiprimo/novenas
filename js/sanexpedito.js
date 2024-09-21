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

// Función para obtener el estado del día de la novena desde localStorage
const getDayStatus = (day) => {
    let status = localStorage.getItem(`novenaSanExpeditoDay${day}`);
    if (status == undefined || null){
        status = 'Por rezar';
        localStorage.setItem(`novenaSanExpeditoDay${day}`, status)
    } else{ 
        return status
    }
};


// Función para actualizar el estado del día en localStorage
const updateDayStatus = (day, status) => {
    localStorage.setItem(`novenaSanExpeditoDay${day}`, status);
};

//Funcion para el mes de la novena
let getMonth = () =>{
    let today = new Date();
    let month = today.getMonth()
    let months = ['Ene', 'Feb','Mar', 'Abr','May', 'Jun','Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    return months[month]
}

// Función para crear las cards de la home
const generateNovenaCards = () => {
    const novenaContainer = document.getElementById('cards-container');

    if (novenaContainer !== null){

    for (let day = 1, fecha = 10; day <= 9; day++, fecha++) { // hay que poner fecha donde empieza la novena en fecha
        const status = getDayStatus(day);
        const card = document.createElement('div');
        card.classList.add('flex', 'justify-between', 'items-center', 'p-4', 'rounded-lg', 'shadow-md', 'card-light', 'dark:card-dark');

        const dayText = document.createElement('p');
        dayText.classList.add('font-serif', 'text-lg');
        dayText.innerHTML = `<strong>Día ${day}</strong><br>${getMonth()} ${fecha}`;

        const statusText = document.createElement('p');
        statusText.classList.add('font-sans', 'text-sm');
        statusText.textContent = status;

        const button = document.createElement('a');
        button.href = `../html/sanexpedito-${day}.html`;  // Cambia el link a la página correspondiente
        button.classList.add('mt-4', 'px-4', 'py-2', 'bg-green-800', 'text-white', 'rounded-lg');
        button.textContent = 'Ir al Día';

        card.appendChild(dayText);
        card.appendChild(statusText);
        card.appendChild(button);

        novenaContainer.appendChild(card);
    }
    }
};

// Inicializar las tarjetas de la novena al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    generateNovenaCards();
});

// Novena oraciones - objeto que contiene todas.

const novenaSanExpedito = [
    {
        intencionInicial: `Oh San Expedito, acudo a ti, implorando tu pronta asistencia, para que tu poderosa intercesión me obtenga de la infinita bondad del Señor, la ayuda que más humildemente solicito de su divina misericordia`,
        invocacion: `Oh Cristo, protégenos mañana y siempre, pero especialmente hoy.`,
        padreNuestro: `Padre nuestro, que estás en el cielo, santificado sea tu nombre. Venga a nosotros tu reino. Hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día. Perdona nuestras ofensas, como nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentación, y líbranos del mal, ¡Amén!. `,
        aveMaria: `Dios te salve María, llena eres de gracia, el señor es contigo, bendita tú eres entre todas las mujeres y bendito es el fruto de tu vientre Jesús.
        
        Santa María, madre de Dios, ruega por nosotros pecadores, ahora y en la hora de nuestra muerte, ¡Amén!.`,
        gloria: "Gloria al padre, al Hijo, y al Espíritu Santo. Como era en un principio, ahora y siempre, por los siglos de los siglos, ¡Amén!.",
        oracionSanExpedito: `
        Glorioso San Expedito, que intercédes por las causas justas y urgentes. Ayúdame en este momento de aflicción. Intercede por mi pedido ante nuestro señor Jesucristo. 

        Tú, que eres el santo de la fidelidad y el coraje, atiende mi pedido... (...).

        Te pido por mi familia, y que descienda la paz. Haz que me una cada día más a Jesús, y a María, su madre, para que pueda gozar un día de su presencia, ¡Amén!
        `,
        oracionDiaria: `Señor, Dios y Padre nuestro, que nos permites invocar a San Expedito como intercesor, especialmente en las causas que consideremos justas y urgentes, te suplicamos que en esta hora de aflicción y desesperanza nos asistas con tu gracia.

        Escucha Señor nuestra oración, llegue a ti nuestro clamor. Ayúdanos a superar este momento difícil. Protégenos de todo lo que pueda perjudicarnos, y asiste a nuestros familiares y amigos.

        Devuélvenos la paz y la tranquilidad, y concédenos la gracia de una pronta y definitiva conversión. Por Jesucristo Nuestro Señor ¡Amén!.
        `,
        gozos:`Acudimos hacia ti,
        San Expedito bendito,
        para aprender de tu vida,
        el seguimiento de Cristo.

        Servir al emperador
        ofrece promesas varias,
        que se convierten en soplo,
        cuando llega la mañana.

        Acudimos hacia ti,
        San Expedito bendito,
        para aprender de tu vida,
        el seguimiento de Cristo.

        Postergar la decisión
        es el consejo del cuervo,
        pero Cristo dice “hoy”,
        al que quiere ser su siervo.

        Acudimos hacia ti,
        San Expedito bendito,
        para aprender de tu vida,
        el seguimiento de Cristo.

        La decisión de Jesús,
        lleva al martirio y la muerte,
        pero desde ellos resurge,
        una vida que es más fuerte.

        Acudimos hacia ti,
        San Expedito bendito,
        para aprender de tu vida,
        el seguimiento de Cristo.

        Eligiendo en nuestra vida,
        servir de verdad a Cristo,
        podemos volvernos libres,
        sin estorbos, expeditos.

        Acudimos hacia ti,
        San Expedito bendito,
        para aprender de tu vida,
        el seguimiento de Cristo.

        Tú que estas gozando 
        la corona de la gloria,
        haz que la verdad y justicia,
        logren pronto la victoria.


        Acudimos hacia ti,
        San Expedito bendito,
        para aprender de tu vida,
        el seguimiento de Cristo.
        `,
        
        oracionFinal: `Señor, Dios nuestro, Padre misericordioso y compasivo, que tanto amas a los seres humanos, que enviaste a tu Hijo unico al mundo, no para juzgarnos sino para salvarnos, concédenos la gracia de una sincera conversión de mente y de corazón.

        Permítenos buscar tu reino y su justicia, sabiendo que todo lo demás, nos vendrá por añadidura.
        
        Tranquiliza nuestro pobre corazón que tantas veces se engaña, pensando que nos hará feliz conseguir algo que no sea tú mismo.
        
        Y que la poderosa intercesión de tu glorioso mártir, San Expedito, que con fe hemos invocado, nos alcance lo que te pedimos, en la medida en que no se oponga a tu santa Voluntad.
        
        Por Jesucristo, Nuestro Señor, ¡Amén!.`
    },
    { //DIA 1
        meditacion: `Primer día: Juventud.

        San Expedito, conserva en mí un corazón joven, motivado por las cosas nuevas que surgen en mi vida diaria. Hoy que recurro a ti con la esperanza de que me ayudes en esta situación que debo resolver urgentemente. Te pido que irradies mi corazón de optimismo, para que pueda descubrir cada día aquellos momentos que son únicos e irrepetibles, como señales de Nuestro Señor.

        Bríndame esa capacidad para descubrir nuevas alternativas, donde hoy solo veo confusión y cansancio. Escucha mi llamado y atiende mi pedido, porque te necesito. Lleva mis oraciones al Señor para que Él haga en mí su voluntad.

        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.
    `,
        lectura: `Lectura del libro del apocalipsis.

        Yo, Juan, hermano de ustedes, con quienes comparto las tribulaciones, el Reino y la espera perseverante en Jesús, estaba exiliado en la isla de Patmos, a causa de la Palabra de Dios y del testimonio de Jesús.
        
        El día del señor fui arrebatado por el Espíritu, y oí detrás de mi una voz fuerte como una trompeta, que decía:. “Escribe en un libro lo que ahora vas a ver, y mándalo a las siete Iglesias:. a Éfeso, a Esmirna, a Pérgamo, a Tiatira, a Sardes, a Filadelfia, y a Laodicea”. 
        
        Me di vuelta para ver de quien era esa voz que me hablaba, y vi siete candelabros de oro, y en el medio de ellos, a alguien semejante a un Hijo de hombre… Al ver esto, caí a sus pies, como muerto, pero él, tocándome con su mano derecha, me dijo:. “No temas: yo soy el Primero y el Último, el Viviente. Estuve muerto, pero ahora vivo para siempre, y tengo la llave de la Muerte y del Abismo… Escribe lo que has visto, lo que sucede ahora, y lo que sucederá en el futuro… los siete candelabros son las siete Iglesias.
        `,
        reflexion: `El correo del emperador romano, en Asia Menor, partía de la capital de Provincia, Éfeso, y recorría por orden las ciudades mencionadas, llevando las órdenes imperiales. 
        
        Muchas veces, éstas agravaban las tribulaciones de los cristianos. Frente a los decretos arbitrarios del emperador terreno, el Cristo que sufrió la muerte envía a sus Iglesias una palabra de consuelo. Puede pronunciarlas porque fue “muerto y ahora vive para siempre” y está presente en medio de su Iglesia.

        Su presencia se hace manifiesta en la celebración del Día del Señor, que congrega a Juan y a sus hermanos, y los hace compartir junto a las tribulaciones, el Reino y la espera perseverante de Jesús.
        
        Hoy sigue manifestándose a nosotros si en medio de las tribulaciones seguimos fieles a su Reino, y perseveramos en la espera de Jesús.
        `,
        compromiso: "Descubro la presencia cotidiana del amor de Dios Padre, aún en las cosas más pequeñas e insignificantes y le pido que me ayude a ser fiel a mis compromisos cristianos.",
        saludos: `Que la Santísima Virgen, pureza perfecta, se digne interceder por nosotros ante su divino Hijo, ¡Amén!.

        Oh Cristo, protégenos mañana y siempre, pero especialmente hoy.

        Oh María, concebida sin pecado, ruega por nosotros que recurrimos a ti.

        San Expedito, patrón de la juventud, ruega por nosotros.
        `,


     },
     { // DIA 2
        meditacion: `Segundo día: Coraje.

        San Expedito, inunda mi corazón de coraje, para afrontar con valentía estos tiempos que hoy me asustan. Guía mis pasos valiente soldado de Cristo.
        
        Desarrolla en mí la virtud de la cual tú eres portador, y hazme fuerte en alma y espíritu para poder seguir adelante en estos días en que temo.
        
        Tú que fuiste un hombre valiente, enséñame a convivir con mis miedos y mis dolores diarios, para que así pueda salir adelante y triunfal ante la adversidad.
        
        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.
        `,
        lectura: `Lectura del libro del Apocalipsis.

        Escribe al Ángel de la Iglesia de Éfeso:. “El que tiene en su mano derecha las siete estrellas, y camina en medio de los siete candelabros de oro, afirma: – Conozco tus oras, tus trabajos y tu constancia. Sé que no puedes tolerar a los perversos; has puesto a prueba a quienes usurpan el título de apóstoles, y comprobaste que son mentirosos. Sé que tienes constancia, y que has sufrido mucho por mi Nombre sin desfallecer. Pero debo reprocharte que hayas dejado enfriar el amor que tenías al comienzo. Fíjate bien desde dónde has caído, conviértete y observa tu conducta anterior. Si no te arrepientes, vendré hacía ti, y sacaré tu candelabro de su lugar preeminente…-.
        
        El que pueda entender, que entiende lo que el Espíritu, dice a las Iglesias: al vencedor, le daré de comer del árbol de la vida, que se encuentra en el Paraíso de Dios.
        
        `,
        reflexion: `En esta carta, como en las que siguen, Cristo señala que conoce los méritos de sus seguidores. Aquí se trata de la constancia en su seguimiento, presente entre los cristianos de Éfeso, y los sufrimientos que por él han tenido que soportar.

        Pero también, señala las defecciones de esa misma Iglesia, y su pérdida del amor primero. Advierte que ello puede acarrearle el alejamiento de la presencia divina:, “sacaré tu candelabro”.

        La carta, se concluye con una promesa de salvación, que en este caso, se trata de una total reincorporación a la vida divina que gozaba Adán antes del pecado.

        También para nosotros, la verdadera vida sólo puede encontrarse en la constancia del seguimiento de Jesús, y en la renovación del amor que le profesamos.
        `,
        compromiso: "Examino mis actos cotidianos y trato de descubrir si los hago por simple rutina, aunque sean buenos, pero sin amor. Trato de descubrir a alguien que está sufriendo cerca de mí, e intento acompañarlo.",
        saludos: `Oh, San Expedito, pase lo que pase, ayúdame a luchar con valentía, pues "negarse a luchar es negarse a la corona".

        Que la Santísima Virgen, con su valor sobrehumano, nos sostenga y guarde. AMÉN.

        Oh Cristo, protégenos mañana y siempre, pero especialmente hoy.

        Oh María, Auxilio de los Cristianos, ruega por nosotros.

        San Expedito, fiel hasta la muerte, ruega por nosotros.
        `,

     },
     { // DIA 3
        meditacion: `Tercer día: Disponibilidad.

        San Expedito, Tú que siempre estás disponible para ayudar en las causas justas y de urgente solución, acude a mis oraciones, y bríndame tu ayuda, hoy que recurro a ti en busca de consuelo, y de soluciones. 
        
        Muéstrame cuál es el camino que debo seguir, para que pueda solucionar los problemas que hoy me surgen. Guía a cada uno de mis pasos, y ábreme el camino ante todas las tempestades. Porque confío en que sólo tú puedes ayudarme. Ven en mi auxilio y muéstrame un rayo de sol que ilumine mi alma.

        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.
        `,
            lectura: `Lectura del libro del Apocalipsis.
            
            Escribe al Ángel de la Iglesia de Esmirna:. “El Primero y el Último, el que estuvo muerto y ha revivido, afirma: – Conozco tu tribulación y tu pobreza, aunque eres rica. No temas por lo que tendrás que padecer:. mira que el demonio va a arrojar en la cárcel a algunos de ustedes, para que sean puestos a prueba, y tendrán que sufrir durante diez días. Sé fiel hasta la muerte. y te daré la corona de la vida -. 
            
            El que pueda entender, que entienda, lo que el Espíritu dice a las Iglesias; la segunda muerte no dañara al vencedor.
            `,
            reflexion: `Lo aparente es muchas veces engañoso. La visión que tenemos de lo que sucede, induce frecuentemente a error. Por eso, lo que parece pobreza de la Iglesia de Esmirna, es riqueza delante de Dios.

            Como consecuencia, se alienta a soportar las dificultades que acarrea la lucha contra las injusticias. Se señala que ellas, son una prueba temporaria para la comunidad cristiana, que busca la verdadera justicia. La fidelidad a Jesús hasta la muerte, recibirá como recompensa la corona de la vida, y no deberá experimentar ningún otro tipo de muerte.
            `,
            compromiso: "Estoy atento a no dejarme llevar por las apariencias, a ser menos superficial y materialista. Trato de evitar o denunciar momentos de injusticia en el ámbito familiar, laboral o social.",
            saludos: `Que la Santísima Virgen, que respondió espontáneamente en Fiat a la petición del Señor, nos exalte y nos ayude. AMÉN.

            Oh Cristo, protégenos mañana y siempre, pero especialmente hoy.

            Oh María, canal de todas las gracias, ruega por nosotros.

            San Expedito, nuestra ayuda en los asuntos urgentes, ruega por nosotros.
            `,
     },
     { // DIA 4
        meditacion: `Cuarto día: Justicia.

        San Expedito, Tú que tienes un corazón justo, haz que se haga justicia ante las injusticias diarias que hoy me rodean, muéstrame que es posible la oportunidad de cambiar las situaciones que hoy me perturban. 
        
        Guía cada una de mis palabras para poder ser claro ante las adversidades, porque sé que si mi mente está clara será más fácil tomar la decisión correcta ante tanta confusión.

        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.
        `,
            lectura: `Lectura del libro del Apocalipsis.
            
            Escribe al Ángel de la Iglesia de Pergamo:. “El que tiene la espada de doble filo afirma:, – Sé que tu habitas donde está el trono de Satanás. A pesar de todo, permaneces fiel a mi Nombre, y no has regresado de tu fe en mí, ni siquiera en la época de Antipas, mi testigo fiel, al que mataron en el lugar donde habita Satanás. Sin embargo, debo reprocharte algo, y es que tienes adictos a la doctrina de Balaam, el que enseño a Balac cómo debía seducir a los israelitas para que se prostituyeran, comiendo los alimentos sacrificados a los ídolos… Arrepiéntete, o iré enseguida para combatirlos con la espada de mi boca -. 
            
            El que pueda entender, que entienda lo que el Espíritu dice a las Iglesias:. al vencedor, le daré de comer el maná escondido, y también le daré una piedra blanca, en la que está escrito un nombre nuevo que nadie conoce fuera de aquel que lo recibe.
            `,
            reflexion: `En medio de un mundo dominado por valores opuestos al querer de Dios. “Donde está el trono de Satanás”, la comunidad cristiana proclama con fidelidad, el mensaje del Evangelio. Sin embrago, también en ella existen personas que se “casan” con el ídolo del poder, buscando obtener ventajas.

            Como en aquellos tiempos, ahora se insiste en la fidelidad confiando que, como el pueblo de Israel en el desierto, recibirá el maná, alimento divino, y entrará en una intimidad con Dios mismo, imposible de superar, ya que se le promete un nombre nuevo, que sólo él y Jesús conocen.
            `,
            compromiso: "Trato de tener el corazón abierto, para descubrir aquellas actitudes impositivas o autoritarias, que no me permiten ser una mujer nueva. Pido perdón a las personas que con frecuencia soportan estas mismas actitudes.",
            saludos: `Que la Santísima Virgen, espejo de la justicia, nos proteja y ayude. AMÉN.

            Oh Cristo, protégenos mañana y siempre, pero especialmente hoy.

            Oh María, Reina de los santos, ruega por nosotros.

            San Expedito, que se ha ganado el reino de los cielos, ruega por nosotros.
            `,
     },
     { // DIA 5
        meditacion: `Quinto día: Humildad.

        San Expedito, bríndame un corazón humilde como el tuyo, porque necesito aprender a ser humilde de corazón. Transforma mi soberbia en humildad, que se exprese en mis actos diarios.
        
        Hoy me acerco humildemente a ti, para pedirte que me ayudes ante las cosas que no puedo cambiar, para que de alguna manera se modifiquen y se exterioricen en mí. Confío en que tú me enseñarás como hacerlo.

        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.
        `,
            lectura: `Lectura del libro del Apocalipsis.
            
            Escribe al Ángel de la Iglesia de Tiatira:. “El hijo de Dios, el que tiene los ojos como llamas de fuego, y los pies semejantes al bronce fundido, afirma:. – Conozco tus obras, tu amor, tu fe, tu servicio, y tu constancia. Sé también que tus últimas obras son más abundantes que las primeras. Pero debo reprocharte que toleras a Jezabel, esa mujer que pretende ser profeta, la que engaña a todos mis servidores, y les enseña a prostituirse comiendo alimentos sacrificados a los ídolos… Al vencedor, al que permanezca fiel hasta el fin, le daré autoridad sobre las naciones. Él las regirá con un cetro de hierro y las destrozará como a un vaso de arcilla, con el mismo poder que yo recibí del Padre, y también le daré la Estrella de la mañana. 
            
            El que pueda entender que entienda lo que el Espíritu dice a las Iglesias”.
            `,
            reflexion: `La comunidad cristiana, es alentada por su actuación y el crecimiento de su fidelidad. Sin embargo, también aquí existen personas que causan muerte, como Jezabel, la reina cruel que persiguió a Elías y mató a Nabot, para quitarle la herencia de sus padres. También ahora, adorar a los ídolos sigue causando injusticia y muerte a nuestro alrededor.

            También a nosotros, se nos promete un poder al que no se podrá resistir, porque se origina en el Padre de Jesús, y se concede a éste y a sus discípulos. Con esta confianza podremos seguir firmes, sin dejarnos engañar por falsas promesas que los poderes de turno ofrecen.
            `,
            compromiso: "Intento liberarme de las falsas promesas humanas, que obstaculizan mi camino, renuevo mi confianza en el obrar de Dios, allí donde los hombres no pueden transformar el mal en bien, y le pido a Jesús que me ayude a ser más firme en la fe.",
            saludos: `Oh Cristo, protégenos mañana y siempre, pero especialmente hoy.

            Oh María, Refugio de los pecadores, ruega por nosotros.

            San Expedito, que fue azotado, ruega por nosotros.
            `, 
     },
     { // DIA 6
        meditacion: `Sexto día: Renuncia.

        San Expedito, ayúdame a renunciar a todas aquellas cosas que me hagan mal, tú sabes cuales son. Así que las deposito en tus manos, para que me muestres cuál es el camino de la renuncia. 
        
        Muéstrame como hacerlo, guía mis actos, todo te lo entrego a fin de que tú me guíes en estos momentos. Tú que has sido sabio por haber dejado todo, y entregarte solícitamente a Dios, aún sabiendo cual era tu destino, bríndame aquella fortaleza de corazón para la renuncia, que en ti confío mis pasos, y mis decisiones.

        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.
        `,
            lectura: `Lectura del libro del Apocalipsis.

            Escribe al Ángel de la Iglesia de Sardes:. “El que posee los siete espíritus de Dios y las siete estrellas afirma:. – Conozco tus obras. Aparentemente vives, pero en realidad estás muerto. Permanece alerta, y reanima lo que todavía puedes rescatar de la muerte, porque veo que tu conducta no es perfecta delante de mi Dios. Rcuerda cómo has recibido y escuchado la Palabra:. consérvala fielmente y arrepiéntete. Porque si no vigilas, llegaré como un ladrón, y no sabrás a qué hora te sorprenderé. Sin embargo, tienes todavía en Sardes algunas personas que no han manchado su ropa:. ellas me acompañarán vestidas de blanco, porque lo han merecido. El vencedor recibirá una vestidura blanca, nunca borraré su nombre del Libro de la Vida, y confesaré su nombre delante de mi Padre y de sus Ángeles. 
            
            El que pueda entender que entienda lo que el Espíritu dice a las Iglesias.
            
            `,
            reflexion: `De nuevo, Cristo pone en evidencia el sentido más profundo de la actuación humana. En este caso, los cristianos de Sardes se han apartado de los compromisos que recibieron, y escucharon la Palabra. Es necesario revivir este entusiasmo inicial, porque el Señor Jesús volverá como un ladrón, y debe encontrarlos preparados, en actitud permanente de vigilia.
            
            Sin embargo, dentro de este ambiente de infidelidad, existen personas que siguen defendiendo la vida de Dios, y el proyecto de Jesús, simbolizados con la vestidura blanca, sin manchas. Esta imagen, también hace referencia a las vestiduras blancas que llevaban los catecúmenos el día de su bautismo.
            
            Se promete, para todos ellos, una vestidura semejante. Y junto con ella, la seguridad que estarán escritos para siempre en el Libro de la Vida. Como ellos han proclamado a Cristo delante de los hombres, Cristo los presentará como sus amigos ante Dios y sus ángeles.
            `,
            compromiso: "Renuevo las promesas bautismales, y defiendo todas las situaciones que engendren y sostengan el respeto por la vida.",
            saludos: `Oh Cristo, protégenos mañana y siempre, pero sobre todo hoy.

            Oh María, Reina de los Mártires, ruega por nosotros.

            San Expedito, que lo perdió todo para ganar a Jesucristo, ruega por nosotros.
            `, 
     },
     { // DIA 7
        meditacion: `Séptimo día: Fe.

        San Expedito, acrecienta cada día más mi fe. Haz que crezca más día tras día, escucha mis palabras, hoy que llego a ti con esperanza. Muéstrame cuál es el camino que me conduce a Dios.
        
        Tú que has creído, acrecienta mi fe cada día, como fiel representante de Cristo Nuestro Salvador. Devélame cuál es mi misión en el mundo, para que yo pueda llevarla a cabo con fe y alegría.

        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.
        `,
        lectura: `Lectura del libro del Apocalipsis.
        
        Escribe al Ángel de la Iglesia de Filadelfia:. “El Santo, el que dice la Verdad, el que posee la llave de David, el que abre y nadie puede cerrar, el que cierra y nadie puede abrir, afirma:. – Yo conozco tus obras:. he abierto delante de ti una puerta que nadie puede cerrar, porque a pesar de tu debilidad, has cumplido mi Palabra sin renegar de mi Nombre. Ya que has cumplido mi consigna, de ser constante, yo también te preservaré en la hora de la tribulación… Yo volveré pronto, conserva firmemente la corona. Haré que el vencedor sea una columna en el templo de mi Dios, y nunca más saldrá de allí. Y sobre él escribiré el nombre de mi Dios, y el nombre de la Ciudad de mi Dios, –la nueva Jerusalén, que desciende del cielo, y viene de Dios-, y también mi nombre nuevo -. 
        
        El que pueda entender que entienda lo que el Espíritu dice a las Iglesias”.
            `,
            reflexion: `La única salida auténtica para nuestras dificultades, es la puerta abierta por Cristo para la humanidad. Los débiles comprendes esto, cuando se aferran a las promesas contenidas en la Palabra de Dios, y se mantienen fieles al Nombre de Jesús.

            Jesús estará con ellos aunque sufran por la injusticia, y esa presencia se hará plenitud de gozo, “corona”, cuando vuelva definitivamente.

            La vida, habrá servido para construir un Templo indestructible, y una nueva Ciudad plena de Justicia. Nuestro compromiso por las causas justas, es un anticipo de ese Templo y de esa Ciudad que anhelamos.
            `,
            compromiso: "Trato de transformar todas las situaciones de sufrimiento en momentos de encuentros de gozo y alegría con Jesús, y con la comunidad.",
            saludos: `Que la Santísima Virgen, que creyó sin reservas la palabra del ángel, nos proteja y guarde. Amén.

            Oh Cristo, protégenos mañana y siempre, pero sobre todo hoy.

            Oh María, Reina de los confesores, ruega por nosotros.

            San Expedito, invencible atleta de la fe, ruega por nosotros.
            `, 
     },
     { // DIA 8
        meditacion: `Octavo día: Esperanza.

        San Expedito, tú que enfrentaste los desafíos de la vida con una fe inquebrantable, enséñame a mantener la esperanza viva en mi corazón. Hoy, cuando el camino parece incierto, y las pruebas parecen difíciles de superar, ayúdame a confiar plenamente en que el Señor tiene un plan perfecto para mí. Que la esperanza sea la luz que guíe mis pasos, aun en los momentos más oscuros, recordando siempre que las promesas de Dios nunca fallan.

        Así como tú te mantuviste firme en tu misión, fortalecido por la esperanza en la salvación eterna, dame la fuerza para no rendirme ante las adversidades. Que cada día, al enfrentar las dificultades, pueda verlas como oportunidades para crecer en fe y confianza en el Señor, sabiendo que la esperanza me llevará a la paz y al consuelo que tanto busco.

        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.


        `,
            lectura: `Lectura del libro del Apocalipsis.
            
            Escribe el Ángel de la Iglesia de Laodicea:. “El que es el Amén, el Testigo fiel y verídico, el Principio de las obras de Dios afirma:. – Conozco tus obras:. no eres frío ni caliente. ¡Ojalá fueras frío o caliente!. Por eso, porque eres tibio, te vomitaré de mi boca. Tú andas diciendo:. Soy rico, estoy lleno de bienes, y no me falta nada. Y no sabes que eres desdichado, digno de compasión, pobre, ciego y desnudo. Por eso, te aconsejo:. cómprame oro purificado en el fuego para enriquecerte, vestidos blancos para revestirte y cubrir tu vergonzosa desnudez, y un colirio, para ungir tus ojos y recobrar la vista. Yo corrijo y reprendo a los que amo. ¡Reanima tu fervor y arrepiéntete!. Yo estoy junto a la puerta y llamo:. si alguien oye mi voz y me abre, entraré en su casa y cenaremos juntos. Al vencedor lo haré sentar conmigo en mi trono, así como yo he vencido y me he sentado con mi Padre en su trono -. 
            
            El que pueda entender, que entienda lo que el Espíritu dice a las Iglesias”.
            `,
            reflexion: `En esta carta encontramos una dura advertencia a los cristianos de Laodicea. Dos motivos los fundamentan:. su falta de decisión, y la incomprensión de su situación. Se señalan trágicas consecuencias de esta falta de decisión:. Porque este tibio, te vomitaré de mi boca. Se muestra también su engaño en la evolución que hace de su estado:. lo que considera riqueza, visión y ropaje es, en realidad pobreza, ceguera y desnudez.

            De allí la urgente llamada al arrepentimiento, a la que acompaña siempre una promesa. Compartir la cena con Dios es el premio que le espera a todos aquellos que están dispuestos a dejarlo entrar cuando llama a la puerta.
            `,
            compromiso: "Examino mi vida, y trato de descubrir como reacciono cuando mi fe es cuestionada:, ¿Callo?. ¿Me justifico?. ¿Dialogo?. Me comprometo a no ser tibio, y a aceptar las consecuencias que mis convicciones de fe puedan provocar a mi alrededor",
            saludos: `Que la Santísima Virgen, nuestra fiel esperanza, nos defienda y guarde. AMÉN.

            Oh Cristo, protégenos mañana y siempre, pero especialmente hoy.

            Oh María, Abogada de los pecadores, ruega por nosotros.

            San Expedito, fidelísimo apoyo de los que esperan en ti, ruega por nosotros.
            `, 
     },
     { // DIA 9
        meditacion: `Noveno día: Caridad.

        San Expedito, siembra en mi la semilla de la caridad, para compartir con otros la dicha de encontrarte. Que la caridad sea para mí un regalo de Dios que siembra la fe en otros corazones. 
        
        Confío plenamente en que podrás ayudarme ante las adversidades, y guiarás mis pasos para que pueda ejercer la caridad entre mis hermanos.

        San Expedito, valiente defensor de la Iglesia de Cristo, ruega por nosotros que recurrimos a ti.
        `,
            lectura: `Lectura del libro del Apocalipsis.
            
            Yo, Jesús, he enviado a mi mensajero para dar testimonio de estas cosas a las Iglesias:. Yo soy el Retoño de David, y su descendencia, la Estrella radiante.
            
            El Espíritu y la Esposa dicen:. “¡Ven!”, y el que escucha debe decir, “¡Ven!”. Que venga el que tiene sed, y que quiera que beba gratuitamente del agua de la vida.

            El que garantiza estas cosas afirma:. “¡Si, volveré pronto!”. ¡Amén!, ¡Ven, Señor Jesús!. Que la gracia del Señor Jesús permanezca con todos. Amén.
            `,
            reflexion: `El que ha aceptado los mensajes de Jesús y de Juan, su mensajero, puede reconocer que toda causa está en el horizonte de sus preocupaciones.

            Por ello, espera que la presencia del Retoño de David se haga definitiva, y no solo por medio de sus mensajes. De allí el grito “Ven”, que brota en la boca de los miembros de las comunidades cristianas, que se expresa en el Padre Nuestro cuando decimos:, Que venga tu Reino y que se haga tu voluntad.

            Él, delante de nosotros, sigue asumiendo su compromiso de un pronto retorno al que debemos prepararnos.
            `,
            compromiso: "A partir de hoy, me comprometo a aceptar que detrás de todas las situaciones difíciles e incomprensibles de mi vida, hay un porqué. Por la fe, me pongo incondicionalmente en las manos de Dios y rezo, como María:. 'que se haga en mí según tu palabra'.",
            saludos: `Oh Cristo, protégenos mañana y siempre, pero especialmente hoy.

            Oh María, Madre del amor divino, ruega por nosotros.

            San Expedito, que recibió del Señor la corona de justicia que prometió a los que le aman, ruega por nosotros.
            `,
     },
]

// Contenido novena todos los días

//configuración botones expand

let botonesexpand = document.getElementsByClassName('expand-btn')

for (let boton of botonesexpand) {
    boton.addEventListener('click', (e) => {
        botonClick = e.target
        let container = botonClick.parentNode
        let textNode = container.children[3]
        let botonPlay = container.children[2]
        let botonNext = container.children[4]
        textNode.classList.remove('hidden')
        botonPlay.classList.remove('hidden')
        botonNext.classList.remove('hidden')
        botonClick.classList.add('hidden')
    })
};

// configuración botones next

let botonesnext = document.getElementsByClassName('next-btn')
let contenedorOraciones = document.getElementById('day-container')

for (let boton of botonesnext){
    boton.addEventListener('click', (e) =>{
    let botonClick = e.target
    // Buscar qué dia es de la novena
    let dayFile = window.location.pathname;
    let fileName = dayFile.substring(dayFile.lastIndexOf('/') + 1);
    let fileParts = fileName.split('-');
    let day = fileParts[1].split('.')[0]; // El número está en la segunda parte, quitando el ".html"
    updateDayStatus(day,"En curso")
    let container = botonClick.parentNode
        let textNode = container.children[3]
        let botonPlay = container.children[2]
        let botonRezar = container.children[1]
        botonRezar.innerText = "Ya lo recé"
        botonRezar.classList.remove('bg-green-900')
        botonRezar.classList.add('bg-green-800')
        textNode.classList.add('hidden')
        botonPlay.classList.add('hidden')
        botonRezar.classList.remove('hidden')
        botonClick.classList.add('hidden')
        // aca tiene que haber algo para guardar el progreso en el localstorage
    let next = container.nextElementSibling
        let next_textNode = next.children[3]
        let next_botonPlay = next.children[2]
        let next_botonNext = next.children[4]
        let next_botonRezar = next.children[1]
        if (next_textNode != undefined){next_textNode.classList.remove('hidden')}
        if (next_botonPlay != undefined)next_botonPlay.classList.remove('hidden')
        if (next_botonNext != undefined)next_botonNext.classList.remove('hidden')
        if (next_botonRezar != undefined)next_botonRezar.classList.add('hidden')
        next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
            block: 'start' // Alinea el elemento al inicio de la vista
            })
        // Luego, ajusta la posición con un desplazamiento adicional
        setTimeout(() => {
            window.scrollBy({
                top: -440, // Ajusta esta cantidad a tu necesidad
                behavior: 'smooth'
            });
        }, 500); // Ajusta el tiempo según el comportamiento de desplazamiento
        
    })
}

//configuración boton complete

let botonescomplete = document.getElementsByClassName('complete-btn')

for (let boton of botonescomplete) {
    boton.addEventListener('click', (e) => {
        boton.addEventListener('click', (e) =>{
            let botonClick = e.target
            let container = botonClick.parentNode
            let next = container.nextElementSibling
                let next_textNode = next.children[3]
                let next_botonPlay = next.children[2]
                let next_botonNext = next.children[4]
                let next_botonRezar = next.children[1]
                next_textNode.classList.remove('hidden')
                next_botonPlay.classList.remove('hidden')
                next_botonNext.classList.remove('hidden')
                next_botonRezar.classList.add('hidden')
            
    })
})};

// configuracion boton finish

let botonesfinish = document.getElementsByClassName('finish-btn')

for (let boton of botonesfinish){
    boton.addEventListener('click', (e) =>{
    // Buscar qué dia es de la novena
    let dayFile = window.location.pathname;
    let fileName = dayFile.substring(dayFile.lastIndexOf('/') + 1);
    let fileParts = fileName.split('-');
    let day = fileParts[1].split('.')[0]; 
    updateDayStatus(day,"Completado")
    })
}

// configuracion boton reset
let botonesreset = document.getElementsByClassName('reset-btn')

for (let boton of botonesreset){
    boton.addEventListener('click', (e) =>{
    updateDayStatus(1,"Por rezar")
    updateDayStatus(2,"Por rezar")
    updateDayStatus(3,"Por rezar")
    updateDayStatus(4,"Por rezar")
    updateDayStatus(5,"Por rezar")
    updateDayStatus(6,"Por rezar")
    updateDayStatus(7,"Por rezar")
    updateDayStatus(8,"Por rezar")
    updateDayStatus(9,"Por rezar")
    location.reload()
    })
}

// contenedor intención inicial
let intInicialcontainer = document.getElementById("int_inicial_oracion")
if (intInicialcontainer !== null){
let intInicialtexto = novenaSanExpedito[0].intencionInicial
intInicialcontainer.innerText = intInicialtexto}

// contenedor invocación
let invocacioncontainer = document.getElementById("invocacion_oracion")
if (invocacioncontainer !== null){
let invocaciontexto = novenaSanExpedito[0].invocacion
invocacioncontainer.innerText = invocaciontexto}

// contenedor padre nuestro
let padrenuestrocontainer = document.getElementById("padrenuestro_oracion")
if (padrenuestrocontainer !== null){
let padrenuestrotexto = novenaSanExpedito[0].padreNuestro
padrenuestrocontainer.innerText = padrenuestrotexto}

// contenedor avemaria
let avemariacontainer = document.getElementById("avemaria_oracion")
if (avemariacontainer !== null){
let avemariatexto = novenaSanExpedito[0].aveMaria
avemariacontainer.innerText = avemariatexto}

// contenedor gloria
let gloriacontainer = document.getElementById("gloria_oracion")
if (gloriacontainer !== null){
let gloriatexto = novenaSanExpedito[0].gloria
gloriacontainer.innerText = gloriatexto}

// contenedor padre nuestro
let padrenuestrocontainer2 = document.getElementById("padrenuestro2_oracion")
if (padrenuestrocontainer2 !== null){
let padrenuestrotexto = novenaSanExpedito[0].padreNuestro
padrenuestrocontainer2.innerText = padrenuestrotexto}

// contenedor avemaria
let avemariacontainer2 = document.getElementById("avemaria2_oracion")
if (avemariacontainer2 !== null){
let avemariatexto = novenaSanExpedito[0].aveMaria
avemariacontainer2.innerText = avemariatexto}

// contenedor gloria
let gloriacontainer2 = document.getElementById("gloria2_oracion")
if (gloriacontainer2 !== null){
let gloriatexto = novenaSanExpedito[0].gloria
gloriacontainer2.innerText = gloriatexto}

// contenedor oracion san expedito
let orsanexpeditocontainer = document.getElementById("oracion_sanexpedito_oracion")
if (orsanexpeditocontainer !== null){
let orsanexpeditotexto = novenaSanExpedito[0].oracionSanExpedito
orsanexpeditocontainer.innerText = orsanexpeditotexto}

// contenedor oracion san expedito
let orDiariacontainer = document.getElementById("oracion_diaria_oracion")
if (orDiariacontainer !== null){
let orDiariatexto = novenaSanExpedito[0].oracionDiaria
orDiariacontainer.innerText = orDiariatexto}

// contenedor gozos
let gozoscontainer = document.getElementById("gozos_oracion")
if (gozoscontainer !== null){
let gozostexto = novenaSanExpedito[0].gozos
gozoscontainer.innerText = gozostexto}

// contenedor oracion final
let orFinalcontainer = document.getElementById("oracion_final_oracion")
if (orFinalcontainer !== null){
let orFinaltexto = novenaSanExpedito[0].oracionFinal
orFinalcontainer.innerText = orFinaltexto}

//CONTENIDO DIA 1
let meditacion_diauno_Container = document.getElementById("meditacion_diauno_oracion")
if (meditacion_diauno_Container != null){
let meditacion_diauno_texto = novenaSanExpedito[1].meditacion
meditacion_diauno_Container.innerText = meditacion_diauno_texto}

let lectura_diauno_Container = document.getElementById("lectura_diauno_oracion")
if (lectura_diauno_Container != null){
let lectura_diauno_texto = novenaSanExpedito[1].lectura
lectura_diauno_Container.innerText = lectura_diauno_texto}

let reflexion_diauno_Container = document.getElementById("reflexion_diauno_oracion")
if (reflexion_diauno_Container != null){
let reflexion_diauno_texto = novenaSanExpedito[1].reflexion
reflexion_diauno_Container.innerText = reflexion_diauno_texto}

let compromiso_diauno_Container = document.getElementById("compromiso_diauno_oracion")
if (compromiso_diauno_Container != null){
let compromiso_diauno_texto = novenaSanExpedito[1].compromiso
compromiso_diauno_Container.innerText = compromiso_diauno_texto}

let saludos_diauno_Container = document.getElementById("saludos_diauno_oracion")
if (saludos_diauno_Container != null){
let saludos_diauno_texto = novenaSanExpedito[1].saludos
saludos_diauno_Container.innerText = saludos_diauno_texto}

//CONTENIDO DIA 2

let meditacion_diados_Container = document.getElementById("meditacion_diados_oracion")
if (meditacion_diados_Container != null){
let meditacion_diados_texto = novenaSanExpedito[2].meditacion
meditacion_diados_Container.innerText = meditacion_diados_texto}

let lectura_diados_Container = document.getElementById("lectura_diados_oracion")
if (lectura_diados_Container != null){
let lectura_diados_texto = novenaSanExpedito[2].lectura
lectura_diados_Container.innerText = lectura_diados_texto}

let reflexion_diados_Container = document.getElementById("reflexion_diados_oracion")
if (reflexion_diados_Container != null){
let reflexion_diados_texto = novenaSanExpedito[2].reflexion
reflexion_diados_Container.innerText = reflexion_diados_texto}

let compromiso_diados_Container = document.getElementById("compromiso_diados_oracion")
if (compromiso_diados_Container != null){
let compromiso_diados_texto = novenaSanExpedito[2].compromiso
compromiso_diados_Container.innerText = compromiso_diados_texto}

let saludos_diados_Container = document.getElementById("saludos_diados_oracion")
if (saludos_diados_Container != null){
let saludos_diados_texto = novenaSanExpedito[2].saludos
saludos_diados_Container.innerText = saludos_diados_texto}

//CONTENIDO DIA 3

let meditacion_diatres_Container = document.getElementById("meditacion_diatres_oracion")
if (meditacion_diatres_Container != null){
let meditacion_diatres_texto = novenaSanExpedito[3].meditacion
meditacion_diatres_Container.innerText = meditacion_diatres_texto}

let lectura_diatres_Container = document.getElementById("lectura_diatres_oracion")
if (lectura_diatres_Container != null){
let lectura_diatres_texto = novenaSanExpedito[3].lectura
lectura_diatres_Container.innerText = lectura_diatres_texto}

let reflexion_diatres_Container = document.getElementById("reflexion_diatres_oracion")
if (reflexion_diatres_Container != null){
let reflexion_diatres_texto = novenaSanExpedito[3].reflexion
reflexion_diatres_Container.innerText = reflexion_diatres_texto}

let compromiso_diatres_Container = document.getElementById("compromiso_diatres_oracion")
if (compromiso_diatres_Container != null){
let compromiso_diatres_texto = novenaSanExpedito[3].compromiso
compromiso_diatres_Container.innerText = compromiso_diatres_texto}

let saludos_diatres_Container = document.getElementById("saludos_diatres_oracion")
if (saludos_diatres_Container != null){
let saludos_diatres_texto = novenaSanExpedito[3].saludos
saludos_diatres_Container.innerText = saludos_diatres_texto}

//CONTENIDO DIA 4

let meditacion_diacuatro_Container = document.getElementById("meditacion_diacuatro_oracion")
if (meditacion_diacuatro_Container != null){
let meditacion_diacuatro_texto = novenaSanExpedito[4].meditacion
meditacion_diacuatro_Container.innerText = meditacion_diacuatro_texto}

let lectura_diacuatro_Container = document.getElementById("lectura_diacuatro_oracion")
if (lectura_diacuatro_Container != null){
let lectura_diacuatro_texto = novenaSanExpedito[4].lectura
lectura_diacuatro_Container.innerText = lectura_diacuatro_texto}

let reflexion_diacuatro_Container = document.getElementById("reflexion_diacuatro_oracion")
if (reflexion_diacuatro_Container != null){
let reflexion_diacuatro_texto = novenaSanExpedito[4].reflexion
reflexion_diacuatro_Container.innerText = reflexion_diacuatro_texto}

let compromiso_diacuatro_Container = document.getElementById("compromiso_diacuatro_oracion")
if (compromiso_diacuatro_Container != null){
let compromiso_diacuatro_texto = novenaSanExpedito[4].compromiso
compromiso_diacuatro_Container.innerText = compromiso_diacuatro_texto}

let saludos_diacuatro_Container = document.getElementById("saludos_diacuatro_oracion")
if (saludos_diacuatro_Container != null){
let saludos_diacuatro_texto = novenaSanExpedito[4].saludos
saludos_diacuatro_Container.innerText = saludos_diacuatro_texto}

//CONTENIDO DIA 5

let meditacion_diacinco_Container = document.getElementById("meditacion_diacinco_oracion")
if (meditacion_diacinco_Container != null){
let meditacion_diacinco_texto = novenaSanExpedito[5].meditacion
meditacion_diacinco_Container.innerText = meditacion_diacinco_texto}

let lectura_diacinco_Container = document.getElementById("lectura_diacinco_oracion")
if (lectura_diacinco_Container != null){
let lectura_diacinco_texto = novenaSanExpedito[5].lectura
lectura_diacinco_Container.innerText = lectura_diacinco_texto}

let reflexion_diacinco_Container = document.getElementById("reflexion_diacinco_oracion")
if (reflexion_diacinco_Container != null){
let reflexion_diacinco_texto = novenaSanExpedito[5].reflexion
reflexion_diacinco_Container.innerText = reflexion_diacinco_texto}

let compromiso_diacinco_Container = document.getElementById("compromiso_diacinco_oracion")
if (compromiso_diacinco_Container != null){
let compromiso_diacinco_texto = novenaSanExpedito[5].compromiso
compromiso_diacinco_Container.innerText = compromiso_diacinco_texto}

let saludos_diacinco_Container = document.getElementById("saludos_diacinco_oracion")
if (saludos_diacinco_Container != null){
let saludos_diacinco_texto = novenaSanExpedito[5].saludos
saludos_diacinco_Container.innerText = saludos_diacinco_texto}

//CONTENIDO DIA 6

let meditacion_diaseis_Container = document.getElementById("meditacion_diaseis_oracion")
if (meditacion_diaseis_Container != null){
let meditacion_diaseis_texto = novenaSanExpedito[6].meditacion
meditacion_diaseis_Container.innerText = meditacion_diaseis_texto}

let lectura_diaseis_Container = document.getElementById("lectura_diaseis_oracion")
if (lectura_diaseis_Container != null){
let lectura_diaseis_texto = novenaSanExpedito[6].lectura
lectura_diaseis_Container.innerText = lectura_diaseis_texto}

let reflexion_diaseis_Container = document.getElementById("reflexion_diaseis_oracion")
if (reflexion_diaseis_Container != null){
let reflexion_diaseis_texto = novenaSanExpedito[6].reflexion
reflexion_diaseis_Container.innerText = reflexion_diaseis_texto}

let compromiso_diaseis_Container = document.getElementById("compromiso_diaseis_oracion")
if (compromiso_diaseis_Container != null){
let compromiso_diaseis_texto = novenaSanExpedito[6].compromiso
compromiso_diaseis_Container.innerText = compromiso_diaseis_texto}

let saludos_diaseis_Container = document.getElementById("saludos_diaseis_oracion")
if (saludos_diaseis_Container != null){
let saludos_diaseis_texto = novenaSanExpedito[6].saludos
saludos_diaseis_Container.innerText = saludos_diaseis_texto}

//CONTENIDO DIA 7

let meditacion_diasiete_Container = document.getElementById("meditacion_diasiete_oracion")
if (meditacion_diasiete_Container != null){
let meditacion_diasiete_texto = novenaSanExpedito[7].meditacion
meditacion_diasiete_Container.innerText = meditacion_diasiete_texto}

let lectura_diasiete_Container = document.getElementById("lectura_diasiete_oracion")
if (lectura_diasiete_Container != null){
let lectura_diasiete_texto = novenaSanExpedito[7].lectura
lectura_diasiete_Container.innerText = lectura_diasiete_texto}

let reflexion_diasiete_Container = document.getElementById("reflexion_diasiete_oracion")
if (reflexion_diasiete_Container != null){
let reflexion_diasiete_texto = novenaSanExpedito[7].reflexion
reflexion_diasiete_Container.innerText = reflexion_diasiete_texto}

let compromiso_diasiete_Container = document.getElementById("compromiso_diasiete_oracion")
if (compromiso_diasiete_Container != null){
let compromiso_diasiete_texto = novenaSanExpedito[7].compromiso
compromiso_diasiete_Container.innerText = compromiso_diasiete_texto}

let saludos_diasiete_Container = document.getElementById("saludos_diasiete_oracion")
if (saludos_diasiete_Container != null){
let saludos_diasiete_texto = novenaSanExpedito[7].saludos
saludos_diasiete_Container.innerText = saludos_diasiete_texto}

//CONTENIDO DIA 8

let meditacion_diaocho_Container = document.getElementById("meditacion_diaocho_oracion")
if (meditacion_diaocho_Container != null){
let meditacion_diaocho_texto = novenaSanExpedito[8].meditacion
meditacion_diaocho_Container.innerText = meditacion_diaocho_texto}

let lectura_diaocho_Container = document.getElementById("lectura_diaocho_oracion")
if (lectura_diaocho_Container != null){
let lectura_diaocho_texto = novenaSanExpedito[8].lectura
lectura_diaocho_Container.innerText = lectura_diaocho_texto}

let reflexion_diaocho_Container = document.getElementById("reflexion_diaocho_oracion")
if (reflexion_diaocho_Container != null){
let reflexion_diaocho_texto = novenaSanExpedito[8].reflexion
reflexion_diaocho_Container.innerText = reflexion_diaocho_texto}

let compromiso_diaocho_Container = document.getElementById("compromiso_diaocho_oracion")
if (compromiso_diaocho_Container != null){
let compromiso_diaocho_texto = novenaSanExpedito[8].compromiso
compromiso_diaocho_Container.innerText = compromiso_diaocho_texto}

let saludos_diaocho_Container = document.getElementById("saludos_diaocho_oracion")
if (saludos_diaocho_Container != null){
let saludos_diaocho_texto = novenaSanExpedito[8].saludos
saludos_diaocho_Container.innerText = saludos_diaocho_texto}

//CONTENIDO DIA 9

let meditacion_dianueve_Container = document.getElementById("meditacion_dianueve_oracion")
if (meditacion_dianueve_Container != null){
let meditacion_dianueve_texto = novenaSanExpedito[9].meditacion
meditacion_dianueve_Container.innerText = meditacion_dianueve_texto}

let lectura_dianueve_Container = document.getElementById("lectura_dianueve_oracion")
if (lectura_dianueve_Container != null){
let lectura_dianueve_texto = novenaSanExpedito[9].lectura
lectura_dianueve_Container.innerText = lectura_dianueve_texto}

let reflexion_dianueve_Container = document.getElementById("reflexion_dianueve_oracion")
if (reflexion_dianueve_Container != null){
let reflexion_dianueve_texto = novenaSanExpedito[9].reflexion
reflexion_dianueve_Container.innerText = reflexion_dianueve_texto}

let compromiso_dianueve_Container = document.getElementById("compromiso_dianueve_oracion")
if (compromiso_dianueve_Container != null){
let compromiso_dianueve_texto = novenaSanExpedito[9].compromiso
compromiso_dianueve_Container.innerText = compromiso_dianueve_texto}

let saludos_dianueve_Container = document.getElementById("saludos_dianueve_oracion")
if (saludos_dianueve_Container != null){
let saludos_dianueve_texto = novenaSanExpedito[9].saludos
saludos_dianueve_Container.innerText = saludos_dianueve_texto}

//TEXTO A VOZ
// Variables para manejar el estado de la voz
let synth = window.speechSynthesis;
let utterance;
let isSpeaking = false;

// Seleccionar los botones de "Escuchar"
const botonesEscuchar = document.querySelectorAll('.play-btn');

// Asignar evento click a cada botón de "Escuchar"
botonesEscuchar.forEach((boton) => {
  boton.addEventListener('click', (e) => {
    const container = e.target.parentNode;
    const text = container.children[3].textContent;

    if (!isSpeaking) {
      // Si no está hablando, comienza a leer el texto
      utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
      boton.textContent = 'Pausar';
      isSpeaking = true;
    } else {
      // Si está hablando, pausa o retoma la lectura
      if (synth.paused) {
        synth.resume();
        boton.textContent = 'Pausar';
      } else {
        synth.pause();
        boton.textContent = 'Reanudar';
      }
    }

    // Detectar cuándo termina de hablar para resetear el botón
    utterance.onend = () => {
      boton.textContent = 'Escuchar';
      isSpeaking = false;
    };
  });
});


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
    let status = localStorage.getItem(`novenaFatimaDay${day}`);
    if (status == undefined || null){
        status = 'Por rezar';
        localStorage.setItem(`novenaFatimaDay${day}`, status)
    } else{ 
        return status
    }
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

let estadoRosario = getRosarioStatus()
console.log(estadoRosario)

// Función para actualizar el estado del día en localStorage
const updateDayStatus = (day, status) => {
    localStorage.setItem(`novenaFatimaDay${day}`, status);
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

    for (let day = 1, fecha = 4; day <= 9; day++, fecha++) { // hay que poner fecha donde empieza la novena en fecha
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
        button.href = `../html/fatima-${day}.html`;  // Cambia el link a la página correspondiente
        button.classList.add('mt-4', 'px-4', 'py-2', 'bg-yellow-600', 'text-white', 'rounded-lg');
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

const novenaFatima = [
    {
        intencionInicial: 'Por nuestras familias. Para que sientan la dulce presencia de María, y así tener la certeza y total confianza de ser guiados por ella en estos difíciles momentos que pasa la humanidad.',
        oracionFatima: `Bienaventurada María, Virgen de Fátima, con renovada gratitud por tu presencia maternal, unimos nuestra voz a la de todas las generaciones que te llaman Bienaventurada.
        
        Celebramos en ti las grandes obras de Dios, quien nunca se cansa de inclinarse misericordiosamente hacia la humanidad afligida por el mal, y herida por el pecado, para curarla y salvarla.
        
        Acoge con benevolencia de Madre nuestra oración que hoy hacemos con confianza, ante ti, nuestra querida Madre.
        
        Estamos seguros de que cada uno de nosotros es precioso a tus ojos y que nada de lo que habita en nuestros corazones es ajeno a ti.
        
        Custodia nuestra vida entre tus brazos;
        Reaviva y alimenta la fe;
        Bendice y refuerza todo deseo de bien;
        Reaviva y alimenta la fe;
        Sostén e ilumina la esperanza;
        Suscita y anima la caridad;
        Guíanos a todos por el camino de la santidad.

        Enséñanos tú mismo amor de predilección por los pequeños y por los pobres, por los excluidos y por los que sufren, por los pecadores y por los extraviados de corazón.
        
        Congrega a todos bajo tu protección y entréganos a todos nosotros a tu Adorado Hijo Jesús, nuestro Señor. ¡Amén!
        `,
        oracionDiaria1: `¡Oh Dios mío!. Yo creo, adoro, espero, y te amo. 
        
        Te pido perdón por los que no creen, no adoran, no esperan, y no te aman.
        
        ¡Oh Santísima Trinidad: Padre, Hijo y Espíritu Santo!. Yo te adoro profundamente y te ofrezco el preciosísimo cuerpo, sangre, alma, y divinidad de Nuestro Señor Jesucristo, presente en todos los tabernáculos del mundo, en reparación de los ultrajes con los que es ofendido.
        Y por los méritos infinitos de su Santísimo Corazón, e intercesión del Inmaculado Corazón de María, te pido la conversión de los pecadores ¡Amén!
        `,
        oracionDiaria2: `¡Oh, Santísima Virgen María, Reina del Rosario y Madre de misericordia.
        
        ¡Te dignaste manifestar en Fátima la ternura de tu Inmaculado Corazón, trayéndonos mensajes de salvación y de paz. 
        
        Confiados en tu maternal misericordia, y agradecidos por las bondades de tu amantísimo Corazón, venimos ante ti para rendirte tributo con nuestra veneración y amor.
        
        Concédenos las gracias que necesitamos para cumplir fielmente tu mensaje de amor, y en especial la que te pedimos en esta Novena, si ha de ser para mayor gloria de Dios, honra tuya, y provecho de nuestras almas, ¡Amén!
        `,
        oracionFinal: '¡Oh Dios, cuyo Unigénito, con su vida, muerte y resurrección, nos otorgó el premio de la salvación eterna! Te suplicamos nos concedas que, meditando los misterios del Santísimo Rosario de la Bienaventurada Virgen María, imitemos los ejemplos que nos enseñan y alcancemos el premio que prometen. Por el mismo Jesucristo nuestro Señor. ¡Amén!',
    },
    { //DIA 1
        oracionDia: `¡Oh Santísima Virgen María, Madre de los pobres pecadores! Que apareciendo en Fátima, dejaste transparentar en tu rostro celestial una leve sombra de tristeza, para indicar el dolor que te causan los pecados de los hombres, y que con maternal compasión exhortaste a no afligir más a tu Hijo con la culpa, y a reparar los pecados con la mortificación y la penitencia. 
        
        Dadnos la gracia de un sincero dolor de los pecados cometidos, y la resolución generosa de reparar con obras de penitencia y mortificación todas las ofensas que se infieren a tu Divino Hijo, y a tu Corazón Inmaculado, ¡Amén!
        `,
        meditacion: `
        En el primer día de la novena, reflexionamos sobre la profunda injusticia que cometemos al centrar nuestra atención únicamente en el castigo de los pecados, sin reconocer primero la misericordia de Dios que los perdona. 
        
        Jesús, en su infinita bondad, asumió las consecuencias de nuestro pecado en la cruz, ofreciendo el perdón, y la redención. Al contemplar a María, comprendemos que la verdadera fuerza, radica en la humildad y la ternura, virtudes que nos invitan a superar la necesidad de imponer poder sobre los demás.
        
        Las apariciones y los signos sobrenaturales a lo largo de la historia humana, como el mensaje de Fátima, nos llaman a la conversión y a la penitencia, guiándonos hacia un amor más profundo y auténtico del Padre. 
        
        El mensaje de Fátima, uno de los más proféticos de las apariciones modernas, destaca la devoción al Corazón Inmaculado de María, y anticipa grandes eventos históricos, como la Segunda Guerra Mundial.

        El 13 de mayo de 1917, tres niños pastores, Lucía dos Santos, de 10 años, y sus primos Jacinta y Francisco Marto, de 7 y 9 años respectivamente, estaban cuidando ovejas en la Cova da Iria, en Fátima, Portugal. 
        
        Cerca del mediodía, después de rezar el rosario, los niños decidieron jugar cuando fueron sorprendidos por un destello de luz. Al alzar la vista, vieron sobre una encina pequeña a una mujer vestida de blanco, resplandeciente de luz.

        La mujer les dijo que venía del cielo y les pidió que volvieran al mismo lugar el 13 de cada mes durante seis meses. También les pidió que rezaran el rosario todos los días, y ofrecieran sacrificios por los pecadores y por la paz del mundo, que en ese momento atravesaba la Primera Guerra Mundial. 
        
        Así comenzaron las apariciones de la Virgen de Fátima, cuya devoción se extendería rápidamente a todo el mundo.

        Lucía fue la única que habló con la Virgen durante las apariciones. Francisco, aunque no podía escuchar las palabras de la Virgen, sí la veía, mientras que Jacinta veía y escuchaba todo. Esta distinción en sus experiencias subraya sus roles únicos en el mensaje de Fátima, aunque todos compartían el llamado a la oración, la penitencia y la reparación.

        Lucía dos Santos, la mayor de los tres, fue la única que habló con la Virgen durante las apariciones. Con una fe inquebrantable, Lucía asumió el papel de intermediaria entre la Virgen y el mundo. Fue ella quien escuchó las instrucciones detalladas y los secretos revelados por la Virgen, y más tarde se encargó de transmitir el mensaje de Fátima al resto de la humanidad.
        
        Francisco Marto, con un carácter más reservado y contemplativo, dedicó sus oraciones y sacrificios a la conversión de los pecadores, como le fue pedido por la Virgen. Aunque no podía escuchar las palabras de la Virgen, su devoción y sacrificio fueron fundamentales en la transmisión del mensaje de Fátima.

        Jacinta Marto, la más joven de los tres, tuvo una profunda experiencia espiritual durante las apariciones. Su capacidad para ver y escuchar a la Virgen, junto con su amor y sufrimiento, reflejaron el mensaje de la Virgen con una intensidad notable, subrayando la importancia de la pureza y el sacrificio en la vida cristiana.

        Este primer día de la novena nos invita a reflexionar sobre el profundo llamado a la conversión y la penitencia que la Virgen de Fátima nos presenta, recordándonos la importancia de la humildad, la oración y el sacrificio en nuestro camino de fe.
        `, 
     },
     { // DIA 2
        oracionDia: `¡Oh Santísima Virgen María!, Madre de la divina gracia, que vestida de nívea blancura te apareciste a unos pastorcitos sencillos e inocentes, enseñándonos así cuánto debemos amar y procurar la inocencia del alma, y que pediste por medio de ellos la enmienda de las malas costumbres, y la santidad de una vida cristiana perfecta. 
        
        Concédenos misericordiosamente la gracia de saber apreciar con dignidad nuestra condición de cristianos, y de llevar una vida conforme a las promesas bautismales, ¡Amén!`,
        meditacion: `
        En el segundo día de la novena, consideramos cómo el mensaje de Fátima sigue resonando en nuestra era actual, que demanda oración y conversión. 
        
        La Virgen María eligió a los pequeños Francisco, Jacinta y Lucía para transmitir un mensaje de penitencia y paz, recordándonos que, en tiempos de conflicto, la oración tiene el poder de transformar corazones, y guiarnos hacia el amor divino. 
        
        La devoción de estos niños nos invita a profundizar en nuestra vida espiritual, y a buscar la paz a través de la oración y la penitencia, tal como la Virgen nos lo enseñó. 
        
        Ciclo Angélico: 1915 – 1916.
        
        En 1915, antes de las apariciones de la Virgen, los pastorcitos experimentaron manifestaciones del Ángel de Portugal, quien les preparó para la llegada de Nuestra Señora. Durante la primera aparición, el Ángel les dijo:.
        «No teman. Yo soy el Ángel de la Paz. Recen conmigo.»
        
        Los guió en oraciones de penitencia y sacrificio, enseñándoles a ofrecer sus oraciones en reparación por los pecados del mundo, y la conversión de los pecadores:.
        «Dios mío, yo creo, adoro, ¡espero, y te amo! te pido perdón por aquellos que no creen, no adoran, no confían, y no te aman.»
        
        En su segunda aparición, el Ángel les exhortó a ofrecer sacrificios y oraciones a Dios, indicando que sus esfuerzos traerían paz al país. 
        
        Finalmente, en la tercera aparición, les mostró un cáliz y una Hostia, pidiéndoles que ofrecieran reparación por los ultrajes contra Cristo:.
        «Tomen y beban el Cuerpo y la Sangre de Jesucristo, terriblemente agraviado por la ingratitud de los hombres. Ofrezcan reparación por los ultrajes, y consuelen a Dios.»
        
        Estas visiones prepararon a los pastorcitos para la venida de la Virgen María, y profundizaron su vida espiritual, reforzando su compromiso con la oración y el sacrificio.
        `, 
     },
     { // DIA 3
        oracionDia: `¡Oh Santísima Virgen María!, Vaso insigne de devoción, que te apareciste en Fátima teniendo colgado de tus manos el Santo Rosario, y que insistentemente repetías:. «Oren, oren mucho», para alejar por medio de la oración los males que nos amenazan. 
        
        Concédenos el don y el espíritu de oración, la gracia de ser fieles en el cumplimiento del gran precepto de orar, haciéndolo todos los días, para así poder observar bien los santos mandamientos, vencer las tentaciones, para poder obtener el conocimiento y un gran amor a Jesucristo en esta vida, y hasta la unión feliz con Él en la eternidad, ¡Amén!`,
        meditacion: `
        La oración es un refugio esencial en tiempos de crisis y turbulencia. El Papa Francisco destaca el poder del Rosario, como un medio poderoso para la paz y la conversión. En momentos difíciles, invocamos la protección de la Madre de Dios con oraciones como el ‘Sub Tuum Praesidium’, que nos invita a buscar amparo en la Virgen María, y a construir comunidades de paz. 
        
        Nada es imposible cuando nos dirigimos a Dios con fe, y todos podemos contribuir a la paz a través de la oración.
        
        Primera Aparición, 13 de mayo de 1917.
        
        El 13 de mayo de 1917, en la fiesta de Nuestra Señora del Santísimo Sacramento, los tres pastorcitos, Francisco, Jacinta y Lucía, estaban pastoreando sus ovejas en la Cova de Iria, cerca de Fátima. 
        
        Mientras rezaban el Rosario de manera incompleta, fueron sorprendidos por un “rayo” en un cielo despejado, que los llevó a prepararse para irse a casa. Sin embargo, una luz extraña les hizo detenerse. A medida que descendían la colina, vieron a una Señora vestida de blanco y brillante, que irradiaba una luz intensa, como la de un cristal transparente bajo el sol.

        La Virgen, con un manto blanco bordeado de oro, y sosteniendo un rosario que parecía estrellado, les aseguró: “¡No tengan miedo! ¡Yo no les voy a hacer daño!”.
        
        Esta presencia, aunque majestuosa, llenaba a los niños de una profunda paz y alegría. La Virgen les pidió que regresaran el 13 de cada mes, durante seis meses, prometiendo revelar quién era, y lo que quería en una futura aparición, y les dijo: “Vine a pedirles que vengan aquí, a esta misma hora, los días 13 de cada mes durante 6 meses seguidos.”

        En la conversación, la Virgen también respondió a las preguntas de los niños sobre el destino de sus amigos, y familiares, diciendo: “Sí, tu irás al cielo.” A Francisco le dijo: “También, pero primero tienes que rezar muchos Rosarios.” 
        
        Les instó a ofrecerse a Dios para soportar sufrimientos como acto de reparación por los pecados, y en súplica por la conversión de los pecadores, afirmando:. “Tendrán, pues, que sufrir mucho, pero la gracia de Dios será su consuelo, y los fortalecerá.”
        
        La Virgen también les instruyó a rezar el Rosario diariamente, para alcanzar la paz mundial y el fin de la guerra:. “Recen el Rosario todos los días, para alcanzar la paz en el mundo y el fin de la guerra.”
         
        Mientras ascendía lentamente hacia el este, y se desvanecía en la distancia, los niños quedaron profundamente conmovidos por la experiencia, sintiendo la presencia de Dios de una manera nueva, y extraordinaria. La visión de la Virgen, rodeada de una luz celestial, dejó una impresión duradera en sus corazones y en sus vidas, preparándolos para las futuras apariciones y desafíos.
        `, 
     },
     { // DIA 4
        oracionDia: `¡Oh Santísima Virgen María, Reina de la Iglesia!, Que exhortaste a los pastorcitos de Fátima a rogar por el Papa, e infundiste en sus sencillas almas una gran veneración y amor hacia él, como Vicario de tu Hijo y su representante en la tierra. 
        
        Infunde también a nosotros el espíritu de veneración, y docilidad hacia la autoridad del Romano Pontífice, de adhesión inquebrantable a sus enseñanzas, y en él y con él un gran amor y respeto a todos los ministros de la Santa Iglesia, por medio de los cuales participamos la vida de la gracia de los sacramentos, ¡Amén!`,
        meditacion: `
        En el cuarto día de la novena, nos adentramos en la profunda devoción y valentía de los tres pastorcitos de Fátima. La Santísima Virgen confió a los niños un secreto sagrado, no para enriquecerse, sino para que conocieran, y amaran la devoción a su Inmaculado Corazón. Este Corazón, rodeado de espinas, simbolizaba los agravios de la humanidad. Francisco y Jacinta, a pesar de su corta edad, vivieron y testimoniaron su fe con admirable fortaleza, a pesar de enfrentar oposición, amenazas y castigos severos. Su fe inquebrantable y sus sacrificios, como rezar y ayunar, reflejan un heroísmo cristiano profundo. A pesar de ser encarcelados y amenazados con torturas por su fe, los niños nunca cedieron, manteniéndose firmes en su devoción a la “Señora” hasta el final de sus vidas.
        
        Segunda Aparición, 13 de junio de 1917.
        
        En la segunda aparición de la Virgen María, el 13 de junio de 1917, justo después de rezar el Santo Rosario, la Virgen se apareció a los tres pastorcitos en un lugar que ya había atraído a más de 50 personas. Durante esta visita, se estableció la devoción al Inmaculado Corazón de María. La Virgen instruyó a los niños a rezar el Rosario diariamente, y a aprender a leer: “Quiero que vengan aquí el día 13 del próximo mes, que recen el Rosario todos los días, y que aprendan a leer.”
        
        Lucía, preocupada por la curación de una persona enferma, recibió la respuesta: “Si se convierte, se curará a lo largo del año.” Además, preguntó sobre su propio destino, deseando que los llevara al Cielo. La Virgen respondió: “Sí; a Jacinta y a Francisco me los llevaré dentro de poco, pero tú te quedarás en la tierra algún tiempo más. Jesús quiere servirse de ti para hacerme conocer y amar.”
        
        Cuando Lucía expresó su dolor por quedarse sola, la Virgen la consoló: “No, te aflijas. ¡No te desanimes! Yo nunca te abandonaré. Mi Inmaculado Corazón te servirá de refugio, y a través de él irás a Dios.”

        Durante esta aparición, la Virgen abrió sus manos, y comunicó a los niños un reflejo de una luz inmensa, en la que los pastorcitos se sintieron sumergidos en Dios. Lucía observó un corazón rodeado de espinas en la palma de la mano derecha de Nuestra Señora, representando el Inmaculado Corazón de María “ultrajado por los pecados de la humanidad.”
        
        La aparición concluyó como la anterior, con la Virgen elevándose hacia el oriente, y desapareciendo en la “inmensidad de los cielos.”

        Francisco, impresionado, preguntó a Lucía sobre la visión del corazón en la mano de la Virgen, quien le explicó con dolor: “Es que tú, con Jacinta, irán dentro de poco al cielo. Yo me quedaré acá en la tierra con el Corazón Inmaculado de María.”

        A pesar de la experiencia celestial, los niños enfrentaron muchas dificultades y malentendidos. Las familias y la comunidad local, alarmadas y escépticas, no dejaban de cuestionar los eventos. Aún así, los tres pastorcitos continuaron firmes en su fe, mostrando una valentía y devoción admirables a su corta edad.
        `, 
     },
     { // DIA 5
        oracionDia: `¡Oh Santísima Virgen María, salud de los enfermos y consoladora de los afligidos!, Que movida por el ruego de los pastorcitos, obraste entonces curaciones durante tus apariciones en Fátima, y santificaste ese lugar, con tu presencia, lo convertiste en oficina de tus misericordias maternales en favor de todos los afligidos. 
        
        A tu Corazón maternal acudimos llenos de filial confianza, cargando las enfermedades de nuestras almas, todas las aflicciones y dolencias de nuestra vida. Echa sobre ellas una mirada de compasión, y sánalas con la ternura de tus manos, para que así podamos servirte, y amarte con todo nuestro corazón y con todo nuestro ser, ¡Amén!`,
        meditacion: `
        En el quinto día de la novena, nos sumergimos en la profunda transformación espiritual que experimentaron los tres pastorcitos después de la visión del infierno. Este revelador encuentro, les llevó a tomarse la vida con una seriedad renovada. Jacinta, Francisco y Lucía intensificaron sus tiempos de oración y sacrificios, con la firme convicción de redimir las almas, y obtener la paz para el mundo. La visión del infierno les inspiró a ofrecer ayunos y mortificaciones continuas, y a repetir la jaculatoria que Nuestra Señora les enseñó:. “¡Oh, Jesús mío! perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas de tu misericordia, y danos la paz.”
        
        Tercera Aparición, 13 de julio de 1917.
        
        El 13 de julio de 1917, mientras se acercaba el día de la aparición, Lucía se sentía afectada por las dudas sembradas por el párroco sobre la autenticidad de las visiones. Sin embargo, sus temores desaparecieron al llegar a Cova de Iría.
        
        La aparición de Nuestra Señora se produjo cerca de la encina, donde un gran número de personas estaban rezando el Rosario.
        
        Nuestra Señora les instruyó que continuaran rezando el Rosario diariamente, para obtener la paz y el fin de la guerra, prometiendo revelar su identidad, y hacer un milagro visible en octubre. Durante la aparición, la Virgen comunicó a los niños que algunos recibirían curación, mientras que otros no, y les animó a ofrecer sacrificios por los pecadores.

        Al abrir sus manos, Nuestra Señora mostró a los niños una visión aterradora del infierno, donde las almas perdidas sufrían en un mar de fuego. Este estremecedor espectáculo reveló la realidad de la condenación eterna, y la necesidad urgente de redimir las almas.

        La Virgen advirtió sobre el castigo divino que podría venir si la humanidad no se arrepentía, pidiendo la consagración de Rusia a su Inmaculado Corazón, y la práctica de los primeros sábados de cada mes en reparación por los pecados del mundo. También mostró una visión profética del Santo Padre, y la persecución futura de la Iglesia, subrayando la importancia de la penitencia y el sacrificio, para evitar estos males.
        
        Nuestra Señora concluyó la aparición diciendo que no había más peticiones para ese día, y ascendió al cielo, dejando a los niños con una renovada convicción, y un profundo sentido de misión.
        
        A pesar de las pruebas y la presión para revelar el secreto, los tres pastorcitos se mantuvieron firmes en su fe y dedicación, enfrentando con valentía las adversidades y el escepticismo de su entorno.
        `, 
     },
     { // DIA 6
        oracionDia: `¡Oh Santísima Virgen María, refugio de los pecadores!, Que enseñaste a los pastorcitos de Fátima a rogar incesantemente al Señor para que las almas descarriadas no caigan en las penas eternas del infierno. Tú, que manifestaste a uno de los tres que los pecados de la carne son los que más almas arrastran a aquellas terribles llamas.
        
        Infunde en nuestras almas un gran miedo al pecado, y un santo temor reverencial a la justicia divina, y al mismo tiempo, compasión por los pobres pecadores, y un santo celo al consagrar nuestros esfuerzos con oraciones, ejemplos y palabras por su conversión, ¡Amén!`,
        meditacion: `
        En el sexto día de la novena, contemplamos el sufrimiento y la perseverancia de los tres pastorcitos de Fátima en medio de la adversidad. Tal como los profetas enfrentaron desafíos y persecuciones, los niños también soportaron sufrimientos y pruebas a lo largo de su misión. Acusados de fraude y codicia, y temidos incluso por sus propias familias, los pastorcitos fueron sometidos a rigurosos interrogatorios y encarcelamientos. Sin embargo, su fe inquebrantable y su dedicación a la misión les permitieron actuar como verdaderos misioneros, enseñando el Rosario, y dando ejemplo de resignación.
        
        Cuarta Aparición, 13 de agosto de 1917.
        
        El 13 de agosto de 1917, un intento de captura por parte de Arturo Santos, un apóstata católico, llevó a los niños a ser separados de sus familias, y llevados a Vila Nova de Ourem, donde fueron sometidos a presiones y amenazas.
        
        A pesar de los intentos de soborno y tortura, Francisco y Jacinta mantuvieron su fe inquebrantable. Francisco, con una paz radiante, expresó su disposición a enfrentar el martirio si fuera necesario:. “¡Si nos matan, como dicen, dentro de poco estaremos en el Cielo!. ¡Qué bueno!. Por eso no me importan nada sus amenazas.”

        En Cova de Iría, a pesar de la ausencia de los pastorcitos, los signos de la aparición se hicieron visibles para la multitud que seguía creciendo. La ausencia de los niños, y las trampas del gobierno no impidieron que los fieles presenciaran algunos signos característicos de las apariciones.

        El 15 de agosto, fiesta de la Asunción, los pastorcitos fueron devueltos a Fátima por el alcalde. Aunque la intervención de las autoridades parecía ser un esfuerzo serio por parte del gobierno, los planes de Nuestra Señora no fueron detenidos por mucho tiempo. El 19 de agosto, en Valinhos, Lucía y Francisco, junto con el hermano de Lucía, Juan, se encontraron con la aparición de la Virgen. 
        
        Nuestra Señora les instruyó que regresaran a Cova de Iría el 13 del próximo mes, y continuaran rezando el Rosario diariamente.

        Nuestra Señora les pidió que prepararan dos andas para la fiesta de Nuestra Señora del Rosario, y que el excedente de las ofrendas se destinara a la construcción de la capilla. También se les prometió la curación de algunos enfermos, y se les instó a rezar y ofrecer sacrificios por las almas perdidas. La aparición se desvaneció, dejando a los niños con la firme misión de continuar con su devoción y sacrificio por las almas en peligro.
        `, 
     },
     { // DIA 7
        oracionDia: `¡Oh Santísima Virgen María, Reina del purgatorio!, Tú que enseñaste a los pastorcitos de Fátima a rogar a Dios por las almas del purgatorio, especialmente por las más abandonadas. 
        
        Encomendamos a la inagotable ternura de tu Corazón maternal, a todas las almas que padecen en aquel lugar de purificación, en particular las de todos aquellos nuestros allegados y familiares, y a aquellas que son las más abandonadas y necesitadas; ofréceles alivio en sus penas, y llévalas pronto a la región de la luz y de la paz, para cantar allí perpetuamente tus misericordias, ¡Amén!`,
        meditacion: `
        En el séptimo día de nuestra novena, reflexionamos sobre la creciente fama de las apariciones, y la multitudinaria asistencia en el 13 de septiembre de 1917. La devoción y la desesperación de las personas que acudían a los pastorcitos de Fátima se hacía evidente a medida que intentaban acercarse a ellos para pedir intercesiones por sus problemas y necesidades. La multitud, que alcanzaba los 30,000 personas, se esforzaba por ver y hablar con los niños, mostrando la miseria y las necesidades humanas de manera conmovedora.

        Quinta Aparición, 13 de septiembre de 1917.

        Al llegar a Cova de Iría, los pastorcitos comenzaron a rezar el Rosario con la multitud. Los niños, al ver la luz característica, cayeron de rodillas, y Lucía preguntó a Nuestra Señora:.“¿Qué quieres de mí?”

        Nuestra Señora respondió:. “Continúen rezando el Rosario para lograr el fin de la guerra. En octubre vendrá Nuestro Señor, Nuestra Señora de los Dolores, y Nuestra Señora del Carmen, San José aparecerá con el Niño Jesús para bendecir al Mundo. Dios está contento con sus sacrificios, pero no quiere que duerman con la cuerda puesta; llévenla solo durante el día.”

        A pesar de los sacrificios físicos, y las múltiples adversidades que enfrentaban, como la curiosidad malsana, las persecuciones, y las torturas, los pastorcitos continuaron su misión con gran determinación. La Virgen les instruyó que las peticiones y oraciones de la gente serían escuchadas, aunque algunos enfermos no serían curados debido a la falta de fe o por razones divinas que superaban nuestra comprensión.

        Sobre la construcción de la capilla, Nuestra Señora indicó que se debía construir una pequeña capilla en honor a Nuestra Señora del Rosario, pero que solo se usara la mitad del dinero recolectado para ello, reservando la otra mitad para las andas.

        Finalmente, ante la solicitud de un milagro para probar su autenticidad, Nuestra Señora prometió que en octubre realizaría un gran milagro, para que todos creyeran. La aparición se desvaneció como antes, y Lucía, señalando a la Señora, invitó a la multitud a mirar.
        `, 
     },
     { // DIA 8
        oracionDia: `¡Oh Santísima Virgen María!, Que en tu última aparición te diste a conocer como la Reina del Santísimo Rosario, y en todas ellas recomendaste el rezo de esta devoción como el remedio más seguro y eficaz para todos los males y calamidades que nos afligen, tanto del alma como del cuerpo. 
        
        Infunde en nuestras almas una profunda estima de los misterios de nuestra Redención, que meditamos a través del Rosario, para así obtener sus bendiciones eternas. Concédenos la gracia de ser siempre fieles a su rezo diario, y así honrarte al meditar tus gozos, tus dolores, y tus glorias. Además de hacernos merecedores de tu protección maternal y de tu asistencia en todos los momentos de la vida, pero especialmente en la hora de la muerte, ¡Amén!`,
        meditacion: `
        En el octavo día de nuestra novena, reflexionamos sobre la última aparición en Fátima, y el extraordinario "Milagro del Sol" que marcó este evento memorable. El 13 de octubre de 1917, la gran multitud que se reunió en Cova de Iría, estaba deseosa de presenciar la señal prometida por la Virgen. Para los tres pastorcitos, Lucía, Francisco y Jacinta, este último encuentro se convirtió en una profunda experiencia espiritual, y un llamado a vivir una vida de bendición y sacrificio.

        Sexta, y última, aparición, 13 de octubre de 1917.

        Durante la noche del 12 al 13 de octubre, la lluvia no cesó, empapando el suelo y a los miles de peregrinos que viajaban hacia Fátima desde diversos lugares, y en diferentes medios de transporte. A pesar de las inclemencias del tiempo, la multitud continuó su camino hacia Cova de Iría, donde estaba la capilla original y la moderna capilla de vidrio en la actualidad.

        A pesar de las dificultades y el escepticismo que rodeaban a los pastorcitos, finalmente lograron llegar a Cova de Iría. Allí, en medio de la multitud y las críticas, la Virgen se apareció alrededor de las 2 de la tarde, como había sido anunciado. La Señora les dijo:. “Quiero que construyan una capilla aquí en mi honor. Quiero que continúen rezando el Rosario todos los días. La guerra pronto terminará, y los soldados regresarán a sus hogares.”

        Cuando se le pidió que revelara su nombre, respondió:. “Yo soy la Señora del Rosario.”

        También respondió a las peticiones de la gente, prometiendo que algunas serían concedidas, pero advirtiendo que la conversión y el arrepentimiento eran necesarios para recibir la gracia. La Virgen expresó una tristeza profunda, pidiendo que no se ofendiera más a Dios, y advirtió sobre el fin del mundo si el pueblo no se enmendaba.

        Al elevarse hacia el cielo, la Señora hizo que sus manos reflejaran la luz del sol, creando un fenómeno impresionante. Mientras la lluvia cesaba, el sol comenzó a moverse de manera extraordinaria, creando diversos efectos visuales del que fueron testigos la multitud de aproximadamente 70,000 personas. Los testimonios describen el sol como un disco de colores brillantes que no dañaba la vista, girando y danzando en el cielo.
        
        El "Milagro del Sol".

        Los testimonios sobre el fenómeno solar varían, pero todos coinciden en que el sol parecía moverse de manera inexplicable y fascinante, proyectando colores y efectos que dejaban a todos asombrados. Este milagro fue presenciado por la multitud, y se convirtió en un evento inolvidable que corroboró la autenticidad de las apariciones.

        Para Jacinta y Francisco, esta fue su última aparición, mientras que Lucía continuó recibiendo visitas de la Virgen. En 1920, antes de dejar Fátima para entrar en un internado, Lucía fue nuevamente fortalecida por la Virgen en su decisión de dedicarse completamente a Dios.
        `, 
     },
     { // DIA 9
        oracionDia: `¡Oh Santísima Virgen María, Madre nuestra dulcísima!, Que escogiste a los pastorcitos de Fátima para mostrar al mundo las ternuras de tu Corazón misericordioso, y les propusiste la devoción al mismo como el medio con el cual Dios quiere dar la paz al mundo, como el camino para llevar las almas a Dios, y como una prenda suprema de salvación.
        
        Permite, ¡oh, Corazón de la más tierna de las madres!, que sepamos comprender tu mensaje de amor y de misericordia, que lo abracemos con filial adhesión, y que lo practiquemos siempre con fervor; y que tu Corazón sea nuestro refugio, nuestro consuelo y el camino que nos conduzca al amor, y a la unión con tu adorado Hijo Jesús, ¡Amén!.
        `,
        meditacion: `
        En el noveno día, reflexionamos sobre la vida de Lucía, Francisco y Jacinta, los pastorcitos de Fátima. Una historia de gracia y misericordia. 
        
        En estos niños, vemos la paradójica fuerza que sella la historia de la salvación:, la desproporción entre el poder de los soberbios, y el poder transformador de los humildes. 
        
        A través de sus vidas sencillas, los pastorcitos enseñaron el mensaje de la misericordia de Dios. Son testigos de un amor que transforma y revela la Luz divina en medio de la humanidad.

        Nuestra Señora de Fátima pidió la observancia de los Mandatos divinos, el rezo del Rosario, y la consagración a su Inmaculado Corazón para lograr la paz mundial. 
        
        A través de los mensajes recibidos, los pastorcitos se convirtieron en ejemplos vivos de devoción y sacrificio, siguiendo el llamado a ofrecer sus vidas en reparación por los pecados del mundo.
        
        Mensajes y Misterios de Nuestra Señora de Fátima
        
        El secreto de Fátima, confiado por Nuestra Señora el 13 de julio de 1917, se revela en tres partes:. Una visión del infierno, la devoción al Inmaculado Corazón, y una tercera parte profética. La primera parte muestra las trágicas consecuencias de la falta de arrepentimiento. La segunda parte enfatiza la necesidad de devoción al Inmaculado Corazón para salvar almas, y prevenir guerras. La tercera parte, revelada en 2000, se refiere a los sufrimientos de la Iglesia, y el atentado contra el Papa Juan Pablo II.
        
        Sor Lucía, después de las apariciones, escribió memorias detalladas del secreto. El Papa Pío XII consagró el mundo al Inmaculado Corazón en 1942, pero faltó la participación global de los obispos. El mensaje de Fátima invita a la conversión, la oración, y la reparación. La Virgen María pidió recitar el Rosario diariamente y ofrecer sacrificios por la conversión de los pecadores, así como rezar al final de cada misterio: 
        "¡Oh Jesús mío, perdónanos, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente a las más necesitadas!"
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
        botonRezar.classList.remove('bg-yellow-600')
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
                top: -400, // Ajusta esta cantidad a tu necesidad
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
                next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
                    block: 'start' // Alinea el elemento al inicio de la vista
                    })
                // Luego, ajusta la posición con un desplazamiento adicional
                setTimeout(() => {
                    window.scrollBy({
                        top: -400, // Ajusta esta cantidad a tu necesidad
                        behavior: 'smooth'
                    });
                }, 500); // Ajusta el tiempo según el comportamiento de desplazamiento
                
            
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
let intInicialtexto = novenaFatima[0].intencionInicial
intInicialcontainer.innerText = intInicialtexto}

// contenedor oracion fatima
let orFatimacontainer = document.getElementById("oracion_fatima_oracion")
if (orFatimacontainer !== null){
let orFatimatexto = novenaFatima[0].oracionFatima
orFatimacontainer.innerText = orFatimatexto}

// contenedor oracion diaria
let orDiariacontainer = document.getElementById("oracion_diaria_oracion")
if (orDiariacontainer !== null){
let orDiariatexto = novenaFatima[0].oracionDiaria1
orDiariacontainer.innerText = orDiariatexto}

// contenedor oracion preparatoria
let orPrepcontainer = document.getElementById("preparacion_diaria_oracion")
if (orPrepcontainer !== null){
let orPreptexto = novenaFatima[0].oracionDiaria2
orPrepcontainer.innerText = orPreptexto}

// contenedor oracion final
let orFinalcontainer = document.getElementById("oracion_final_oracion")
if (orFinalcontainer !== null){
let orFinaltexto = novenaFatima[0].oracionFinal
orFinalcontainer.innerText = orFinaltexto}

//CONTENIDO DIA 1
let ordiaunoContainer = document.getElementById("oracion_diauno_oracion")
if (ordiaunoContainer != null){
let ordiaunotexto = novenaFatima[1].oracionDia
ordiaunoContainer.innerText = ordiaunotexto}

let meddiaunoContainer = document.getElementById("meditacion_diauno_oracion")
if (meddiaunoContainer != null){
let meddiaunotexto = novenaFatima[1].meditacion
meddiaunoContainer.innerText = meddiaunotexto}

//CONTENIDO DIA 2

let ordiadosContainer = document.getElementById("oracion_diados_oracion")
if (ordiadosContainer != null){
let ordiadostexto = novenaFatima[2].oracionDia
ordiadosContainer.innerText = ordiadostexto}

let meddiadosContainer = document.getElementById("meditacion_diados_oracion")
if (meddiadosContainer != null){
let meddiadostexto = novenaFatima[2].meditacion
meddiadosContainer.innerText = meddiadostexto}

//CONTENIDO DIA 3

let ordiatresContainer = document.getElementById("oracion_diatres_oracion")
if (ordiatresContainer != null){
let ordiatrestexto = novenaFatima[3].oracionDia
ordiatresContainer.innerText = ordiatrestexto}

let meddiatresContainer = document.getElementById("meditacion_diatres_oracion")
if (meddiatresContainer != null){
let meddiatrestexto = novenaFatima[3].meditacion
meddiatresContainer.innerText = meddiatrestexto}

//CONTENIDO DIA 4

let ordiacuatroContainer = document.getElementById("oracion_diacuatro_oracion")
if (ordiacuatroContainer != null){
let ordiacuatrotexto = novenaFatima[4].oracionDia
ordiacuatroContainer.innerText = ordiacuatrotexto}

let meddiacuatroContainer = document.getElementById("meditacion_diacuatro_oracion")
if (meddiacuatroContainer != null){
let meddiacuatrotexto = novenaFatima[4].meditacion
meddiacuatroContainer.innerText = meddiacuatrotexto}

//CONTENIDO DIA 5

let ordiacincoContainer = document.getElementById("oracion_diacinco_oracion")
if (ordiacincoContainer != null){
let ordiacincotexto = novenaFatima[5].oracionDia
ordiacincoContainer.innerText = ordiacincotexto}

let meddiacincoContainer = document.getElementById("meditacion_diacinco_oracion")
if (meddiacincoContainer != null){
let meddiacincotexto = novenaFatima[5].meditacion
meddiacincoContainer.innerText = meddiacincotexto}

//CONTENIDO DIA 6

let ordiaseisContainer = document.getElementById("oracion_diaseis_oracion")
if (ordiaseisContainer != null){
let ordiaseistexto = novenaFatima[6].oracionDia
ordiaseisContainer.innerText = ordiaseistexto}

let meddiaseisContainer = document.getElementById("meditacion_diaseis_oracion")
if (meddiaseisContainer != null){
let meddiaseistexto = novenaFatima[6].meditacion
meddiaseisContainer.innerText = meddiaseistexto}

//CONTENIDO DIA 7

let ordiasieteContainer = document.getElementById("oracion_diasiete_oracion")
if (ordiasieteContainer != null){
let ordiasietetexto = novenaFatima[7].oracionDia
ordiasieteContainer.innerText = ordiasietetexto}

let meddiasieteContainer = document.getElementById("meditacion_diasiete_oracion")
if (meddiasieteContainer != null){
let meddiasietetexto = novenaFatima[7].meditacion
meddiasieteContainer.innerText = meddiasietetexto}

//CONTENIDO DIA 8

let ordiaochoContainer = document.getElementById("oracion_diaocho_oracion")
if (ordiaochoContainer != null){
let ordiaochotexto = novenaFatima[8].oracionDia
ordiaochoContainer.innerText = ordiaochotexto}

let meddiaochoContainer = document.getElementById("meditacion_diaocho_oracion")
if (meddiaochoContainer != null){
let meddiaochotexto = novenaFatima[8].meditacion
meddiaochoContainer.innerText = meddiaochotexto}

//CONTENIDO DIA 9

let ordianueveContainer = document.getElementById("oracion_dianueve_oracion")
if (ordianueveContainer != null){
let ordianuevetexto = novenaFatima[9].oracionDia
ordianueveContainer.innerText = ordianuevetexto}

let meddianueveContainer = document.getElementById("meditacion_dianueve_oracion")
if (meddianueveContainer != null){
let meddianuevetexto = novenaFatima[9].meditacion
meddianueveContainer.innerText = meddianuevetexto}

// contenido rosario
// PRIMERO VEO EL ESTADO DEL ROSARIO
let rosarioContainers = document.getElementsByClassName('rosario')
// despues actualizo
for (let container of rosarioContainers){
    if (estadoRosario !== "Por rezar"){
        let status = container.children[1]
        status.textContent = "Estado: " + estadoRosario
    }
    if (estadoRosario !== "Por rezar" && estadoRosario !== "Completo"){
        let status = container.children[1]
        status.textContent = "Estado: En curso"
    }
    if (estadoRosario === "Completo"){
        let status = container.children[1]
        status.textContent = "Estado: " + estadoRosario
        let rezar = container.children[2].children[0]
        rezar.classList.add('hidden')
        let complete = container.children[3]
        complete.classList.remove('hidden')
    }
}

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


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
    oracionesIniciales: 
        [["Señal de la Cruz",`Por la señal de la santa cruz, de nuestros enemigos, líbranos señor Dios nuestro,
        En el nombre del Padre, del Hijo, y del Espíritu Santo, Amén`],["Acto de contricción",
        `Señor mío Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío, Por ser Tú quién eres, Bondad infinita, y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido, 
        
        También me pesa que puedes castigarme con las penas del infierno, Ayudada de tu divina gracia, propongo firmemente nunca más pecar, confesarme, y cumplir la penitencia que me fuere impuesta, Amén.

        Señor, ábreme los labios,
        Y mi boca proclamará tu alabanza.

        Dios mío, ven en mi auxilio,
        Señor, date prisa en socorrerme.

        Gloria al Padre, al Hijo, y al Espíritu Santo,
        Como era en el principio, ahora y siempre, por los siglos de los siglos, Amén.`]]
    ,
    misterios: {
        gozosos: {
            name: "Gozosos",
            uno: {
                titulo: "La encarnación del Hijo de Dios.",
                descripcion: `El ángel, entrando en la presencia de María, le dijo:. Alégrate, llena de gracia, el Señor está contigo. Concebirás en tu vientre y darás a luz un hijo, y le pondrás por nombre Jesús. María contestó:. Aquí está la esclava del Señor. Hágase en mí según tu palabra.`,
                imagen: `../images/misteriogozo1.jpg`,
            },
            dos: {
                titulo: "La Visitación de Nuestra Señora a su prima Santa Isabel.",
                descripcion: `María se puso en camino y fue aprisa a la montaña, y saludó a Isabel. Isabel dijo a voz en grito:. ¡Bendita tú entre las mujeres, y bendito el fruto de tu vientre!. Dichosa tú que has creído. María dijo:. Proclama mi alma la grandeza del Señor.`,
                imagen: `../images/misteriogozo2.jpg`,
            },
            tres: {
                titulo: "El Nacimiento del Hijo de Dios en el portal de Belén.",
                descripcion: `Mientras estaban en Belén, le llegó a María el tiempo del parto, y dio a luz a su Hijo primogénito, lo envolvió en pañales y lo acostó en un pesebre, porque no tenían sitio en la posada. Un ángel se apareció a unos pastores y les dijo:. Hoy, en la ciudad de David, os ha nacido un Salvador, el Mesías, el Señor.`,
                imagen: `../images/misteriogozo3.jpg`,
            },
            cuatro: {
                titulo: "La presentación de Jesús en el templo.",
                descripcion: `Los padres de Jesús lo llevaron a Jerusalén para presentarlo al Señor, de acuerdo con lo escrito en la ley del Señor. Simeón lo tomó en brazos y dijo:. Ahora, Señor, según tu promesa, puedes dejar a tu siervo irse en paz. Porque mis ojos han visto a tu Salvador.`,
                imagen: `../images/misteriogozo4.jpg`,
            },
            cinco: {
                titulo: "El niño Jesús perdido y hallado en el templo.",
                descripcion: `Cuando Jesús cumplió doce años, subieron sus padres con él a Jerusalén por las fiestas de Pascua. Cuando terminó, se volvieron. Pero el niño Jesús se quedó en Jerusalén. A los tres días, lo encontraron en el templo, sentado en medio de los maestros.`,
                imagen: `../images/misteriogozo5.jpg`,
            },
        },
        dolorosos: {
            name:"Dolorosos",
            uno: {
                titulo: "La oración de Jesús en el huerto.",
                descripcion: `Jesús se apartó de los discípulos como un tiro de piedra, y, puesto de rodillas, oraba diciendo:. Padre, si quieres, aparta de mí este cáliz, pero no se haga mi voluntad, sino la tuya. En medio de su angustia, oraba con mayor insistencia.`,
                imagen: `../images/misteriodolor1.jpg`,
            },
            dos: {
                titulo: "La flagelación de Jesús.",
                descripcion: `Todos lo declararon reo de muerte. Algunos se pusieron a escupirle, y tapándole la cara, lo abofeteaban y le decían:. Haz de profeta. Y los ciados le daban bofetadas. Pilato tomó a Jesús y mandó que lo azotaran.`,
                imagen: `../images/misteriodolor2.jpg`,
            },
            tres: {
                titulo: "La coronación de espinas.",
                descripcion: `Los soldados trenzaron una corona de espinas, se la pusieron en la cabeza, y le vistieron un manto de color púrpura. Salió Jesús afuera, llevando la corona de espinas y el manto de color púrpura. Pilato les dijo:. Aquí lo tenéis.`,
                imagen: `../images/misteriodolor3.jpg`,
            },
            cuatro: {
                titulo: "Jesús carga con la cruz.",
                descripcion: `Tomaron a Jesús, y él, cargando con la Cruz, salió al sitio llamado de la Calavera. Lo seguía un gran gentío del pueblo, y de mujeres que se daban golpes y lanzaban lamentos por él.`,
                imagen: `../images/misteriodolor4.jpg`,
            },
            cinco: {
                titulo: "La crucifixión y muerte de Jesús.",
                descripcion: `Lo crucificaron a él y, con él, a otros dos, uno a cada lado y Jesús en medio. Junto a la cruz de Jesús estaba su Madre. Jesús, al ver a su Madre y cerca al discípulo que tanto quería, dijo a su Madre: Mujer, ahí tienes a tu hijo.`,
                imagen: `../images/misteriodolor5.jpg`,
            },
        },
        gloriosos: {
            name: "Gloriosos",
            uno: {
                titulo: "La resurrección del Señor.",
                descripcion: `Al alborear el primer día de la semana, fueron María la Magdalena y la otra María a ver el sepulcro. Un ángel del Señor dijo a las mujeres:. Vosotras no temáis, ya sé que buscáis a Jesús, el crucificado. No está aquí. ¡Ha resucitado!. Venid a ver el sitio donde yacía, e id aprisa a decir a sus discípulos:. Ha resucitado.`,
                imagen: `../images/misteriogloria1.jpg`,
            },
            dos: {
                titulo: "Segundo misterio. La ascensión del Señor a los cielos.",
                descripcion: `Jesús dijo a sus discípulos:. Sabed que yo estoy con vosotros todos los días hasta el fin del mundo”.  “El Señor Jesús, después de hablarles, ascendió a los cielos, y se sentó a la derecha de Dios.`,
                imagen: `../images/misteriogloria2.jpg`,
            },
            tres: {
                titulo: "Tercer misterio. La venida del Espíritu Santo sobre los apóstoles.",
                descripcion: `De repente, un ruido del cielo, como de un viento recio, resonó en toda la casa donde estaban los discípulos. Vieron aparecer unas lenguas, como llamaradas, que se repartían posándose encima de cada uno. Se llenaron todos de Espíritu Santo.`,
                imagen: `../images/misteriogloria3.jpg`,
            },
            cuatro: {
                titulo: "Cuarto misterio. La Asunción de María a los cielos.",
                descripcion: `María dijo:. Me felicitarán todas las generaciones, porque el Poderoso ha hecho obras grandes por mí.`,
                imagen: `../images/misteriogloria4.jpg`,
            },
            cinco: {
                titulo: "Quinto misterio. La coronación de María en los cielos.",
                descripcion: `Una gran señal apareció en el cielo:. una Mujer, vestida de sol, con la luna bajo sus pies, y una corona de doce estrellas sobre su cabeza.`,
                imagen: `../images/misteriogloria5.jpg`,
            },
        },
        luminosos: {
            name: "Luminosos",
            uno: {
                titulo: "El bautismo de Jesús.",
                descripcion: `Fue Jesús desde Galilea al Jordán, y se presentó a Juan para que lo bautizara. Apenas se bautizó Jesús, salió del agua, se abrió el cielo y vio que el Espíritu de Dios bajaba como una paloma, y se posó sobre Él. Y vino una voz del cielo que decía:. Éste es mi Hijo, el amado, mi predilecto.`,
                imagen: `../images/misterioLUZ1.jpg`,
            },
            dos: {
                titulo: "Jesús en las bodas de Caná.",
                descripcion: `Había una boda en Caná de Galilea, y la madre de Jesús estaba allí. Faltó el vino, y la madre de Jesús dijo a Jesús:. No les queda vino. Luego dijo a los sirvientes:. Haced lo que él os diga. Así Jesús comenzó sus signos, y creció la fe de sus discípulos.`,
                imagen: `../images/misterioLUZ2.jpg`,
            },
            tres: {
                titulo: "La predicación del Reino.",
                descripcion: `Jesús se marchó a Galilea a proclamar el Evangelio de Dios. Decía:. Se ha cumplido el plazo, está cerca el reino de Dios:. convertíos y creed en el Evangelio.`,
                imagen: `../images/misterioLUZ3.jpg`,
            },
            cuatro: {
                titulo: "La transfiguración del Señor.",
                descripcion: `Subió Jesús a una montaña muy alta, y se transfiguró delante de Pedro, Santiago y Juan. Su rostro resplandecía como el sol, y sus vestidos se volvieron blancos como la luz. Y una voz desde la nube decía:. Éste es mi Hijo, el amado, mi predilecto. Escuchadlo.`,
                imagen: `../images/misterioLUZ4.jpg`,
            },
            cinco: {
                titulo: "La Eucaristía.",
                descripcion: `Jesús, en la noche en que iba a ser entregado, tomó pan y pronunciando la Acción de Gracias, lo partió y dijo:. Esto es mi cuerpo, que se entrega por vosotros. Lo mismo hizo con la copa, diciendo:. Este es el cáliz de la nueva alianza, sellada con mi sangre.`,
                imagen: `../images/misterioLUZ5.jpg`,
            },
        },
    },
    oraciones: [
        ["avemaria",`Dios te salve María, llena eres de gracia, el Señor es contigo, bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre Jesús,

        Santa María, Madre de Dios, ruega por nosotros pecadores, ahora y en la hora de nuestra muerte, Amén.`],
        ["Padrenuestro",`Padre nuestro, que estás en el cielo, santificado sea tu Nombre. Venga a nosotros tu reino, hágase tu voluntad en la tierra como en el cielo.

        Danos hoy nuestro pan de cada día, perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden. No nos dejes caer en la tentaciónm y líbranos del mal, Amén.`],
        ["Gloria",`Gloria al Padre, al Hijo, y al Espíritu Santo.

        Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.`],
        ["Maria, Madre de gracia",`María, Madre de gracia, Madre de misericordia.

        Defiéndenos de nuestros enemigos y ampáranos, ahora y en la hora de nuestra muerte, Amén.`],
        ["Ohh Jesús mío",`Oh Jesús mío, perdónanos. Líbranos del fuego del infierno. Lleva a todas las almas al cielo, especialmente a las más necesitadas.`],
        ],
    oracionesFinales:[
        ["Letanías de la Santísima Virgen",`Letanías de la Santísima Virgen.

        Señor, ten piedad.
        Cristo, ten piedad.
        Señor, ten piedad.
        Cristo, óyenos.
        Cristo, escúchanos.

        Dios Padre celestial,
        Ten misericordia de nosotros.
        Dios Hijo, Redentor del mundo,
        Ten misericordia de nosotros.
        Dios Espíritu Santo,
        Ten misericordia de nosotros.
        Trinidad Santa, un solo Dios,
        Ten misericordia de nosotros.

        Santa María,
        Ruega por nosotros.
        Santa Madre de Dios,
        Ruega por nosotros.
        Santa Virgen de las Vírgenes,
        Ruega por nosotros.

        Madre de Cristo,
        Ruega por nosotros.
        Madre de la Iglesia,
        Ruega por nosotros.
        Madre de la Misericordia,
        Ruega por nosotros.
        Madre de la divina gracia,
        Ruega por nosotros.
        Madre de la Esperanza,
        Ruega por nosotros.
        Madre purísima,
        Ruega por nosotros.
        Madre castísima,
        Ruega por nosotros.
        Madre siempre virgen,
        Ruega por nosotros.
        Madre inmaculada,
        Ruega por nosotros.
        Madre amable,
        Ruega por nosotros.
        Madre admirable,
        Ruega por nosotros.
        Madre del buen consejo,
        Ruega por nosotros.
        Madre del Creador,
        Ruega por nosotros.
        Madre del Salvador,
        Ruega por nosotros.

        Virgen prudentísima,
        Ruega por nosotros.
        Virgen digna de veneración,
        Ruega por nosotros.
        Virgen digna de alabanza,
        Ruega por nosotros.
        Virgen poderosa,
        Ruega por nosotros.
        Virgen clemente,
        Ruega por nosotros.
        Virgen fiel,
        Ruega por nosotros.

        Espejo de justicia,
        Ruega por nosotros.
        Trono de la sabiduría,
        Ruega por nosotros.
        Causa de nuestra alegría,
        Ruega por nosotros.
        Vaso espiritual,
        Ruega por nosotros.
        Vaso digno de honor,
        Ruega por nosotros.
        Vaso insigne de devoción,
        Ruega por nosotros.
        Rosa mística,
        Ruega por nosotros.
        Torre de David,
        Ruega por nosotros.
        Torre de marfil,
        Ruega por nosotros.
        Casa de oro,
        Ruega por nosotros.
        Arca de la Alianza,
        Ruega por nosotros.
        Puerta del cielo,
        Ruega por nosotros.
        Estrella de la mañana,
        Ruega por nosotros.
        Salud de los enfermos,
        Ruega por nosotros.
        Refugio de los pecadores,
        Ruega por nosotros.
        Consuelo de los migrantes,
        Ruega por nosotros.
        Consoladora de los afligidos,
        Ruega por nosotros.
        Auxilio de los cristianos,
        Ruega por nosotros.

        Reina de los Ángeles,
        Ruega por nosotros.
        Reina de los Patriarcas,
        Ruega por nosotros.
        Reina de los Profetas,
        Ruega por nosotros.
        Reina de los Apóstoles,
        Ruega por nosotros.
        Reina de los Mártires,
        Ruega por nosotros.
        Reina de los Confesores,
        Ruega por nosotros.
        Reina de las Vírgenes,
        Ruega por nosotros.
        Reina de todos los Santos,
        Ruega por nosotros.
        Reina concebida sin pecado original,
        Ruega por nosotros.
        Reina asunta a los Cielos,
        Ruega por nosotros.
        Reina del Santo Rosario,
        Ruega por nosotros.
        Reina de la familia,
        Ruega por nosotros.
        Reina de la paz,
        Ruega por nosotros.`],
        ["Cordero de Dios",`Cordero de Dios, que quitas el pecado del mundo.
        Perdónanos, Señor.

        Cordero de Dios, que quitas el pecado del mundo.
        Escúchanos, Señor.

        Cordero de Dios, que quitas el pecado del mundo.
        Ten piedad de nosotros.

        Ruega por nosotros, Santa Madre de Dios.
        Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.`],
        ["Oración",`Te pedimos, Señor, nos concedas a nosotros tus siervos, gozar de perpetua salud de alma y cuerpo, y por la gloriosa intercesión de la bienaventurada siempre Virgen María, seamos librados de las tristezas presentes y gocemos de la eterna alegría. Por Jesucristo, nuestro Señor. Amén.`],
        ["Por las intenciones del Santo Padre",`Por las intenciones del Santo Padre y para ganar las indulgencias del Santo Rosario.`],
        ["Una Salve a la Virgen",`Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra. Dios te salve. A Ti llamamos los desterrados hijos de Eva. A Ti suspiramos, gimiendo y llorando, en este valle de lágrimas. 
        
        Ea, pues, Señora, abogada nuestra. Vuelve a nosotros, esos tus ojos misericordiosos, y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!

        Ruega por nosotros, Santa Madre de Dios.
        Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo, Amén.`],
        ["Jaculatoria Final",`Ave María Purísima.
        Sin pecado concebida.`],
        ]
}

// funcion para saber qué dia es y qué misterio rezar

let misterioDiario = rosario.misterios.gozosos

let getMisterio = () =>{
    let fecha = new Date();
    let dia = fecha.getDay()

    if (dia === 1 || dia === 6) {
        misterioDiario = rosario.misterios.gozosos
      } else if (dia === 2 || dia === 5) {
        misterioDiario = rosario.misterios.dolorosos
      } else if (dia === 3 || dia === 0) {
        misterioDiario = rosario.misterios.gloriosos
      } else if (dia === 4) {
        misterioDiario = rosario.misterios.luminosos
      } else {
        misterioDiario = rosario.misterios.gozosos
      }
    };

getMisterio()

// poner el misterio en el titulo
let misteryType = document.getElementById('misterio_type')
misteryType.innerHTML = misterioDiario.name

// Contenido de oraciones iniciales

let orIniciales = document.getElementById('orIniciales-container')

for (let oracion of rosario.oracionesIniciales){
    let title = oracion[0]
    let texto = oracion[1]
    console.log(texto)
    // si es la primera oracion, que esté expandida
    if(title == "Señal de la Cruz"){
    let card = document.createElement('div')
    card.classList.add('p-4', 'rounded-lg', 'shadow-md', 'card-lighter', 'dark:card-darker','mb-2')
    let titulo = document.createElement('h2')
    titulo.classList.add('text-xl', 'font-bold', 'pb-2')
    titulo.innerText = title
    let buttonRezar = document.createElement('button')
    buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    buttonRezar.innerText = "Rezar"
    let buttonEscuchar = document.createElement('button')
    buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let text = document.createElement('p')
    text.classList.add('m-4')
    text.innerText = texto
    let buttonNext = document.createElement('button')
    buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    let id = "orIni_" + title.slice(0,3)
    buttonNext.classList.add(`${id}`)
    buttonNext.innerText = 'Siguiente'
    card.appendChild(titulo)
    card.appendChild(buttonRezar)
    card.appendChild(buttonEscuchar)
    card.appendChild(text)
    card.appendChild(buttonNext)
    orIniciales.appendChild(card)
    // si no es la primera, que no esté expandida
    }else{
    let card = document.createElement('div')
    card.classList.add('p-4', 'rounded-lg', 'shadow-md', 'card-lighter', 'dark:card-darker','mb-2')
    let titulo = document.createElement('h2')
    titulo.classList.add('text-xl', 'font-bold', 'pb-2')
    titulo.innerText = title
    let buttonRezar = document.createElement('button')
    buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    buttonRezar.innerText = "Rezar"
    let buttonEscuchar = document.createElement('button')
    buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let text = document.createElement('p')
    text.classList.add('m-4', 'hidden')
    text.innerText = texto
    let buttonNext = document.createElement('button')
    buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    let id = "orIni_" + title.slice(0,3)
    buttonNext.classList.add(`${id}`)
    buttonNext.innerText = 'Siguiente'

    card.appendChild(titulo)
    card.appendChild(buttonRezar)
    card.appendChild(buttonEscuchar)
    card.appendChild(text)
    card.appendChild(buttonNext)
    orIniciales.appendChild(card)
    }
}

// Contenido de oraciones finales

let orFinales = document.getElementById('orFinales-container')

for (let oracion of rosario.oracionesFinales){
    let title = oracion[0]
    let texto = oracion[1]
    console.log(texto)
    let card = document.createElement('div')
    card.classList.add('p-4', 'rounded-lg', 'shadow-md', 'card-lighter', 'dark:card-darker','mb-2')
    let titulo = document.createElement('h2')
    titulo.classList.add('text-xl', 'font-bold', 'pb-2')
    titulo.innerText = title
    let buttonRezar = document.createElement('button')
    buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    buttonRezar.innerText = "Rezar"
    let buttonEscuchar = document.createElement('button')
    buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let text = document.createElement('p')
    text.classList.add('m-4', 'hidden')
    text.innerText = texto
    let buttonNext = document.createElement('button')
    buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-800', 'text-white' ,'rounded-full', 'hidden')
    let id = "OrFin_" + title.slice(0,3)
    buttonNext.classList.add(`${id}`)
    if (oracion != rosario.oracionesFinales[5]){
        buttonNext.innerText = 'Siguiente'
    }
    else{
        buttonNext.classList.remove('next-btn')
        buttonNext.classList.add('finish-btn')
        buttonNext.innerText = 'Finalizar'
    }
    card.appendChild(titulo)
    card.appendChild(buttonRezar)
    card.appendChild(buttonEscuchar)
    card.appendChild(text)
    card.appendChild(buttonNext)
    orFinales.appendChild(card)
}

// contenido primer misterio

let misterioUnoContainer = document.getElementById('misterio1-container')
let misterioUnoContenido = misterioDiario.uno
console.log(misterioUnoContenido)
let misterio1_card = document.createElement('div')
misterio1_card.classList.add('p-0', 'rounded-lg', 'card-light', 'dark:card-dark','mb-2', 'misterio')
let misterio1_titulo = document.getElementById('misterioUno')
misterio1_titulo.innerText = misterioUnoContenido.titulo
//let misterio1_buttonRezar = document.createElement('button')
//misterio1_buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
//misterio1_buttonRezar.innerText = "Rezar"
let misterio1_buttonEscuchar = document.createElement('button')
misterio1_buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
misterio1_buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
let misterio1_content = document.createElement('div')
misterio1_content.classList.add('container','flex')
    let misterio1_foto = document.createElement('img')
    misterio1_foto.classList.add('rounded-xl','p-2')
    misterio1_foto.src = misterioUnoContenido.imagen
    let misterio1_text = document.createElement('p')
    misterio1_text.classList.add('m-4')
    misterio1_text.innerText = misterioUnoContenido.descripcion
    misterio1_content.appendChild(misterio1_foto)
    misterio1_content.appendChild(misterio1_text)
//let misterio1_buttonNext = document.createElement('button')
//misterio1_buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
//misterio1_buttonNext.innerText = 'Siguiente'

//    misterio1_card.appendChild(misterio1_buttonRezar)
    misterio1_card.appendChild(misterio1_buttonEscuchar)
    misterio1_card.appendChild(misterio1_content)
//S    misterio1_card.appendChild(misterio1_buttonNext)
    misterioUnoContainer.appendChild(misterio1_card)


// contenido segundo misterio

let misterioDosContainer = document.getElementById('misterio2-container')
let misterioDosContenido = misterioDiario.dos
console.log(misterioDosContenido)
let misterio2_card = document.createElement('div')
misterio2_card.classList.add('p-0', 'rounded-lg', 'card-light', 'dark:card-dark','mb-2', 'misterio')
let misterio2_titulo = document.getElementById('misterioDos')
misterio2_titulo.innerText = misterioDosContenido.titulo
let misterio2_buttonEscuchar = document.createElement('button')
misterio2_buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
misterio2_buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
let misterio2_content = document.createElement('div')
misterio2_content.classList.add('container','flex')
    let misterio2_foto = document.createElement('img')
    misterio2_foto.classList.add('rounded-xl','p-2')
    misterio2_foto.src = misterioDosContenido.imagen
    let misterio2_text = document.createElement('p')
    misterio2_text.classList.add('m-4')
    misterio2_text.innerText = misterioDosContenido.descripcion
    misterio2_content.appendChild(misterio2_foto)
    misterio2_content.appendChild(misterio2_text)
    misterio2_card.appendChild(misterio2_buttonEscuchar)
    misterio2_card.appendChild(misterio2_content)
    misterioDosContainer.appendChild(misterio2_card)

    // contenido tercer misterio

let misterioTresContainer = document.getElementById('misterio3-container')
let misterioTresContenido = misterioDiario.tres
console.log(misterioTresContenido)
let misterio3_card = document.createElement('div')
misterio3_card.classList.add('p-0', 'rounded-lg', 'card-light', 'dark:card-dark','mb-2', 'misterio')
let misterio3_titulo = document.getElementById('misterioTres')
misterio3_titulo.innerText = misterioTresContenido.titulo
let misterio3_buttonEscuchar = document.createElement('button')
misterio3_buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
misterio3_buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
let misterio3_content = document.createElement('div')
misterio3_content.classList.add('container','flex')
    let misterio3_foto = document.createElement('img')
    misterio3_foto.classList.add('rounded-xl','p-2')
    misterio3_foto.src = misterioTresContenido.imagen
    let misterio3_text = document.createElement('p')
    misterio3_text.classList.add('m-4')
    misterio3_text.innerText = misterioTresContenido.descripcion
    misterio3_content.appendChild(misterio3_foto)
    misterio3_content.appendChild(misterio3_text)
    misterio3_card.appendChild(misterio3_buttonEscuchar)
    misterio3_card.appendChild(misterio3_content)
    misterioTresContainer.appendChild(misterio3_card)

    // contenido Cuarto misterio

    let misterioCuatroContainer = document.getElementById('misterio4-container')
    let misterioCuatroContenido = misterioDiario.cuatro
    console.log(misterioCuatroContenido)
    let misterio4_card = document.createElement('div')
    misterio4_card.classList.add('p-0', 'rounded-lg', 'card-light', 'dark:card-dark','mb-2', 'misterio')
    let misterio4_titulo = document.getElementById('misterioCuatro')
    misterio4_titulo.innerText = misterioCuatroContenido.titulo
    let misterio4_buttonEscuchar = document.createElement('button')
    misterio4_buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    misterio4_buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let misterio4_content = document.createElement('div')
    misterio4_content.classList.add('container','flex')
        let misterio4_foto = document.createElement('img')
        misterio4_foto.classList.add('rounded-xl','p-2')
        misterio4_foto.src = misterioCuatroContenido.imagen
        let misterio4_text = document.createElement('p')
        misterio4_text.classList.add('m-4')
        misterio4_text.innerText = misterioCuatroContenido.descripcion
        misterio4_content.appendChild(misterio4_foto)
        misterio4_content.appendChild(misterio4_text)
        misterio4_card.appendChild(misterio4_buttonEscuchar)
        misterio4_card.appendChild(misterio4_content)
        misterioCuatroContainer.appendChild(misterio4_card)

// contenido quinto misterio

let misterioCincoContainer = document.getElementById('misterio5-container')
let misterioCincoContenido = misterioDiario.cinco
console.log(misterioCincoContenido)
let misterio5_card = document.createElement('div')
misterio5_card.classList.add('p-0', 'rounded-lg', 'card-light', 'dark:card-dark','mb-2', 'misterio')
let misterio5_titulo = document.getElementById('misterioCinco')
misterio5_titulo.innerText = misterioCincoContenido.titulo
let misterio5_buttonEscuchar = document.createElement('button')
misterio5_buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
misterio5_buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
let misterio5_content = document.createElement('div')
misterio5_content.classList.add('container','flex')
    let misterio5_foto = document.createElement('img')
    misterio5_foto.classList.add('rounded-xl','p-2')
    misterio5_foto.src = misterioCincoContenido.imagen
    let misterio5_text = document.createElement('p')
    misterio5_text.classList.add('m-4')
    misterio5_text.innerText = misterioCincoContenido.descripcion
    misterio5_content.appendChild(misterio5_foto)
    misterio5_content.appendChild(misterio5_text)
    misterio5_card.appendChild(misterio5_buttonEscuchar)
    misterio5_card.appendChild(misterio5_content)
    misterioCincoContainer.appendChild(misterio5_card)

// botones avemarias FALTA HACER QUE SE GUARDE PROGRESO EN LOCAL STORAGE

let botonesMisterios = document.getElementsByClassName('btn-misterio')

for (boton of botonesMisterios){
    boton.addEventListener('click', (e) =>{
        let botonClick = e.target
        console.log(botonClick)
    if (botonClick.classList.contains('bg-yellow-600')){
        botonClick.classList.remove('bg-yellow-600')
        botonClick.classList.add('bg-green-900')
        if(botonClick.textContent == "1"){
            let parent = botonClick.parentElement
            let nextNext = parent.nextElementSibling
            parent.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
                block: 'start' // Alinea el elemento al inicio de la vista
                })
            // Luego, ajusta la posición con un desplazamiento adicional
            setTimeout(() => {
                window.scrollBy({
                    top: -330, // Ajusta esta cantidad a tu necesidad
                    behavior: 'smooth'
                });
            }, 500);
        }
        // poner avemarias en el contenedor
        if(botonClick.textContent != "10"){
            console.log(botonClick.textContent)
            let parent = botonClick.parentElement
            parent.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
                block: 'start' // Alinea el elemento al inicio de la vista
                })
            // Luego, ajusta la posición con un desplazamiento adicional
            setTimeout(() => {
                window.scrollBy({
                    top: -330, // Ajusta esta cantidad a tu necesidad
                    behavior: 'smooth'
                });
            }, 500);
            let misterio = parent.parentElement.id
            let granito = botonClick.textContent
            let progress = misterio + "_" + granito
            console.log(progress)
            updateRosarioStatus(progress)
            let next = parent.nextElementSibling
            console.log(next)
            next.classList.remove('hidden')
            let nextNext = parent.nextElementSibling.nextElementSibling
            let avemaria = rosario.oraciones[0][1]
            nextNext.innerHTML = `
            <p class='p-2'>${avemaria}</p>
            `
        }else{
            console.log('es 10')
            let parent = botonClick.parentElement
            console.log(parent)
            parent.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
                block: 'start' // Alinea el elemento al inicio de la vista
                })
            // Luego, ajusta la posición con un desplazamiento adicional
            setTimeout(() => {
                window.scrollBy({
                    top: -330, // Ajusta esta cantidad a tu necesidad
                    behavior: 'smooth'
                });
            }, 500);
            let next = parent.nextElementSibling
            next.classList.remove('hidden')
            let nextNext = parent.nextElementSibling.nextElementSibling
            let avemaria = rosario.oraciones[0][1]
            nextNext.innerHTML = `
            <p class='p-2'>${avemaria}</p>
            `
            let siguiente = nextNext.nextElementSibling
            siguiente.classList.remove('hidden')
        }
    }
    else{if(botonClick.classList.contains('bg-green-900')){
        botonClick.classList.remove('bg-green-900')
        botonClick.classList.add('bg-yellow-600')
    }}
}

)}

// gloria contenido

let gloriaContainer = document.getElementById('gloria1')

let oracionesGloria = [rosario.oraciones[2], rosario.oraciones[3], rosario.oraciones[4]]

for (oracion of oracionesGloria){
    let card = document.createElement('div')
    card.classList.add('gloria-oracion','p-4', 'rounded-lg', 'shadow-md', 'card-lighter', 'dark:card-darker','mb-2',)
    let titulo = document.createElement('h2')
    titulo.classList.add('text-xl', 'font-bold', 'pb-2')
    titulo.innerText = oracion[0]
    let id = oracion[0].slice(0,3)
    let buttonRezar = document.createElement('button')
    buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    buttonRezar.innerText = "Rezar"
    let buttonEscuchar = document.createElement('button')
    buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let text = document.createElement('p')
    text.classList.add('m-4', 'hidden')
    text.innerText = oracion[1]
    let buttonNext = document.createElement('button')
    buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    let buttonID = "gloria1_" + id
    buttonNext.classList.add(buttonID)
    buttonNext.innerText = 'Siguiente'

    card.appendChild(titulo)
    card.appendChild(buttonRezar)
    card.appendChild(buttonEscuchar)
    card.appendChild(text)
    card.appendChild(buttonNext)
    gloriaContainer.appendChild(card)
}
// gloria contenido2

let gloriaContainer2 = document.getElementById('gloria2')

let oracionesGloria2 = [rosario.oraciones[2], rosario.oraciones[3], rosario.oraciones[4]]

for (oracion of oracionesGloria2){
    let card = document.createElement('div')
    card.classList.add('gloria-oracion','p-4', 'rounded-lg', 'shadow-md', 'card-lighter', 'dark:card-darker','mb-2',)
    let titulo = document.createElement('h2')
    let id = oracion[0].slice(0,3)
    titulo.classList.add('text-xl', 'font-bold', 'pb-2')
    titulo.innerText = oracion[0]
    let buttonRezar = document.createElement('button')
    buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    buttonRezar.innerText = "Rezar"
    let buttonEscuchar = document.createElement('button')
    buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let text = document.createElement('p')
    text.classList.add('m-4', 'hidden')
    text.innerText = oracion[1]
    let buttonNext = document.createElement('button')
    buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    let buttonID = "gloria2_" + id
    buttonNext.classList.add(buttonID)
    buttonNext.innerText = 'Siguiente'

    card.appendChild(titulo)
    card.appendChild(buttonRezar)
    card.appendChild(buttonEscuchar)
    card.appendChild(text)
    card.appendChild(buttonNext)
    gloriaContainer2.appendChild(card)
}

// gloria contenido3

let gloriaContainer3 = document.getElementById('gloria3')

let oracionesGloria3 = [rosario.oraciones[2], rosario.oraciones[3], rosario.oraciones[4]]

for (oracion of oracionesGloria3){
    let card = document.createElement('div')
    card.classList.add('gloria-oracion','p-4', 'rounded-lg', 'shadow-md', 'card-lighter', 'dark:card-darker','mb-2',)
    let titulo = document.createElement('h2')
    let id = oracion[0].slice(0,3)
    titulo.classList.add('text-xl', 'font-bold', 'pb-2')
    titulo.innerText = oracion[0]
    let buttonRezar = document.createElement('button')
    buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    buttonRezar.innerText = "Rezar"
    let buttonEscuchar = document.createElement('button')
    buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let text = document.createElement('p')
    text.classList.add('m-4', 'hidden')
    text.innerText = oracion[1]
    let buttonNext = document.createElement('button')
    buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    let buttonID = "gloria3_" + id
    buttonNext.classList.add(buttonID)
    buttonNext.innerText = 'Siguiente'

    card.appendChild(titulo)
    card.appendChild(buttonRezar)
    card.appendChild(buttonEscuchar)
    card.appendChild(text)
    card.appendChild(buttonNext)
    gloriaContainer3.appendChild(card)
}

// gloria contenido4

let gloriaContainer4 = document.getElementById('gloria4')

let oracionesGloria4 = [rosario.oraciones[2], rosario.oraciones[3], rosario.oraciones[4]]

for (oracion of oracionesGloria4){
    let card = document.createElement('div')
    card.classList.add('gloria-oracion','p-4', 'rounded-lg', 'shadow-md', 'card-lighter', 'dark:card-darker','mb-2',)
    let titulo = document.createElement('h2')
    let id = oracion[0].slice(0,3)
    titulo.classList.add('text-xl', 'font-bold', 'pb-2')
    titulo.innerText = oracion[0]
    let buttonRezar = document.createElement('button')
    buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    buttonRezar.innerText = "Rezar"
    let buttonEscuchar = document.createElement('button')
    buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let text = document.createElement('p')
    text.classList.add('m-4', 'hidden')
    text.innerText = oracion[1]
    let buttonNext = document.createElement('button')
    buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    let buttonID = "gloria4_" + id
    buttonNext.classList.add(buttonID)
    buttonNext.innerText = 'Siguiente'

    card.appendChild(titulo)
    card.appendChild(buttonRezar)
    card.appendChild(buttonEscuchar)
    card.appendChild(text)
    card.appendChild(buttonNext)
    gloriaContainer4.appendChild(card)
}

// gloria contenido5

let gloriaContainer5 = document.getElementById('gloria5')

let oracionesGloria5 = [rosario.oraciones[2], rosario.oraciones[3], rosario.oraciones[4]]

for (oracion of oracionesGloria5){
    let card = document.createElement('div')
    card.classList.add('gloria-oracion','p-4', 'rounded-lg', 'shadow-md', 'card-lighter', 'dark:card-darker','mb-2',)
    let titulo = document.createElement('h2')
    let id = oracion[0].slice(0,3)
    titulo.classList.add('text-xl', 'font-bold', 'pb-2')
    titulo.innerText = oracion[0]
    let buttonRezar = document.createElement('button')
    buttonRezar.classList.add('expand-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full')
    buttonRezar.innerText = "Rezar"
    let buttonEscuchar = document.createElement('button')
    buttonEscuchar.classList.add('play-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    buttonEscuchar.innerHTML = '<i class="bi bi-play-circle"></i> Escuchar'
    let text = document.createElement('p')
    text.classList.add('m-4', 'hidden')
    text.innerText = oracion[1]
    let buttonNext = document.createElement('button')
    buttonNext.classList.add('next-btn', 'mt-2', 'px-4', 'py-2', 'bg-yellow-600', 'text-white' ,'rounded-full', 'hidden')
    let buttonID = "gloria5_" + id
    buttonNext.classList.add(buttonID)
    buttonNext.innerText = 'Siguiente'

    card.appendChild(titulo)
    card.appendChild(buttonRezar)
    card.appendChild(buttonEscuchar)
    card.appendChild(text)
    card.appendChild(buttonNext)
    gloriaContainer5.appendChild(card)
}

//configuración botones expand

let botonesexpand = document.getElementsByClassName('expand-btn')

for (let boton of botonesexpand) {
    boton.addEventListener('click', (e) => {
        botonClick = e.target
        console.log(botonClick)
        let container = botonClick.parentNode
        if (container.classList.contains('misterio')){
            console.log('do this')
            let botonPlay = container.children[1]
            botonPlay.classList.remove('hidden')
            let misterioNode = container.children[2]
            misterioNode.classList.remove('hidden')
            let botonNext = container.children[3]
            botonNext.classList.remove('hidden')
            botonClick.classList.add('hidden')

        }else{
        let textNode = container.children[3]
        console.log(textNode)
        let botonPlay = container.children[2]
        let botonNext = container.children[4]
        console.log(container)
        textNode.classList.remove('hidden')
        botonPlay.classList.remove('hidden')
        botonNext.classList.remove('hidden')
        botonClick.classList.add('hidden')
        }
    })
};

// configuración botones next

let botonesnext = document.getElementsByClassName('next-btn')
let contenedorOraciones = document.getElementById('day-container')

for (let boton of botonesnext){
    boton.addEventListener('click', (e) =>{
    let botonClick = e.target
    console.log(botonClick)
    let container = botonClick.parentNode
    console.log(container)

    //SI ES NEXT DENTRO DE CADA MISTERIO
    if(container.classList.contains('misterio')){
        // SI DENTRO DEL MISTERIO EL BOTON DICE SIGUIENTE (va para gloria)
        if(botonClick.textContent == "Siguiente"){
            console.log('es siguiente')
            let next = container.children[6]
            next.classList.remove('hidden')
            console.log(next)
            // desesconde el gloria
            let nextGloria = next.children[0]
            console.log(nextGloria)
            let nextGloriaRezar = nextGloria.children[1]
            let nextGloriaEscuchar = nextGloria.children[2]
            let nextGloriaText = nextGloria.children[3]
            let nextGloriaNext = nextGloria.children[4]
            nextGloriaRezar.classList.add('hidden')
            nextGloriaEscuchar.classList.remove('hidden')
            nextGloriaNext.classList.remove('hidden')
            nextGloriaText.classList.remove('hidden')
            // lo centra arriba
            next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
                block: 'start' // Alinea el elemento al inicio de la vista
                })
            // Luego, ajusta la posición con un desplazamiento adicional
            setTimeout(() => {
                window.scrollBy({
                    top: -330, // Ajusta esta cantidad a tu necesidad
                    behavior: 'smooth'
                });
            }, 500);
            // guarda el misterio como rezado en el local storage
            let misterioFinished = container.id
            let ten = "10"
            console.log(misterioFinished)
            updateRosarioStatus(misterioFinished + "_" + ten)
        }
    }
    // SI EL BOTON DICE SIGUIENTE DENTRO DE LAS ORACIONES DEL GLORIA PERO NO ES LA ULTIMA
    if(container.nextElementSibling != null && container.nextElementSibling.classList.contains('gloria-oracion')){
    let textNode = container.children[3]
        textNode.classList.add('hidden')
        let gloriaID = container.children[0].textContent.slice(0,3)
        let botonPlay = container.children[2]
        let botonRezar = container.children[1]
        console.log(botonRezar)
        botonPlay.classList.add('hidden')
       botonRezar.innerText = "Ya lo recé"
       botonRezar.classList.remove('bg-green-900')
       botonRezar.classList.add('bg-green-800')
       botonRezar.classList.remove('hidden')
       // guarda progreso en local storage
       let gloriaNo = container.parentElement.id
       let progress = gloriaNo + "_" + gloriaID
       updateRosarioStatus(progress)
       let next = container.nextElementSibling
      console.log(next)
      let nextGloriaRezar = next.children[1]
      let nextGloriaEscuchar = next.children[2]
      let nextGloriaText = next.children[3]
      let nextGloriaNext = next.children[4]
      nextGloriaRezar.classList.add('hidden')
      nextGloriaEscuchar.classList.remove('hidden')
      nextGloriaNext.classList.remove('hidden')
      nextGloriaText.classList.remove('hidden')


      next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
           block: 'start' // Alinea el elemento al inicio de la vista
          })
        // Luego, ajusta la posición con un desplazamiento adicional
        setTimeout(() => {
           window.scrollBy({
               top: -330, // Ajusta esta cantidad a tu necesidad
                behavior: 'smooth'
            });
        }, 500);
    }
    // si el boton dice siguiente dentro de las oraciones del gloria y es la ultima
    if(container.nextElementSibling == null){
       console.log('ES UN OH JESUS MIO')
       let gloria = container.parentElement
       let misterioOld = gloria.parentElement
       let gloriaID = container.children[0].textContent.slice(0,3)
        let textNode = container.children[3]
            textNode.classList.add('hidden')
            let botonPlay = container.children[2]
            let botonRezar = container.children[1]
            console.log(botonRezar)
            botonPlay.classList.add('hidden')
           botonRezar.innerText = "Ya lo recé"
           botonRezar.classList.remove('bg-green-900')
           botonRezar.classList.add('bg-green-800')
           botonRezar.classList.remove('hidden')
           // guarda progreso en local storage
            let gloriaNo = container.parentElement.id
            let progress = gloriaNo + "_" + gloriaID
            updateRosarioStatus(progress)
           let next = misterioOld.nextElementSibling
           // si el proximo es un misterio
          if (next != null && next.classList.contains('misterio')){
          next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
               block: 'start' // Alinea el elemento al inicio de la vista
              })
            // Luego, ajusta la posición con un desplazamiento adicional
            setTimeout(() => {
               window.scrollBy({
                   top: -330, // Ajusta esta cantidad a tu necesidad
                    behavior: 'smooth'
                });
            }, 500);}
            // si no es un misterio, pasa a las oraciones finales
            else{
                console.log(next)
                let letanias = next.children[1].children[0]
                let letaniasRezar = letanias.children[1]
                let letaniasEscuchar = letanias.children[2]
                let letaniasText = letanias.children[3]
                let letaniasNext = letanias.children[4]
                letaniasRezar.classList.add('hidden')
                letaniasEscuchar.classList.remove('hidden')
                letaniasText.classList.remove('hidden')
                letaniasNext.classList.remove('hidden')
                next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
                    block: 'start' // Alinea el elemento al inicio de la vista
                   })
                 // Luego, ajusta la posición con un desplazamiento adicional
                 setTimeout(() => {
                    window.scrollBy({
                        top: -330, // Ajusta esta cantidad a tu necesidad
                         behavior: 'smooth'
                     });
                 }, 500);
            }
        }
    // si estoy dentro de oraciones iniciales
    if(container.parentElement.parentElement.classList.contains('inicial')){
        let next = container.nextElementSibling
        // si la siguiente no es la ultima
        if (next != null){
        // info
        let cont = "orIni_"
        let orID = container.children[0].textContent.slice(0,3)
        console.log(orID)
        // TIENE QUE ESCONDER Y PONER QUE YA LO RECÉ
        let textNode = container.children[3]
        console.log(textNode)
        textNode.classList.add('hidden')
        let botonPlay = container.children[2]
        let botonRezar = container.children[1]
        console.log(botonRezar)
        botonPlay.classList.add('hidden')
       botonRezar.innerText = "Ya lo recé"
       botonRezar.classList.remove('bg-green-900')
       botonRezar.classList.add('bg-green-800')
       botonRezar.classList.remove('hidden')
       let next = container.nextElementSibling
       // guarda progreso en local storage
       let progreso = cont + orID
       updateRosarioStatus(progreso)
      console.log(next)
        // TIENE QUE EXPANDIR LA TARJETA
        let nextRezar = next.children[1]
        nextRezar.classList.add('hidden')
        let nextEscuchar = next.children[2]
        nextEscuchar.classList.remove('hidden')
        let nextText = next.children[3]
        nextText.classList.remove('hidden')
        let nextNext = next.children[4]
        nextNext.classList.remove('hidden')
        // SCROLLEA A LA POSICIÓN DE LA PROXIMA
        next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
            block: 'start' // Alinea el elemento al inicio de la vista
            })
        // Luego, ajusta la posición con un desplazamiento adicional
        setTimeout(() => {
            window.scrollBy({
                top: -330, // Ajusta esta cantidad a tu necesidad
                behavior: 'smooth'
            });
        }, 500);}
        else{
            console.log('es la ultima')
            let cont = "orIni_"
            let orID = container.children[0].textContent.slice(0,3)
            // save progress in local storage
            let progreso = cont + orID
            updateRosarioStatus(progreso)
            let next = container.parentElement.parentElement.nextElementSibling
            next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
                block: 'start' // Alinea el elemento al inicio de la vista
                })
            // Luego, ajusta la posición con un desplazamiento adicional
            setTimeout(() => {
                window.scrollBy({
                    top: -330, // Ajusta esta cantidad a tu necesidad
                    behavior: 'smooth'
                });
            }, 500);
        }
    }
    /// si estoy dentro de las oraciones finales
    if(container.parentElement.parentElement.classList.contains('final')){
        console.log('final')
        let currentRezar = container.children[1]
        console.log(currentRezar)
        let currentEscuchar = container.children[2]
        let currentText = container.children[3]
        currentRezar.classList.remove('bg-yellow-600', 'hidden')
        currentRezar.classList.add('bg-green-800')
        currentRezar.textContent = "Ya lo recé"
        currentEscuchar.classList.add('hidden')
        currentText.classList.add('hidden')
        let next = container.nextElementSibling
        let cont = "OrFin_"
        let orID = container.children[0].textContent.slice(0,3)
        let progreso = cont+orID
        updateRosarioStatus(progreso)
        // desesconder el proximo
        if (next != null){
            let nextRezar = next.children[1]
            nextRezar.classList.add('hidden')
            let nextEscuchar = next.children[2]
            nextEscuchar.classList.remove('hidden')
            let nextText = next.children[3]
            nextText.classList.remove('hidden')
            let nextNext = next.children[4]
            nextNext.classList.remove('hidden')
        next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
            block: 'start' // Alinea el elemento al inicio de la vista
            })
        // Luego, ajusta la posición con un desplazamiento adicional
        setTimeout(() => {
            window.scrollBy({
                top: -330, // Ajusta esta cantidad a tu necesidad
                behavior: 'smooth'
            });
        }, 500);}
        else{
            let next = container.parentElement.parentElement.nextElementSibling
            next.scrollIntoView({behavior: 'smooth', // Desplazamiento suave
                block: 'start' // Alinea el elemento al inicio de la vista
                })
            // Luego, ajusta la posición con un desplazamiento adicional
            setTimeout(() => {
                window.scrollBy({
                    top: -330, // Ajusta esta cantidad a tu necesidad
                    behavior: 'smooth'
                });
            }, 500);
        }
    }

})}

// boton finalizar

let botonFinish = document.getElementsByClassName('finish-btn')

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
    console.log(e.target)
    const container = e.target.parentNode;
    console.log(container)
    let text = ""
    let next = e.target.nextElementSibling
    console.log(next)
    if (container.classList.contains('misterio')){
    text = container.children[1].textContent
    console.log(text)
    if(next.classList.contains('avemarias')){
    text = next.children[0].textContent
    console.log(text)
    }
    }
    else{
    text = container.children[3].textContent;}

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



// FUNCION PARA CARGAR PROGRESO

let trackStatus = ()=>{
    let estado = getRosarioStatus()
    console.log(estado)
    let container = estado.split('_')[0]
    console.log(container)
    // si el estado es en oracion inicial
    if (container == "orIni"){
            console.log('entra aca')
        let oracion = estado.split('_')[1]
        // ahora que sabe cual es, tiene que encontrar el container y la oración, para marcarla como completa y encontrar el proximo para expandir y mostrar el proximo
        let boton = document.getElementsByClassName(estado)
        console.log(boton)
        boton[0].click()
    }
    if (container.includes('misterio')){
        let misterioId = container.slice(-1)
        console.log(misterioId)
        let oracion = estado.split('_')[1]
        let contenedor = document.getElementById(container)
        let misterios = contenedor.children[2]
        console.log(misterios)
        let buttonID = "avemaria-" + oracion
        let button = misterios.querySelector(`#${buttonID}`)
        button.click()
    }
    if (container.includes('gloria')){
        console.log('es gloria')
        let gloriaID = container.slice(-1)
        console.log(gloriaID)
        let oracion = estado.split('_')[1]
        let contenedor = document.getElementById(container)
        contenedor.classList.remove('hidden')
        let button = document.getElementsByClassName(estado)
        button[0].click()
    }
    if (container == "OrFin"){
        console.log('es or final')
        let oracion = estado.split('_')[1]
        let boton = document.getElementsByClassName(estado)
        console.log(boton)
        boton[0].click()

    }
}

document.addEventListener('DOMContentLoaded', () =>{
    trackStatus()
})

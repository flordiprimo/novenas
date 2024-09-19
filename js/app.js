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

    // Lógica para decirle a qué página ir
    let dayLinkChanger = (novenaName, dayDifferenceFromStart) =>{
        let dayLink = "#"
        if (novenaName === "Fátima"){
            if (dayDifferenceFromStart === 1) {
                dayLink = "html/fatima-1.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 2) {
                dayLink = "html/fatima-2.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 3) {
                dayLink = "html/fatima-3.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 4) {
                dayLink = "html/fatima-4.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 5) {
                dayLink = "html/fatima-5.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 6) {
                dayLink = "html/fatima-6.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 7) {
                dayLink = "html/fatima-7.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 8) {
                dayLink = "html/fatima-8.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 9) {
                dayLink = "html/fatima-9.html"
                return dayLink
                }
        }
        if (novenaName === "San Expedito"){
            if (dayDifferenceFromStart === 1) {
                dayLink = "html/expedito-1.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 2) {
                dayLink = "html/expedito-2.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 3) {
                dayLink = "html/expedito-3.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 4) {
                dayLink = "html/expedito-4.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 5) {
                dayLink = "html/expedito-5.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 6) {
                dayLink = "html/expedito-6.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 7) {
                dayLink = "html/expedito-7.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 8) {
                dayLink = "html/expedito-8.html"
                return dayLink
                }
            if (dayDifferenceFromStart === 9) {
                dayLink = "html/expedito-9.html"
                return dayLink
    
            }
        }
    }

    // Lógica para ver qué novena es
    let novenaLink = (novenaName) =>{
        let link = "#"
        if (novenaName === "Fátima"){
            link = "html/fatima-home.html"
            return link
        }
        if (novenaName === "San Expedito"){
            link = "html/sanexpedito-home.html"
            return link
        }
    }

// Función para calcular días restantes o día de la novena y si está en curso
const calculateDaysUntil = (startDay, elementId, novenaName) => {
    const today = new Date();
    const currentNovenaDate = new Date(today.getFullYear(), today.getMonth(), startDay);

    // Si hoy ya pasó la fecha de inicio de la novena, pasa al próximo mes
    if (today > currentNovenaDate) {
        currentNovenaDate.setMonth(today.getMonth() + 1);
    }

    const daysDifference = Math.ceil((currentNovenaDate - today) / (1000 * 60 * 60 * 24));

    // Lógica para mostrar si la novena está en curso
    const dayDifferenceFromStart = Math.floor((today - new Date(today.getFullYear(), today.getMonth(), startDay)) / (1000 * 60 * 60 * 24)) + 1;

    const cardElement = document.getElementById(elementId);

    const dayLink = dayLinkChanger(novenaName, dayDifferenceFromStart)

    const novLink = novenaLink(novenaName)

    // Si la novena está en curso (día 1 a 9)
    if (dayDifferenceFromStart >= 1 && dayDifferenceFromStart <= 9) {
        cardElement.innerHTML = `
            <p><strong>Novena en curso</strong> - Día ${dayDifferenceFromStart} de la novena</p>
        `;
        cardElement.insertAdjacentHTML('beforeend', `
            <a href=${dayLink}><button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Ir al día ${dayDifferenceFromStart}</button></a>
            <a href=${novLink}><button class="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg">Ver Novena</button></a>
        `);
    } else {
        cardElement.innerHTML = `<p>Días para la novena: ${daysDifference}</p>`;
        cardElement.insertAdjacentHTML('beforeend', `
            <a href=${novLink}><button class="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-lg">Ver Novena</button></a>
        `);
    }
};

// Novena Fátima (comienza el día 4)
calculateDaysUntil(4, 'fatimaDays', 'Fátima'); 

// Novena San Expedito (comienza el día 10)
calculateDaysUntil(10, 'expeditoDays', 'San Expedito');

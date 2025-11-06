/*
const botones = document.querySelectorAll('.button-apply-job');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log('¡Has aplicado al trabajo!');
        boton.textContent = 'Aplicado!';
        boton.classList.add('is-applied');
        boton.disabled = true;
    });
});

*/

const jobsListingSection = document.querySelector('.jobs-listings');

jobsListingSection.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList.contains('button-apply-job')) {
        element.textContent = 'Aplicado!';
        element.classList.add('is-applied');
        element.disabled = true;
        console.log('¡Has aplicado al trabajo!');
    }
});

/*

filtro práctica
const applyFilters = (value) => {

    console.log('Filtro aplicado:', value);
    const articles = document.querySelectorAll('.jobs-listings article');

    articles.forEach(article => {

        if (!value) {
            article.style.display = '';
            return;
        }

        if (article.textContent.toLowerCase().includes(value.toLowerCase())) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
};

const filterTechnologySelect = document.getElementById('filter-technology');
const filterLocationSelect = document.getElementById('filter-location');
const filterExperienceSelect = document.getElementById('filter-experience');

filterTechnologySelect.addEventListener('change', () => { applyFilters(filterTechnologySelect.value) });
filterLocationSelect.addEventListener('change', () => { applyFilters(filterLocationSelect.value) });
filterExperienceSelect.addEventListener('change', () => { applyFilters(filterExperienceSelect.value) });

*/

const filter = document.querySelector("#filter-location")

const mensaje = document.querySelector("#filter-selected-value")



filter.addEventListener("change", () => {
    const jobs = document.querySelectorAll(".job-listing-card")
    const selectedValue = filter.value;

    if (selectedValue) {
        mensaje.textContent = `Has seleccionado: ${selectedValue}`;
    } else {
        mensaje.textContent = "";
    }

    jobs.forEach((job) => {
        const modalidad = job.getAttribute('data-modalidad')
        const isShown = selectedValue === '' || selectedValue === modalidad

        // toggle con un segundo parámetro booleano
        // Si isShown es false, añade la clase
        // Si isShown es true, quita la clase
        job.classList.toggle('is-hidden', !isShown)
    })

});


const container = document.querySelector(".jobs-listings")

fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then(jobs => {
        jobs.forEach(job => {
            const article = document.createElement('article')
            article.className = "job-listing-card"
            article.dataset.modalidad = job.data.modalidad
            article.dataset.nivel = job.data.nivel
            article.dataset.technology = job.data.technology

            article.innerHTML = `<div>
            <h3>${job.titulo}</h3>
            <small>${job.empresa} | ${job.ubicacion}</small>
            <p>${job.descripcion}</p>
            
            </div>
            <button class="button-apply-job">Aplicar</button>`
            container.appendChild(article)
        })
    });
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

import './fetch-data.js';
import './filters.js';  
import './apply-button.js';
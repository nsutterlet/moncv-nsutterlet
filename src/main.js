import $ from 'jquery';
import 'bootstrap';
import 'bootswatch/superhero/bootstrap.min.css';
import './main.css';
import Chart from 'chart.js';

$(document).ready(function () {
    transformPage();
    console.log('it works!!');
});

/* eslint-disable no-new */
/* Récupération des progress-bar */
var listProgress = $('.progress');

/* Extraction des données d'une progress-bar */
function extractDataFromProgress (progress) {
    const bar = progress.children[0];
    const val = $(bar).attr('aria-valuenow');
    return val;
}

/* Fonction de création du chart */
function makeChart (c, val) {
    let option = {
        type: 'doughnut',
        data: {

            datasets: [
                {
                    backgroundColor: ['#000000', '#8e5ea2'],
                    borderColor: ['#000000', '#000000'],
                    data: [100 - val, val]
                }
            ]
        },
        options: {
            tooltips: { enabled: false },
            hover: { mode: null }
        }
    };
    new Chart(c, option);
}

/* Tranformation de la page */
function transformPage () {
    for (let progress of listProgress) {
        const val = extractDataFromProgress(progress);
        const c = $('<canvas></canvas>');
        $(progress).replaceWith(c);
        makeChart(c, val);
    }
}

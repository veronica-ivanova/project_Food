// window.addEventListener('DOMContentLoaded', () => {
//     const tabs = require('./modules/tabs'),
//           modal = require('./modules/modal'),
//           timer = require('./modules/timer'),
//           cards = require('./modules/cards'),
//           calc = require('./modules/calc'),
//           forms = require('./modules/forms'),
//           slider = require('./modules/slider');

//     tabs();
//     modal();
//     timer();
//     cards();
//     calc();
//     forms();
//     slider();

// })


import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2025-05-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current'

    })
        

})







// npx json-server db.json  запуск сервера json
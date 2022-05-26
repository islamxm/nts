import { benefitsSlider } from './modules/benefitsSlider.js';
import * as flsFuncs from './modules/functions.js';
import { heroSlider } from './modules/heroSlider.js';
import { intSlider } from './modules/intSlider.js';
import { tabs } from './modules/tabs.js';
import { tours } from './modules/tours.js';

flsFuncs.isWebp();

document.addEventListener('DOMContentLoaded', () => {
    heroSlider();
    tours();
    benefitsSlider();
    intSlider();
    tabs('.services', '.services__tabs', '.services__tabs_item', '.services__content_item');
})

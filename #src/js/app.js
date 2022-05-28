import { benefitsSlider } from './modules/benefitsSlider.js';
import * as flsFuncs from './modules/functions.js';
import { heroSlider } from './modules/heroSlider.js';
import { intSlider } from './modules/intSlider.js';
import { pressSlider } from './modules/pressSlider.js';
import { tabs } from './modules/tabs.js';
import { tours } from './modules/tours.js';
import { up } from './modules/up.js';

flsFuncs.isWebp();

document.addEventListener('DOMContentLoaded', () => {
    heroSlider();
    tours();
    benefitsSlider();
    intSlider();
    tabs('.services', '.services__tabs', '.services__tabs_item', '.services__content_item');
    tabs('.press', '.press__tabs', '.press__tabs_item', '.press__tabscontent_item');
    tabs('.contacts-page__body_main', '.contacts-page__body_main_tabs', '.contacts-page__body_main_tabs_item', '.contacts-page__body_main_tabscontent_item');
    pressSlider();
    up();
})

import { benefitsSlider } from './modules/benefitsSlider.js';
import * as flsFuncs from './modules/functions.js';
import { heroSlider } from './modules/heroSlider.js';
import { intSlider } from './modules/intSlider.js';
import { pressSlider } from './modules/pressSlider.js';
import { prodChart } from './modules/prodChar.js';
import { rangeSlider } from './modules/rangeSlider.js';
import { tabs } from './modules/tabs.js';
import { tmSliders } from './modules/tmSliders.js';
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
    tabs('.press-page__body_main', '.press-page__body_main_tabs', '.press-page__body_main_tabs_item', '.press-page__body_main_list');
    tabs('.contacts-page__body_main', '.contacts-page__body_main_tabs', '.contacts-page__body_main_tabs_item', '.contacts-page__body_main_tabscontent_item');
    pressSlider();
    up();
    tabs('.product__tm_in', '.product__tm_tabs', '.product__tm_tabs_item', '.product__tm_tabscontent_item');
    tmSliders();
    prodChart();
    tabs('.product__anl', '.product__anl_tabs', '.product__anl_tabs_item', '.product__anl_tabscontent_item');
    rangeSlider();
})

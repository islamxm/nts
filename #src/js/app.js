import * as flsFuncs from './modules/functions.js';
import { heroSlider } from './modules/heroSlider.js';
import { tours } from './modules/tours.js';

flsFuncs.isWebp();

document.addEventListener('DOMContentLoaded', () => {
    heroSlider();
    tours();
})

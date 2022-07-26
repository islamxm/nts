import { benefitsSlider } from './modules/benefitsSlider.js';
import { careerAcc } from './modules/careerAcc.js';
import { filterSelect } from './modules/filterSelect.js';
import { fltr } from './modules/fltr.js';
import * as flsFuncs from './modules/functions.js';
import { galleryScript } from './modules/galleryScript.js';

import { intSlider } from './modules/intSlider.js';
import { mapCt } from './modules/mapCt.js';
import { mapItemSlider } from './modules/mapItemSlider.js';
import { mobmenu } from './modules/mobmenu.js';
import { normalSelect } from './modules/normalSelect.js';
import { pressSlider } from './modules/pressSlider.js';
import { prodChart } from './modules/prodChar.js';
import { rangeSlider } from './modules/rangeSlider.js';
import { tabs } from './modules/tabs.js';
import { tmSliders } from './modules/tmSliders.js';
import { tours } from './modules/tours.js';
import { toursSlider } from './modules/toursSlider.js';
import Micromodal from 'micromodal';
import { sqSlider } from './modules/sqSlider.js';
import { routeMap } from './modules/routeMap.js';
import { revSlider } from './modules/revsSlider.js';

import { objectSliders } from './modules/objectSliders.js';
import { objectRange } from './modules/objectRange.js';
import { objectRevs } from './modules/objectRevs.js';
import { objectMap } from './modules/objectMap.js';
import { careerSlider } from './modules/careerSlider.js';
import { careerGallery } from './modules/careerGallery.js';
import { rentSlider } from './modules/rentSlider.js';
import { btnTabs } from './modules/btnTabs.js';
import { specSlider } from './modules/specSlider.js';
import { restSlider } from './modules/restSlider.js';
import { vds } from './modules/vds.js';
import { dbl } from './modules/dbl.js';
import { bVideo } from './modules/bVideo.js';
import { order } from './modules/order.js';
import { manageSlider } from './modules/manageSlider.js';
import { inputMask } from './modules/inputMask.js';

flsFuncs.isWebp();

document.addEventListener('DOMContentLoaded', () => {
    Micromodal.init();
    tours();
    benefitsSlider();
    intSlider();
    tabs('.services', '.services__tabs', '.services__tabs_item', '.services__content_item');
    tabs('.press', '.press__tabs', '.press__tabs_item', '.press__tabscontent_item');
    tabs('.press-page__body_main', '.press-page__body_main_tabs', '.press-page__body_main_tabs_item', '.press-page__body_main_list');
    tabs('.contacts-page__body_main', '.contacts-page__body_main_tabs', '.contacts-page__body_main_tabs_item', '.contacts-page__body_main_tabscontent_item');
    pressSlider();
    tabs('.product__tm_in', '.product__tm_tabs', '.product__tm_tabs_item', '.product__tm_tabscontent_item');
    tmSliders();
    prodChart();
    tabs('.product__anl', '.product__anl_tabs', '.product__anl_tabs_item', '.product__anl_tabscontent_item');
    rangeSlider();
    toursSlider();
    mobmenu();
    mapCt();
    mapItemSlider();
    filterSelect();
    fltr();
    normalSelect();
    careerAcc();
    galleryScript();
    tabs('.partners__in', '.partners__tabs', '.partners__tabs_item', '.partners__body_list');
    tabs('.fav-page__body_in', '.fav-page__body_tabs', '.fav-page__body_tabs_item', '.fav-page__body_content_list');
    tabs('.partner__rep_content', '.partner__rep_content_tabs_in', '.partner__rep_content_tabs_item_mask', '.partner__rep_content_item');
    sqSlider();
    routeMap();
    revSlider();
    tabs('.manage__ind', '.manage__ind_tabs', '.manage__ind_tabs_item', '.manage__ind_item');
    tabs('.contacts-page', '.contacts-page__tabs', '.contacts-page__tab', '.contacts-page__main_item');
    tabs('.contacts-page', '.contacts-page__mobile_tabs', '.contacts-page__mobile_tab', '.contacts-page__main_item');
    tabs('.faq__main', '.faq__main_body_content_tabs', '.faq__main_body_content_tabs_item', '.faq__main_body_content_item')
    
    
    objectSliders();
    objectRange();
    objectRevs();
    objectMap();
    careerSlider();
    careerGallery();
    rentSlider();
    btnTabs('.map__head_filter_item-rm', '.map__head_filter_item-rm_tab');
    btnTabs('.map__head_top_tabs', '.map__head_top_tabs_item')
    specSlider();
    restSlider();
    vds();
    dbl();
    bVideo();
    order();
    tabs('.order__body_main_part_body-guestData_passport', '.order__body_main_part_body-guestData_passport_tabs', '.order__body_main_part_body-guestData_passport_tabs_item', '.order__body_main_part_body-guestData_passport_content')
    btnTabs('.order__body_main_part_body-ex_enter_list', '.order__body_main_part_body-ex_enter_item')
    btnTabs('.hero-nav__list', '.hero-nav__item');
    btnTabs('.object__head_tabs', '.object__head_tabs_item');
    manageSlider();
    tabs('.catalogWithTabs', '.catalog__tabs', '.catalog__tabs_item', '.catalog__body')
    tabs('.objects-page', '.catalog__tabs', '.catalog__tabs_item', '.catalog__body')
    inputMask();

})

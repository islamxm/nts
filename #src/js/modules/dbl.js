import Swiper, {Navigation, EffectCube, Pagination, } from 'swiper';

export const dbl = () => {
    // mainSlider
    const el = document.querySelector('.dbl__body_slider');
    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            navigation: {
                prevEl: '.dbl__body_slider_nav_item-prev',
                nextEl: '.dbl__body_slider_nav_item-next'
            },
            pagination: {
                type: 'fraction',
                el: '.dbl__body_slider_nav_frac'
            }
        })
    }

    // inner slider 
    const els = document.querySelectorAll('.dbl__body_slider_sl_content_slider');

    if(els.length > 0) {
        els.forEach(el => {
            const slider = new Swiper(el, {
                slidesPerView: 1,
                modules: [Navigation, Pagination],
                navigation: {
                    prevEl: '.dbl__body_slider_sl_content_slider_nav-prev',
                    nextEl: '.dbl__body_slider_sl_content_slider_nav-next'
                }
            })
        })
    }
} 
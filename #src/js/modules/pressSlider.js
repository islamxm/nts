import Swiper, { Navigation } from "swiper";

export const pressSlider = () => {
    const els = document.querySelectorAll('.press__tabscontent_item');

    if(els.length > 0) {
        els.forEach(el => {
            const slider = new Swiper(el, {
                slidesPerView: 1,
                modules: [Navigation],
                spaceBetween: 20,
                navigation: {
                    prevEl: '',
                    nextEl: ''
                },
                breakpoints: {
                    1000: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                    620: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    } 
                }
            })
        })
    }
}
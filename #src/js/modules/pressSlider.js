import Swiper, { Navigation } from "swiper";

export const pressSlider = () => {
    const els = document.querySelectorAll('.press__tabscontent_item');

    if(els.length > 0) {
        els.forEach(el => {
            const slider = new Swiper(el, {
                slidesPerView: 3,
                modules: [Navigation],
                spaceBetween: 30,
                navigation: {
                    prevEl: '',
                    nextEl: ''
                }
            })
        })
    }
}
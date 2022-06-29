import Swiper, { Navigation } from 'swiper';

export const revSlider = () => {
    const el = document.querySelector('.partner__revs_slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation],
            navigation: {
                prevEl: '.partner__revs_head_navs_item-prev',
                nextEl: '.partner__revs_head_navs_item-next'
            },
            spaceBetween: 30,
            slidesPerView: 1,
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2
                }
            }
        })
    }
}
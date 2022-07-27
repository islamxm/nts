import Swiper, {Navigation} from 'swiper';

export const restSlider = () => {
    const el = document.querySelector('.rest__slider_el');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                prevEl: '.rest__content_nav_item-prev',
                nextEl: '.rest__content_nav_item-next'
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                }
            }
        })
    }
}
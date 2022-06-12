import Swiper, {Navigation} from "swiper";

export const benefitsSlider = () => {
    const el = document.querySelector('.benefits__slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation],
            navigation: {
                prevEl: '.benefits__body_nav_item--prev',
                nextEl: '.benefits__body_nav_item--next'
            },
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {

                620: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            }
        })
    }
}
import Swiper, {Navigation, Pagination} from 'swiper';

export const specSlider = () => {
    const el = document.querySelector('.spec__body_slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                prevEl: '.spec__head_nav_item-prev',
                nextEl: '.spec__head_nav_item-next'
            },
            pagination: {
                type: 'bullets',
                el: '.spec__body_slider_pag',
                bulletClass: 'spec__body_slider_pag_item',
                bulletActiveClass: 'active',
                clickable: true
            },
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        })
    }
}
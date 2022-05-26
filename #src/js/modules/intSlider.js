import Swiper, { EffectFade, Pagination } from "swiper";

export const intSlider = () => {
    const el = document.querySelector('.int__slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Pagination, EffectFade],
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.int__action_pag',
                type: 'bullets',
                bulletClass: 'int__action_pag_item',
                bulletActiveClass: 'active'
            }

        })
    }
}
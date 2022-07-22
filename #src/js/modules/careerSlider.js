import Swiper, {Navigation, EffectFade} from 'swiper';
export const careerSlider = () => {
    const el = document.querySelector('.career-page__lf_body_slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation, EffectFade],
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                prevEl: '.career-page__lf_body_slider_nav_item-prev',
                nextEl: '.career-page__lf_body_slider_nav_item-next'
            },

        })
    }
}
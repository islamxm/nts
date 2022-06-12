import Swiper, {Navigation, EffectFade, EffectCube, EffectCards, EffectCoverflow} from "swiper";

export const toursSlider = () => {
    const el = document.querySelector('.tours__mobile_slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation, EffectFade, EffectCube, EffectCards, EffectCoverflow],
            navigation: {
                prevEl: '.tours__mobile_slider_sl_action_nav_btns_item-prev',
                nextEl: '.tours__mobile_slider_sl_action_nav_btns_item-next'
            },
            effect: 'coverflow',
            speed: 1000
        })
    }
}
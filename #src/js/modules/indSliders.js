import Swiper, {Navigation, EffectCube, Pagination} from 'swiper';

export const indSliders = () => {

    const mainSliderEl = document.querySelectorAll('.invest__ind_content_slider');
    const inSliderEl = document.querySelectorAll('.invest__ind_content_slider_sl_slider');
    if(mainSliderEl.length > 0) {
        mainSliderEl.forEach(mainsl => {
            const slider = new Swiper(mainsl, {
                modules: [EffectCube, Navigation],
                effect: 'cube',
                cubeEffect: {
                    slideShadows: false,
                    shadow: false
                },
                navigation: {
                    prevEl: '.invest__ind_content_head_nav_item-prev',
                    nextEl: '.invest__ind_content_head_nav_item-next'
                }
            })
        })
        
    }
    if(inSliderEl.length > 0) {
        inSliderEl.forEach(el => {
            const slider = new Swiper(el, {
                modules: [Navigation, Pagination],
                navigation: {
                    prevEl: '.invest__ind_content_slider_sl_slider_prev',
                    nextEl: '.invest__ind_content_slider_sl_slider_next'
                },
                pagination: {
                    el: '.invest__ind_content_slider_sl_slider_pag',
                    type: 'bullets',
                    bulletClass: 'invest__ind_content_slider_sl_slider_pag_item',
                    bulletActiveClass: 'active',
                    clickable: true
                }
            })
        })
        
    }
}
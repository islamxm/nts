import Swiper, {Pagination} from "swiper"

export const manageSlider = () => {
    const els = document.querySelectorAll('.manage-obj__body_item_slider');

    if(els.length > 0) {
        els.forEach(el => {
            const slider = new Swiper(el, {
                modules: [Pagination],
                pagination: {
                    el: '.manage-obj__body_item_slider_pag',
                    type: 'bullets',
                    bulletClass: 'manage-obj__body_item_slider_pag_item',
                    bulletActiveClass: 'active',
                    clickable: true
                }
            })
        })
    }
}
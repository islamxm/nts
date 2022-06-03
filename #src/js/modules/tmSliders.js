import Swiper, { Navigation, Pagination } from "swiper";

export const tmSliders = () => {
    const els = document.querySelectorAll('.product__tm_tabscontent_item_slider');

    if(els.length > 0) {
        els.forEach(el => {
            const slider = new Swiper(el, {
                modules: [Navigation, Pagination],
                navigation: {
                    prevEl: '.product__tm_tabscontent_item_slider_nav-prev',
                    nextEl: '.product__tm_tabscontent_item_slider_nav-next'
                },
                pagination: {
                    type: 'bullets',
                    el: '.product__tm_tabscontent_item_slider_pag',
                    bulletClass: 'product__tm_tabscontent_item_slider_pag_item',
                    bulletActiveClass: 'active'
                }
            })
        })
    }
}
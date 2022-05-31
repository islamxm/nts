import Swiper, {Pagination, Navigation} from "swiper"

export const productSlider = () => {
    const el = document.querySelector('.product__hero_slider');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation, Pagination,],
            navigation: {
                prevEl: '.product__hero_slider_sl_info_main_ind_nav_item-prev',
                nextEl: '.product__hero_slider_sl_info_main_ind_nav_item-next'
            },
            pagination: {
                type: 'fraction',
                el: '.product__hero_slider_sl_info_main_ind_frac',
                
            }
        })
    }
}
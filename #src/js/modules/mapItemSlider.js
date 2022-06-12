import Swiper, {Pagination} from 'swiper';

export const mapItemSlider = () => {
    const els = document.querySelectorAll('.mapItem__slider');

    if(els.length > 0) {
        els.forEach(el => {
            
            const slider = new Swiper(el, { 
                modules: [Pagination],
                pagination: {
                    el: '.mapItem__slider_pag',
                    type: 'bullets',
                    bulletClass: 'mapItem__slider_pag_item',
                    bulletActiveClass: 'active'
                }
            })
        })
    }
}
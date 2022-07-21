import Swiper, {Thumbs, Navigation} from 'swiper';

export const objectSliders = () => {
    const mainEl = document.querySelector('.object__info_main_gallery_slider');
    const thumbEl = document.querySelector('.object__info_main_gallery_thumbs_el');
    if(mainEl && thumbEl) {
        const thumbSlider = new Swiper(thumbEl, {
            slidesPerView: 3,
            spaceBetween: 10,
        })
        const mainSlider = new Swiper(mainEl, {
            spaceBetween: 15,
            modules: [Navigation, Thumbs],
            navigation: {
                prevEl: '.object__info_main_gallery_slider_nav-prev',
                nextEl: '.object__info_main_gallery_slider_nav-next'
            },
            thumbs: {
                swiper: thumbSlider
            }
            
        })
        
    }
    
}
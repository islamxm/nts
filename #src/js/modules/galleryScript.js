import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import Swiper, {Navigation} from "swiper";

export const galleryScript = () => {
    const sliderEl = document.querySelector('.gallery__content_slider');


    if(sliderEl) {
        const slider = new Swiper(sliderEl, {
            modules: [Navigation],
            navigation: {
                prevEl: '.gallery__main_nav_item-prev',
                nextEl: '.gallery__main_nav_item-next'
            },
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                1000: {
                    slidesPerView: 2,
                }
            }
        })
    }

    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: false,
        Toolbar: false,
        Image: {
            zoom: false,
            click: false,
            wheel: 'slide'
        }
    })


}
import Swiper, {Autoplay} from "swiper";

export const rentSlider = () => {
    const el = document.querySelector('.rent__dec_slider_el');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Autoplay],
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 3000                
            },
            speed: 1300,
            loop: true,
            breakpoints: {
                1000: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                }
            }
        })
    }
}
import Swiper, {Autoplay} from "swiper";

export const rentSlider = () => {
    const el = document.querySelector('.rent__dec_slider_el');

    if(el) {
        const slider = new Swiper(el, {
            modules: [Autoplay],
            spaceBetween: 30,
            slidesPerView: 3,
            autoplay: {
                delay: 3000                
            },
            speed: 1300,
            loop: true
        })
    }
}
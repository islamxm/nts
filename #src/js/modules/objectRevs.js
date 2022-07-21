import Swiper from 'swiper';

export const objectRevs = () => {
    const el = document.querySelector('.object__revs_body_slider');

    if(el) {
        const slider = new Swiper(el, {
            spaceBetween: 30,
            slidesPerView: 3
        })
    }
}
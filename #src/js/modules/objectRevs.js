import Swiper from 'swiper';

export const objectRevs = () => {
    const el = document.querySelector('.object__revs_body_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 15,
            breakpoints: {
                1000: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        })
    }
}
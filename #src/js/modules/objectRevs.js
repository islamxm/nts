import Swiper, {Navigation} from 'swiper';

export const objectRevs = () => {
    const el = document.querySelector('.object__revs_body_slider');

    if(el) {
        const slider = new Swiper(el, {
            slidesPerView: 1,
            spaceBetween: 15,
            modules: [Navigation],
            navigation: {
                prevEl: '.object__revs_head_nav_item-prev',
                nextEl: '.object__revs_head_nav_item-next'
            },
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
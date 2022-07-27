import Swiper, {Navigation} from 'swiper';

export const vds = () => {
    const el = document.querySelector('.vds__body_slider');
    
    if(el) {
        const slider = new Swiper(el, {
            modules: [Navigation],
            spaceBetween: 20,
            slidesPerView: 1,
            navigation: {
                prevEl: '.vds__head_nav_item-prev',
                nextEl: '.vds__head_nav_item-next'
            },
            breakpoints: {
                900: {
                    spaceBetween: 30,
                    slidesPerView: 4,
                },
                620: {
                    spaceBetween: 20,
                    slidesPerView: 3
                },
                500: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                }
            }
        })
    }


    // videos

    const videos = document.querySelectorAll('.vds__body_slider_sl_video');

    if(videos.length > 0) {
        videos.forEach(videoWrap => {
            let btnVideoWrap = videoWrap.querySelector('.vds__body_slider_sl_video_mask_btn');
            let videoEl = videoWrap.querySelector('video');

            btnVideoWrap.addEventListener('click', () => {
                // для остановки всех остальных плееров
                videos.forEach(stop => {
                    let stopVideoWrap = stop.querySelector('.vds__body_slider_sl_video_mask_btn');
                    let stopEl = stop.querySelector('video');
                    stopVideoWrap.classList.remove('hide');
                    stopEl.pause();
                    stopEl.currentTime = 0;
                    stopEl.removeAttribute('controls');
                })


                btnVideoWrap.parentElement.classList.add('hide');
                videoEl.setAttribute('controls', true);
                videoEl.play();
            })

            videoEl.addEventListener('pause', () => {
                btnVideoWrap.parentElement.classList.remove('hide');
                videoEl.removeAttribute('controls');
            })
        })
    }
}
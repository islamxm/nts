export const bVideo = () => {
    const video = document.querySelector('.video');

    if(video) {
        let videoBtn = video.querySelector('.video__mask_btn');
        let videoEl = video.querySelector('video');

        videoBtn.addEventListener('click', () => {
            if(videoBtn.parentElement.parentElement.classList.contains('block')) {
                videoBtn.parentElement.parentElement.classList.add('show');
                videoBtn.parentElement.classList.remove('block');
                videoEl.play();
                videoEl.setAttribute('controls', true);
            }
        })

        videoEl.addEventListener('pause', () => {
            videoBtn.parentElement.parentElement.classList.add('block');
            videoBtn.parentElement.parentElement.classList.remove('show');
            videoEl.removeAttribute('controls');
        })
    }
}
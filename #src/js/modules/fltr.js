export const fltr = () => {
    const trigger = document.querySelector('.map__filter_top_search');
    const el = document.querySelector('.fltr');
    const close = document.querySelector('.fltr__head_close');

    if(trigger) {
        trigger.addEventListener('click', (e) => {
            el.classList.add('active');
        })
    }

    if(close) {
        close.addEventListener('click', () => {
            el.classList.remove('active');
        })
    }
}
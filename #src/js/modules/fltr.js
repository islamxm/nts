export const fltr = () => {
    const trigger = document.querySelector('.map__head_top_action_btn-pp');
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

    if(el) {
        el.addEventListener('click', (e) => {
            if(e.target.classList.contains('fltr')) {
                el.classList.remove('active')
            }
        })
    }
}
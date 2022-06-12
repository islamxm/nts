import Accordion from 'accordion-js';

export const mobmenu = () => {
    const el = document.querySelector('.mobmenu__menu');
    const trigger = document.querySelector('.header__mobile_action_burger');
    const menu = document.querySelector('.mobmenu');
    const close = document.querySelector('.mobmenu__head_btn');

    if(el) {
        const acc = new Accordion(el);
    }

    if(trigger) {
        trigger.addEventListener('click', () => {
            menu.classList.add('active');
        })
    }

    if(close) {
        close.addEventListener('click', () => {
            menu.classList.remove('active');
        })
    }
}
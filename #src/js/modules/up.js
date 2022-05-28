export const up = () => {
    const btn = document.querySelector('.footer__main_right_item-action_btn');
    const wrapper = document.querySelector('.wrapper');

    if(btn) {
        btn.addEventListener('click', () => {
            wrapper.scrollTo(0, 0);
            console.log('clicked');
        })
    }
}
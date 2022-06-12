import Choices from "choices.js";

export const filterSelect = () => {
    const els = document.querySelectorAll('.filterSelect__el');

    if(els.length > 0) {
        els.forEach(el => {
            const slct = new Choices(el, {
                itemSelectText: ''
            })
        })
    }
}
import Choices from "choices.js";

export const normalSelect = () => {
    const els = document.querySelectorAll('.normalSelect__el');

    if(els.length > 0) {
        els.forEach(el => {
            const slct = new Choices(el, {
                itemSelectText: ''
            })
        })
    }
}
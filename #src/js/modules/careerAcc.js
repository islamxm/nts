import Accordion from 'accordion-js';

export const careerAcc = () => {
    const el = document.querySelector('.career-page__vac_body_table');
    if(el) {
        const acc = new Accordion(el, {
            elementClass: 'career-page__vac_body_table_row',
            triggerClass: 'career-page__vac_body_table_item-add_btn',
            panelClass: 'career-page__vac_body_table_row_body',
    
        })
    }
    
}
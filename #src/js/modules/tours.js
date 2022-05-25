export const tours = () => {
    const els = document.querySelectorAll('.tours__body_item');
    const parent = document.querySelector('.tours__body');



    if(parent) {
        let fill = parent.offsetWidth - 320;

        if(els.length > 0) {

            els.forEach(i => {
                if(i.classList.contains('active')) {
                    els.forEach(remove => {
                        let removeContent = remove.querySelector('.tours__body_item_main')
                        remove.classList.remove('active');
                        removeContent.style.cssText = `width: 0px`;
                        
                    })
                    let content = i.querySelector('.tours__body_item_main');
                    i.classList.add('active');
                    content.style.cssText = `width: ${fill}px`;
                }
                i.addEventListener('click', (e) => {
                    els.forEach(remove => {
                        let removeContent = remove.querySelector('.tours__body_item_main')
                        remove.classList.remove('active');
                        removeContent.style.cssText = `width: 0px`;
                        
                    })
                    let content = i.querySelector('.tours__body_item_main');
                    i.classList.add('active');
                    content.style.cssText = `width: ${fill}px`;
    
                    
                })
            })
        }
    }
    





    
}
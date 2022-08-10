

export const inputMask = () => {
    let tels = document.querySelectorAll('.telMask');

    if(tels.length > 0) {
        tels.forEach(tel => {
            let telMask = IMask(tel, {
                mask: '+{7}(000)000-00-00'
            })
        })
    }
}
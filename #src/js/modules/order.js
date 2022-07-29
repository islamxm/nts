import IMask from 'imask';

export const order = () => {
    const telInps = document.querySelectorAll('.input__tel');

    if(telInps.length > 0) {
        telInps.forEach(telInp => {
            const telMask = IMask(telInp, {
                mask: '+{7}(000)000-00-00'
            })
        })
    }

    const serialInps = document.querySelectorAll('.input__serial');

    if(serialInps.length > 0) {
        serialInps.forEach(serialInp => {
            const serialMask = IMask(serialInp, {
                mask: '00 00'
            })
        })
    }

    const numberInps = document.querySelectorAll('.input__number');

    if(numberInps.length > 0) {
        numberInps.forEach(numberInp => {
            const numberMask = IMask(numberInp, {
                mask: '000000'
            })
        })
    }

    const exSerialInps = document.querySelectorAll('.input__exSerial');
    
    if(exSerialInps.length > 0) {
        exSerialInps.forEach(exSerialInp => {
            const exSerialMask = IMask(exSerialInp, {
                mask: '00'
            })
        })
    }

    const exNumberInps = document.querySelectorAll('.input__exNumber');
    // pattern: '[a-zA-Zа-яА-Я]'
    if(exNumberInps.length > 0) {
        exNumberInps.forEach(exNumberInp => {
            const exNumberMask = IMask(exNumberInp, {
                mask: '0000000',
                
            })
        })
    }


    const partInps = document.querySelectorAll('.input__part');

    if(partInps.length > 0) {
        partInps.forEach(partInp => {
            const partMask = IMask(partInp, {
                mask: '000-000'
            })
        })
    }

    const dateInps = document.querySelectorAll('.input__date');
    if(dateInps.length > 0) {
        dateInps.forEach(dateInp => {
            const dateMask = IMask(dateInp, {
                mask: Date,
                // min: new Date(1990, 0, 1),
                // max: new Date(2020, 0, 1),
                lazy: false
            })
        })
    }


    const cardNumber = document.querySelector('.input__cardNumber');

    if(cardNumber) {
        const cardNumberMask = IMask(cardNumber, {
            mask: '0000 0000 0000 0000'
        })
    }


    const cardName = document.querySelector('.input__cardName');

    const cardMnth = document.querySelector('.input__cardMnth');

    if(cardMnth) {
        const cardMnthMask = IMask(cardMnth, {
            mask: '00'
        })
    }


    const cardYear = document.querySelector('.input__cardYear');

    if(cardYear) {
        const cardYearMask = IMask(cardYear, {
            mask: '00'
        })
    }


    const cardCvc = document.querySelector('.input__cardCvc');

    if(cardCvc) {
        const cardCvcMask = IMask(cardCvc, {
            mask: '000'
        })
    }




    const ptrCheckbox = document.querySelectorAll('.ptrCheckbox');

    if(ptrCheckbox.length > 0) {
        ptrCheckbox.forEach(i => {
            i.addEventListener('change', () => {
                if(i.checked) {
                    i.parentElement.parentElement.previousElementSibling.setAttribute('disabled', true);
                } else {
                    i.parentElement.parentElement.previousElementSibling.removeAttribute('disabled');
                }
            })
        })
    }
}
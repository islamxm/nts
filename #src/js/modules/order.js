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
}
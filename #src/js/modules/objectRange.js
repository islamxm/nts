import noUiSlider from 'nouislider';

export const objectRange = () => {
    const els = document.querySelectorAll('.object__cond_action_part_range');

    if(els.length > 0) {
        els.forEach(el => {
            noUiSlider.create(el, {
                range: {
                    'min': 0,
                    'max': 23
                },
                step: 1,
                animate: false,
                start: [12, 20],
                connect: true,
                orientation: 'horizontal',
                tooltips: true,
                format: {
                    to: (value) => {
                        return `${Math.floor(value)}:00`
                    },
                    from: (value) => {
                        return Number(value)
                    }
                }
                
            })
        })
    }
}
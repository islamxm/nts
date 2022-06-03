import noUiSlider from 'nouislider';

export const rangeSlider = () => {
    var formatForSlider = {
        from: function (formattedValue) {
            return Number(formattedValue);
        },
        to: function(numericValue) {
            return Math.round(numericValue);
        }
    };

    const price = document.querySelector('.product__snt_action_slider_el-price');
    

    const date = document.querySelector('.product__snt_action_slider_el-date')
    


    if(price) {
        const priceValue = price.previousElementSibling;
        noUiSlider.create(price, {
            start: 10000000,
            animate: true,
            range: {
                min: 1000000,
                max: 10000000
            },
            step: 100,
            connect: [true, false],
            format: formatForSlider,
        });

        price.noUiSlider.on('update', function (values, handle) {
            priceValue.innerHTML = `${values[handle]} ₽`;
        });
    }

    if(date) {
        const dateValue = date.previousElementSibling;
        noUiSlider.create(date, {
            start: 24,
            animate: true,
            range: {
                min: 1,
                max: 48
            },
            step: 1,
            connect: [true, false],
            format: formatForSlider,
        });

        date.noUiSlider.on('update', function (values, handle) {
            dateValue.innerHTML = `${values[handle]} мес`;
        });
    }
    
}
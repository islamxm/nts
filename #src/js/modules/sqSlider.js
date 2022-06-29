import { Fancybox } from "@fancyapps/ui";

export const sqSlider = () => {
    Fancybox.bind('[data-fancybox="sqitem"]', {
        Thumbs: false,
        Toolbar: false,
        Image: {
            zoom: false,
            click: false,
            wheel: 'slide'
        }
    })
}
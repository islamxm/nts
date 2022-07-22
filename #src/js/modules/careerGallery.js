import {Fancybox} from '@fancyapps/ui';

export const careerGallery = () => {
    Fancybox.bind('[data-fancybox="lfGallery"]', {
        Thumbs: false,
        Toolbar: false,
        Image: {
            zoom: false,
            click: false,
            wheel: 'slide'
        }
    })
}
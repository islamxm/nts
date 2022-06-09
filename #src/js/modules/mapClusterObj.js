const mapClusterObj = {
    medic: {
        name: 'Медицина',
        style: {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '../img/icons/mapIcon-health.svg',
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15],
        },
        items: [
            {
                center: [55.667276, 37.798068],
                name: 'Медицина 1'
            },
            {
                center: [55.711450, 37.788567],
                name: 'Медицина 2'
            },

        ]
    },
    sport: {
        name: 'Спорт',
        style: {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '../img/icons/mapIcon-sport.svg',
            iconImageSize: [30, 30],
            iconImageOffset: [-15, -15],
        },
        items: [
            {
                center: [55.811585, 37.425337],
                name: 'Медицина 1'
            },
            {
                center: [55.870638, 37.537157],
                name: 'Медицина 2'
            },
            {
                center: [55.861597, 37.648976],
                name: 'Медицина 3'
            }
        ] 
    }  
};


export default mapClusterObj;
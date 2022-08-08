export const routeMap = () => {
    const el = document.querySelector('#routeMap');

    ymaps.ready(function () {
        var myMap = new ymaps.Map(el, {
            center: [43.582612,39.760315],
            zoom: 9,
        }),
        // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        //     '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        // ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Сочи, Водораздельная 5/1',
            // balloonContent: 'Это красивая метка'
        }, {
            iconLayout: 'default#image',
            iconImageHref:'./img/icons/map-point.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -20]
        });

        myMap.geoObjects
        .add(myPlacemark)
    }); 
      
    
}
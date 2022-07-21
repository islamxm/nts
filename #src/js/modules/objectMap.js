export const objectMap = () => {
    const el = document.querySelector('#objectMap');

    if(el) {
        // console.log(el.dataset.coords.toArray)
        ymaps.ready(function () {

            var myMap = new ymaps.Map(el, {
                center: [Number(el.dataset.coordx), Number(el.dataset.coordy)],
                zoom: 9,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: el.dataset.image,
                // Размеры метки.
                iconImageSize: [80, 80],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-40, -40]
            });
            myMap.geoObjects
            .add(myPlacemark)
        });
    }
}
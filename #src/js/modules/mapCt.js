import { mapItemSlider } from "./mapItemSlider.js";


export const mapCt = () => {
    const data = [
        {
            coord: [55.711450, 37.788567]
        },
        {
            coord: [55.667276, 37.798068]
        }
    ]
    const mapModal = document.querySelector('.map__el');
    
    ymaps.ready(function () {

        var myMap = new ymaps.Map('mapCt', {
            center: [55.755773, 37.617761],
            zoom: 9,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });

        data.forEach(i => {
            
            myMap.geoObjects.add(new ymaps.Placemark(i.coord, {
                hintContent: 'hintContent',
                balloonContentBody: [
                    
                    `
                    <div class="mapItem">
                    <button class="mapItem__fav">

                    </button>
                    <div class="mapItem__slider swiper">
                        <div class="mapItem__slider_wr swiper-wrapper">
                            <div class="mapItem__slider_sl swiper-slide">
                                <img src="./img/map/map-mobile.png" alt="">
                            </div>
                            <div class="mapItem__slider_sl swiper-slide">
                                <img src="./img/map/map-mobile.png" alt="">
                            </div>
                        </div>
                        <div class="mapItem__slider_pag"></div>
                    </div>
                    <div class="mapItem__body">
                        <div class="mapItem__body_name">ЖК FORST</div>
                        <div class="mapItem__body_text">
                            Проект расположен на Симоновской набережной в непосредственной близости к воде. Такое место гарантирует атмосферу уединенного острова, сохраняя возможность быстрого доступа к эпицентру активной жизни.
                        </div>
                        <div class="mapItem__body_price">
                            от 50 млн руб
                        </div>
                        <a href="#" download="#" class="mapItem__body_dwn">
                            <div class="mapItem__body_dwn_icon"></div>
                            <div class="mapItem__body_dwn_text">Скачать презентацию</div>
                        </a>
                    </div>
                </div>
                    `
                ]
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: './img/icons/map-point.svg',
                iconImageSize: [40, 40],
                iconImageOffset: [-20, -20],

            }))
        })

        myMap.geoObjects.events.add('click', function(e){

            // myMap.setCenter(e.get('target').geometry.getBounds()[0]);
            setTimeout(() => {
                mapItemSlider();  
            }, 1000);
             
            
            // myMap.geoObjects.each(function(item){
            //     item.options.set('iconImageHref', './img/icons/map-point.svg');
            //     item.options.set('iconImageSize', [40, 40]);
            //     item.options.set('iconImageOffset', [-20, -20]);
            // })
            // myMap.balloon.open().then(mapItemSlider()).then(console.log('asasd'))
            // e.get('target').options.set('iconImageHref', './img/icons/map-active.svg');
            // e.get('target').options.set('iconImageSize', [60, 60]);
            // e.get('target').options.set('iconImageOffset', [-30, -30]);

            
        })
    });

    const trigger = document.querySelector('#mapCtTrigger');
    const close = document.querySelector('.map__el_head_main_close');

    if(trigger) {
        trigger.addEventListener('click', () => {
            mapModal.classList.add('active');
        })
    }

    if(close) {
        close.addEventListener('click', () => {
            mapModal.classList.remove('active');
        })
    }
}
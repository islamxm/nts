import Swiper, {Pagination} from 'swiper';

export const mapCt = () => {
    let data = {
        "type": "FeatureCollection",
        "features": [
            {"type": "Feature", "id": 0, "geometry": {"type": "Point"}, "properties": {"address": "Москва, Часовая, 26",}},
            {"type": "Feature", "id": 1, "geometry": {"type": "Point"}, "properties": {"address": "Москва, Бойцовая, 19",}},
            {"type": "Feature", "id": 2, "geometry": {"type": "Point"}, "properties": {"address": "Москва, Чистова, 21",}},
            {"type": "Feature", "id": 3, "geometry": {"type": "Point"}, "properties": {"address": "Москва, Клочкова, 6",}}
        ]
    }

    const mapEl = document.getElementById('mapCt');
    const objList = document.querySelectorAll('.map__body_content_item');
    const sliders = document.querySelectorAll('.map__card_main_slider');
    const mapMobileBtn = document.querySelector('.map__head_top_mob');
    const mapBody = document.querySelector('.map__body');
    const mapMobileClose = document.querySelector('.map__body_el_head_close');


    if(mapMobileBtn && mapBody) {
        mapMobileBtn.addEventListener('click', () => {
            mapBody.classList.add('active');
        })
        mapMobileClose.addEventListener('click', () => {
            mapBody.classList.remove('active');
        })
    }

    if(sliders.length > 0) {
        sliders.forEach(el => {
            const slider = new Swiper(el, {
                modules: [Pagination],
                pagination: {
                    el: '.map__card_main_slider_pag',
                    type: 'bullets',
                    bulletClass: 'map__card_main_slider_pag_item',
                    bulletActiveClass: 'active',
                    clickable: true
                }
            })
        })
    }

    if(mapEl && objList.length > 0) {
        ymaps.ready(mapInit);

        function mapInit() {
            let map = new ymaps.Map(mapEl, {
                center: [55.751574, 37.573856],
                zoom: 9,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

            let objectManager = new ymaps.ObjectManager({
                clusterize: false,
                preset: 'islands#greenIcon'
            })


            

            data.features.forEach(function(obj, index) {
                let myGeocode = ymaps.geocode(obj.properties.address);
                myGeocode.then(function(res) {
                    let newCoords = res.geoObjects.get(0).geometry.getCoordinates();
                    obj.geometry.coordinates = newCoords
                    map.geoObjects.add(new ymaps.Placemark(obj.geometry.coordinates, {
                        nid: obj.properties.address
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref:'./img/icons/map-point.svg',
                        iconImageSize: [16, 16],
                        iconImageOffset: [-8, -8]
                    }))
                })
            })

            

           function hideList() {
                objList.forEach(i => {
                    i.classList.remove('active');
                    i.classList.add('hide');
                })
           }

            map.geoObjects.events.add('click', function(e){

                

                map.geoObjects.each(function(item){
                    item.options.set(
                        {
                            iconLayout: 'default#image',
                            iconImageHref:'./img/icons/map-point.svg',
                            iconImageSize: [20, 20],
                            iconImageOffset: [-10, -10]
                        }
                    )
                })


                objList.forEach(list => {
                    if(e.get('target').properties.get('nid') == list.dataset.address) {
                        hideList();
                        list.classList.add('active')
                        list.classList.remove('hide')
                    }
                })

                e.get('target').options.set(
                    {
                        iconLayout: 'default#image',
                        iconImageHref:'./img/icons/map-active.svg',
                        iconImageSize: [30, 30],
                        iconImageOffset: [-15, -15]
                    }
                )
            })
        }
    }
}
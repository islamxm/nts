import mapClusterObj from "./mapClusterObj.js";





export const mapCluster = () => {

    ymaps.ready(function () {
        var myMap = new ymaps.Map(

            'clusterMap', 
            
            {center: [55.751574, 37.573856],zoom: 11,behaviors: ['default', 'scrollZoom']}, 
            
            {searchControlProvider: 'yandex#search'}
        );

        let clusterer = new ymaps.Clusterer({
            groupByCoordinates: false,        
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false,  
            clusterIcons: [
                {
                    href: '../img/icons/mapIcon.svg',
                    size: [50, 50],
                    offset: [-25, -25]
                },
            ],
            clusterNumbers: [2],
            clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">{{ properties.geoObjects.length }}</div>'
            ),
        });        


        // getPointData = function (index) {
        //     return {
        //         balloonContentHeader: '<font size=3><b><a target="_blank" href="https://yandex.ru">Здесь может быть ваша ссылка</a></b></font>',
        //         balloonContentBody: '<p>Ваше имя: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
        //         balloonContentFooter: '<font size=1>Информация предоставлена: </font> балуном <strong>метки ' + index + '</strong>',
        //         clusterCaption: 'метка <strong>' + index + '</strong>'
        //     };
        // },


        const plcMedic = [
            new ymaps.Placemark([55.667276, 37.798068], null, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '../netasset/img/icons/mapIcon-health.svg',
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -15],
            }),
            new ymaps.Placemark([55.711450, 37.788567], null, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '../netasset/img/icons/mapIcon-health.svg',
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -15],
            }),
        ]

        const plcSport = [
            new ymaps.Placemark([55.811585, 37.425337], null, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '../netasset/img/icons/mapIcon-sport.svg',
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -15],
            }),
            new ymaps.Placemark([55.870638, 37.537157], null, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: '../netasset/img/map-img.png',
                iconImageSize: [80, 80],
                iconImageOffset: [-40, -40],
            }),
        ]


        let createPlacemarks = function(item, clusterize, style) {
            let placemark = new ymaps.Placemark(item.center, null, style);
            clusterize.add(placemark);
        }

        let removePlacemarks = function(item, clusterize) {
            let placemark = new ymaps.Placemark(item.center);
            const removeArr = [];
            removeArr.push(placemark);
            clusterize.removeAll(removeArr);
            console.log('asds');
        }


        let removeCluster = function(groupName) {
            for(var j = 0, m = groupName.items.length; j < m; j++) {
                removePlacemarks(groupName.items[j], clusterer)
            }
            // myMap.geoObjects.add(clusterer);
            
        }

        let addCluster = function(groupName) {
            for(var j = 0, m = groupName.items.length; j < m; j++) {
                createPlacemarks(groupName.items[j], clusterer, {
                    iconLayout: groupName.style.iconLayout,
                    iconImageHref: groupName.style.iconImageHref,
                    iconImageSize: groupName.style.iconImageSize,
                    iconImageOffset: groupName.style.iconImageOffset
                });
            }
            myMap.geoObjects.add(clusterer);
            
        }

        // clusterer.add(plcMedic);
        // clusterer.add(plcSport);

        myMap.geoObjects.add(clusterer);



        const tabs = document.querySelectorAll('.mapCluster__body_tabs_item');
        tabs.forEach((tab, index) => {
            // if(index == 0) {
            //     tab.classList.add('active');
            // }

            tab.addEventListener('click', () => {
                tab.classList.toggle('active');
                if(tab.classList.contains('active') && tab.dataset.cluster == 'plcMedic') {
                    clusterer.add(plcMedic);
                }
                if(!tab.classList.contains('active') && tab.dataset.cluster == 'plcMedic') {
                    clusterer.remove(plcMedic);
                }
                if(tab.classList.contains('active') && tab.dataset.cluster == 'plcSport') {
                    clusterer.add(plcSport);
                }
                if(!tab.classList.contains('active') && tab.dataset.cluster == 'plcSport') {
                    clusterer.remove(plcSport);
                }
            })


        })
        
    







    
        // myMap.setBounds(clusterer.getBounds(), {
        //     checkZoomRange: true
        // });
    });
}
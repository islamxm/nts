export const routeMap = () => {
    const el = document.querySelector('#routeMap');

    if(el) { 
        ymaps.ready(function () {
            var myMap = new ymaps.Map(el, {
                center: [55.753994, 37.622093],
                zoom: 9,
            });
        });  
    }
      
    
}
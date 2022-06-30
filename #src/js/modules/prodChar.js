import ApexCharts from 'apexcharts'

export const prodChart = () => {
    const els = document.querySelectorAll('.chart');

    if(els.length > 0) {
        els.forEach(el => {
            var options = {
                series: [{
                name: '',
                data: [0, 60, 100]
              }],
              colors: ['#50A627'],
              
                chart: {
                height: 300,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              
            //   xaxis: {
            //     type: 'datetime',
            //     categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            //   },
            //   tooltip: {
            //     x: {
            //       format: 'dd/MM/yy HH:mm'
            //     },
            //   },
              };
        
              var chart = new ApexCharts(el, options);
              chart.render();
        })
    }

    
}
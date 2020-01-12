

var ctx = document.getElementById('my-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
            datasets: [{
                label: 'Valor',
                data: [120, 80, 170, 105, 200, 3],
        
                backgroundColor: '#10769E',
                
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
          
            },
            title: {
                display: true,
                text: 'Atributos',
                fontSize: 26,
                position: 'top',
                fontStyle: 'normal'
            },           
        }
    });
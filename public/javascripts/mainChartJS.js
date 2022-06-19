const ctx1 = $('#myChart1');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Total users','instagram follow','invite friend'],
        datasets: [{
            label: 'Total users',
            data: [5460, 4512, 3248],
            //fill:true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:25000
            }
        }
    }
});

const ctx1Costs = $('#myChart1Costs');
const myChart1Costs = new Chart(ctx1Costs, {
    type: 'bar',
    data: {
        labels: ['Total costs','Development','Advertising','prize'],
        datasets: [{
            label: 'Total costs(by$)',
            data: [800, 700, 0,100],
            //fill:true,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:2000
            }
        }
    }
});



const ctx2 = $('#myChart2');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Total users','instagram follow','invite friend'],
        datasets: [{
            label: 'Total users',
            data: [13154, 1257, 5869],
            //fill:true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:25000
            }
        }
    }
});
const ctx2Costs = $('#myChart2Costs');
const myChart2Costs = new Chart(ctx2Costs, {
    type: 'bar',
    data: {
        labels: ['Total costs','Development','Advertising','prize'],
        datasets: [{
            label: 'Total costs(by$)',
            data: [900, 800, 100,0],
            //fill:true,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:2000
            }
        }
    }
});


const ctx3 = $('#myChart3');
const myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Total users','instagram follow','invite friend'],
        datasets: [{
            label: 'Total users',
            data: [1125, 324, 56],
            //fill:true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:25000
            }
        }
    }
});
const ctx3Costs = $('#myChart3Costs');
const myChart3Costs = new Chart(ctx3Costs, {
    type: 'bar',
    data: {
        labels: ['Total costs','Development','Advertising','prize'],
        datasets: [{
            label: 'Total costs(by$)',
            data: [100, 100, 0,0],
            //fill:true,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:2000
            }
        }
    }
});

const ctx4 = $('#myChart4');
const myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Total users','instagram follow','invite friend'],
        datasets: [{
            label: 'Total users',
            data: [23697, 4587, 8957],
            //fill:true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:25000
            }
        }
    }
});
const ctx4Costs = $('#myChart4Costs');
const myChart4Costs = new Chart(ctx4Costs, {
    type: 'bar',
    data: {
        labels: ['Total costs','Development','Advertising','prize'],
        datasets: [{
            label: 'Total costs(by$)',
            data: [2000, 1200, 300,500],
            //fill:true,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:2000
            }
        }
    }
});

const ctx5 = $('#myChart5');
const myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Total users','instagram follow','invite friend'],
        datasets: [{
            label: 'Total users',
            data: [23305, 17545, 12840],
            //fill:true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:25000
            }
        }
    }
});
const ctx5Costs = $('#myChart5Costs');
const myChart5Costs = new Chart(ctx5Costs, {
    type: 'bar',
    data: {
        labels: ['Total costs','Development','Advertising','prize'],
        datasets: [{
            label: 'Total costs(by$)',
            data: [1900, 1200, 500,200],
            //fill:true,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:2000
            }
        }
    }
});

const ctx6 = $('#myChart6');
const myChart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['Total users','instagram follow','invite friend'],
        datasets: [{
            label: 'Total users',
            data: [8302, 4785, 3658],
            //fill:true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:25000
            }
        }
    }
});
const ctx6Costs = $('#myChart6Costs');
const myChart6Costs = new Chart(ctx6Costs, {
    type: 'bar',
    data: {
        labels: ['Total costs','Development','Advertising','prize'],
        datasets: [{
            label: 'Total costs(by $)',
            data: [1000, 800, 100,100],
            //fill:true,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:2000
            }
        }
    }
});

const ctx7 = $('#myChart7');
const myChart7 = new Chart(ctx7, {
    type: 'bar',
    data: {
        labels: ['Total users','instagram follow','invite friend'],
        datasets: [{
            label: 'Total users',
            data: [10287, 7325, 5149],
            //fill:true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:25000
            }
        }
    }
});
const ctx7Costs = $('#myChart7Costs');
const myChart7Costs = new Chart(ctx7Costs, {
    type: 'bar',
    data: {
        labels: ['Total costs','Development','Advertising','prize'],
        datasets: [{
            label: 'Total costs(by$)',
            data: [1700, 1100, 200,400],
            //fill:true,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:2000
            }
        }
    }
});


const ctx8 = $('#myChart8');
const myChart8 = new Chart(ctx8, {
    type: 'bar',
    data: {
        labels: ['Total users','instagram follow','invite friend'],        datasets: [{
            label: 'Total users',
            data: [1145, 125, 40],
            //fill:true,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                //'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                //'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:25000
            }
        }
    }
});
const ctx8Costs = $('#myChart8Costs');
const myChart8Costs = new Chart(ctx8Costs, {
    type: 'bar',
    data: {
        labels: ['Total costs','Development','Advertising','prize'],
        datasets: [{
            label: 'Total costs(by$)',
            data: [200, 200, 0,0],
            //fill:true,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            //borderCapStyle: 'butt'
        }]
    },
    options: {
        scales: {
            y:{
                min:1,
                max:2000
            }
        }
    }
});
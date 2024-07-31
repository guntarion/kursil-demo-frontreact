import ConfigDB from '../Config/Theme-Config';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement,
    ArcElement,
    RadialLinearScale
} from 'chart.js';

const primary = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
const secondary = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement,
    ArcElement,
    RadialLinearScale
);
export const barChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'y',
            lagend: 'y',
            data: [35, 59, 80, 81, 56, 55, 40],
            borderColor: primary,
            backgroundColor: 'rgba(36, 105, 92, 0.4)',
            highlightFill: 'rgba(36, 105, 92, 0.6)',
            highlightStroke: primary,
            borderWidth: 2
        },
        {
            label: 'z',
            lagend: 'z',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: secondary,
            backgroundColor: 'rgba(186, 137, 93, 0.4)',
            highlightFill: 'rgba(186, 137, 93, 0.6)',
            highlightStroke: secondary,
            borderWidth: 2
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
};
export const barChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
};

export const lineChartData = {
    labels: [
        'Mon',
        'Tue',
        'Wen',
        'Thus',
        'Fri',
        'Sat',
        'Sun'
    ],
    datasets: [
        {
            data: [
                10,
                59,
                80,
                81,
                56,
                55,
                40
            ],
            label: 'Data1',
            fill: true,
            borderColor: primary,
            backgroundColor: 'rgba(145, 46, 252, 0.3)',
            borderWidth: 2
        },
        {
            data: [
                28,
                48,
                40,
                19,
                86,
                27,
                90
            ],
            label: 'Data2',
            borderColor: secondary,
            backgroundColor: 'rgba(247, 49, 100, 0.3)',
            borderWidth: 2
        }
    ],
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
};
export const lineChartOptions = {
    maintainAspectRatio: true,
    legend: {
        display: false,
    },
    scales: {
        xAxes: {
            stacked: false,
        },
        yAxes: {
            stacked: false,
        }
    },
    plugins: {
        datalabels: {
            display: false,
        }
    }
};
export const doughnutData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{
        data: [350, 450, 100],
        backgroundColor: [primary, secondary, '#51bb25']
    }]
};
export const doughnutOption = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
};
export const polarData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'],
    datasets: [
        {
            data: [300, 500, 100, 40, 120],
            backgroundColor: [primary, secondary, '#f8d62b', '#51bb25', '#a927f9']
        },

    ],
};

export const polarOption = {
    legend: {
        display: false,
    },
};

export const RadarChartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 70, 79, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(99, 98, 231, 0.2)',
        borderColor: primary,
        pointBackgroundColor: primary,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: primary
    }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 76, 27, 80],
        fill: true,
        backgroundColor: 'rgba(255, 197, 0, 0.2)',
        borderColor: secondary,
        pointBackgroundColor: secondary,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: secondary
    }],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                borderWidth: 2
            }
        }
    }
};
export const lineChart2Data = {
    labels: ['', '10', '20', '30', '40', '50', '60', '70', '80'],
    datasets: [{
        backgroundColor: 'rgba(113, 113, 113, 0.2)',
        strokeColor: '#717171',
        pointColor: '#717171',
        borderColor: secondary,
        pointColor: secondary,
        data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
        // lineTension: 0,
    },
    {
        backgroundColor: 'rgba(186, 137, 93, 0.2)',
        strokeColor: secondary,
        pointColor: secondary,
        borderColor: '#51bb25',
        pointColor: '#51bb25',
        data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
        // lineTension: 0,
    },
    {
        backgroundColor: 'rgb(36, 105, 92, 0.2)',
        borderColor: primary,
        pointColor: primary,
        data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
        // lineTension: 0,
    }
    ]
};
export const lineChart2option = {
    maintainAspectRatio: false,
    animation: {
        duration: 0
    },
    legend: {
        display: false,
    },
    scaleShowVerticalLines: false,
    plugins: {
        datalabels: {
            display: false,
            color: 'white'
        }
    }
};
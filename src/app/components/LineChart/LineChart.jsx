import React from 'react';
import { Line } from 'react-chartjs-2';
import "./LineChart.css";

const generateChartData = (data) => {
    const labels = []
    const mean = []
    const median = []
    const mode = []

    for (var i = 0; i < data.length; i++){
        labels.push(data[i].decade)
        mean.push(data[i].mean)
        median.push(data[i].median)
        mode.push(data[i].mode)
    }


    return {
        labels: labels,
        datasets: [
            {
                label: 'Média',
                data: mean,
                fill: false,
                borderColor: 'rgba(252, 253, 255, 0.4)',
                tension: 0.1
            }, 
            {
                label: 'Moda',
                data: mode,
                fill: false,
                borderColor: 'rgba(0, 51, 255, 0.4)',
                tension: 0.1
            },
            {
                label: 'Mediana',
                data: median,
                fill: false,
                borderColor: 'rgba(8, 1084, 97, 0.5)',
                tension: 0.1
            },
        ]
    };
}

const LineChart = ({data, title}) => {

    const dataChart = generateChartData(data);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className='line-container'>
            <h2>{title}</h2>
            <div className='line'>
                <Line data={dataChart} options={options} />
            </div>
        </div>
    );
};

export default LineChart;
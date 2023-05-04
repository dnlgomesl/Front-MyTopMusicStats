import React from 'react';
import { Pie } from 'react-chartjs-2';
import randomcolor from 'randomcolor';
import './PieChart.css'

const PieChart = ({ data, title }) => {

    const labels = Object.keys(data);
    const values = Object.values(data);

    const backgroundColors = randomcolor({
        count: labels.length,
        hue: 'green',
        luminosity: 'dark',
      });

    const pieData = {
        labels: labels,
        datasets: [
            {
                data: values,
                backgroundColor: backgroundColors
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className='pie-container'>
            <h2>{title}</h2>
            <div className='pie'>
                <Pie data={pieData} options={options}/>
            </div>
        </div>
    );
};

export default PieChart;
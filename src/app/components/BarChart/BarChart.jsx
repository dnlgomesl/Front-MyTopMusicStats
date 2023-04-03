import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import './BarChart.css'

Chart.register(...registerables);

const generateChartData = (data) => {
  const labels = Object.keys(data);
  const values = Object.values(data);

  return {
    labels,
    datasets: [
      {
        label: '',
        data: values,
        backgroundColor: 'rgba(118, 184, 97, 0.6)',
        borderColor: 'rgba(118, 184, 97, 1)',
        borderWidth: 1,
      },
    ],
  };
};

const BarChart = ({ data, title }) => {
  const chartData = generateChartData(data);

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.formattedValue}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>{title}</h2>
      <div className='chart'>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
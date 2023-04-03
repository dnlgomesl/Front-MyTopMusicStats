import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';

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
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };
};

const BarChart = ({ data, title }) => {
  const chartData = generateChartData(data);

  const options = {
    scales: {
      y: {
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
    <div>
      <h2>{title}</h2>
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default BarChart;
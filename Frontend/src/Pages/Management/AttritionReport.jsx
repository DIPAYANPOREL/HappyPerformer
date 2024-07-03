import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const AttritionReport = () => {
  const barChartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Attrition Rate',
        data: [10, 15, 12, 18, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Attrition Report in %',
          font: {
            size: 16,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 16,
          },
        },
      },
    },
  };

  const lineChartData = {
    labels: ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'],
    datasets: [
      {
        label: 'Attrition Rate per Department',
        data: [15, 20, 10, 8, 12],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 32, 1)',
        pointRadius: 5,
        pointHitRadius: 10,
      },
    ],
  };

  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Department Name',
          font: {
            size: 16,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Attrition Rate in %',
          font: {
            size: 16,
          },
        },
      },
    },
  };

  const metricsData = [
    { metric: 'Average Headcount in "2024"', value: 32 },
    { metric: 'Total Departures in "2024"', value: 0 },
    { metric: 'Annual Attrition Rate for "2024"', value: '0%' },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <img src="https://happyperformer.com/image/at.png" alt="AT Logo" style={{ width: '200px', display: 'block', margin: '0 auto' }} />
      <h1 style={{ marginTop: '30px', marginBottom: '7%' }}>Attrition Report</h1>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <Bar data={barChartData} options={barChartOptions} />
      </div>
      <div style={{ width: '50%', margin: '0 auto', marginTop:'%' }}>
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
      <table
        style={{
          width: '50%',
          margin: '20px auto',
          borderCollapse: 'collapse',
          fontSize: '16px',
          fontFamily: 'Arial, sans-serif',
          marginTop: '10%',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#C3E0EA' }}>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>#</th>
            <th style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>Metrics</th>
            <th style={{ padding: '10px', textAlign: 'right', borderBottom: '1px solid #ddd' }}>Values</th>
          </tr>
        </thead>
        <tbody>
          {metricsData.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd', backgroundColor: index % 2 === 0 ? 'white' : '#f5f5f5' }}>
              <td style={{ padding: '10px', borderRight: '1px solid #ddd' }}>{index + 1}</td>
              <td style={{ padding: '10px', borderRight: '1px solid #ddd' }}>{item.metric}</td>
              <td style={{ padding: '10px' }}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttritionReport;
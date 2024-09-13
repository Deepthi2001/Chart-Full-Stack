import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BarChartComponent = () => {
  const [data, setData] = useState([]);
  const barChartData = useSelector((state) => state.chart.barChartData);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/bar-chart-data/')
      .then(response => {
        const formattedData = response.data.labels.map((label, index) => ({
          name: label,
          value: response.data.data[index],
        }));
        setData(formattedData);
      })
      .catch(error => console.error('Error fetching bar chart data:', error));
  }, []);

  return (
    <BarChart width={600} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartComponent;

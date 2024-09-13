import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import { useSelector } from 'react-redux';

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/line-chart-data/')
      .then(response => {
        const formattedData = response.data.labels.map((label, index) => ({
          name: label,
          value: response.data.data[index],
        }));
        setData(formattedData);
      })
      .catch(error => console.error('Error fetching line chart data:', error));
  }, []);

  return (
    <LineChart width={600} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
};

export default LineChartComponent;

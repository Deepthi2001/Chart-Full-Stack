import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const PieChartComponent = () => {
  const [data, setData] = useState([]);
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/pie-chart-data/')
      .then(response => {
        const formattedData = response.data.labels.map((label, index) => ({
          name: label,
          value: response.data.data[index],
        }));
        setData(formattedData);
      })
      .catch(error => console.error('Error fetching pie chart data:', error));
  }, []);
  return (
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;

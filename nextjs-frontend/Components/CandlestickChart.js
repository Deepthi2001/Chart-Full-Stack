import React, { useEffect, useState } from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Line, Bar } from 'recharts';
import axios from 'axios';

const CandlestickChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/candlestick-data/')
      .then(response => setData(response.data.data))
      .catch(error => console.error('Error fetching candlestick data:', error));
  }, []);

  return (
    <ComposedChart width={600} height={400} data={data}>
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Bar dataKey="close" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="high" stroke="#ff7300" />
      <Line type="monotone" dataKey="low" stroke="#387908" />
    </ComposedChart>
  );
};

export default CandlestickChart;

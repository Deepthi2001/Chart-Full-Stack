// redux/chartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  candlestickData: [],
  lineChartData: { labels: [], data: [] },
  barChartData: { labels: [], data: [] },
  pieChartData: { labels: [], data: [] },
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setCandlestickData(state, action) {
      state.candlestickData = action.payload;
    },
    setLineChartData(state, action) {
      state.lineChartData = action.payload;
    },
    setBarChartData(state, action) {
      state.barChartData = action.payload;
    },
    setPieChartData(state, action) {
      state.pieChartData = action.payload;
    },
  },
});

export const { setCandlestickData, setLineChartData, setBarChartData, setPieChartData } = chartSlice.actions;

export default chartSlice.reducer;

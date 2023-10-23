'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

  
const LineChart = ({sourceData}: {sourceData: any}) => {
  const fakeChartData = {
    '2023-10-01': 1000000,
    '2023-10-02': 1200000,
    '2023-10-03': 900000,
    '2023-10-04': 1100000,
    '2023-10-05': 950000,
    '2023-10-06': 1300000,
    '2023-10-07': 1450000,
    '2023-10-08': 1200000,
    '2023-10-09': 1350000,
    '2023-10-10': 1250000,
    '2023-10-11': 1100000,
    '2023-10-12': 1400000,
    '2023-10-13': 1600000,
    '2023-10-14': 1550000,
    '2023-10-15': 1300000,
    '2023-10-16': 1450000,
    '2023-10-17': 1600000,
    '2023-10-18': 1700000,
    '2023-10-19': 1800000,
    '2023-10-20': 1750000,
    '2023-10-21': 1297000,
    '2023-10-22': 4385000,
    '2023-10-23': 2150000,
    '2023-10-24': 3320000,
    '2023-10-25': 1825000,
    '2023-10-26': 2750000,
  };
  
  

    const data = {
        datasets: [
            {
              data: fakeChartData,
              borderColor: 'rgb(54, 221, 154)',
              backgroundColor: 'rgb(54, 221, 154)',
              tension: 0.4
            },
          ],
    }
    

    return (
         <Line  data={data} />
    );
};

export default LineChart;
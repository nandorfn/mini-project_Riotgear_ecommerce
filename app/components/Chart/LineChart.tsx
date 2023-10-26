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
  const data = {
        datasets: [
            {
              data: sourceData,
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
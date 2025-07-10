import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const TaskDestribution = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        bottom: '0%', // 👈 Move legends below
        left: 'center',
      },
      series: [
        {
        //   name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
          ],
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
 <div className="w-full h-[26rem] p-4 flex flex-col  border border-gray-200 rounded-md">
  <h1 className="text-xl font-bold mb-4 text-start">Task Distribution</h1>

  <div className="flex-grow flex items-center justify-center">
    <div
      ref={chartRef}
      style={{ width: '100%', height: '320px' }}
      className="bg-white rounded "
    />
  </div>
</div>
  );
};

export default TaskDestribution;

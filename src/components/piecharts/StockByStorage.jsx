import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const StockByStorage = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

   const option = {
  grid: {
    bottom: 50, // Add space at the bottom for labels
  },
  xAxis: {
    type: 'category',
    data: ['Bulk', 'High Rack', 'Cold Storage', 'Hazare', 'Trans'],
    axisLabel: {
      show: true,
      rotate: 20, // Optional: rotate to prevent overlap
      interval: 0, // Show all labels
    },
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
      data: [120, 200, 150, 80, 70],
      type: 'bar',
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
  <h1 className="text-xl font-bold mb-4 text-start">Stock By Storage</h1>

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

export default StockByStorage;

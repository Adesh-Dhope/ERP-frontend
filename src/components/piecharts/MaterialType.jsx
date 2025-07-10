import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const MaterialType = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

 const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{c} ({d}%)', // shows name, value, and percentage
  },

  legend: {
  orient: 'vertical',
  left: 0,
  top: 'center',
  textStyle: {
    fontSize: 14,
  },
  formatter: function (name) {
    const item = option.series[0].data.find((d) => d.name === name);
    return `${name}\n${item?.value}%`;
  },
  rich: {
    spacer: {
      height: 16, // ~pt-4 (4 * 4px)
    },
    name: {
      fontSize: 14,
      color: '#000',
      lineHeight: 20,
    },
    valueSpacer: {
      height: 12, // ~pt-3
    },
    value: {
      fontSize: 13,
      color: '#555',
      lineHeight: 18,
    },
  },
},


  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['65%', '50%'], // move chart to right
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
        formatter: '25%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1e88e5',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 24,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 28, name: 'Raw Material', itemStyle: { color: '#1e88e5' } },
        { value: 10, name: 'Spare Parts', itemStyle: { color: '#42a5f5' } },
        { value: 10, name: 'Packaging', itemStyle: { color: '#90caf9' } },
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
  <h1 className="text-xl font-bold mb-4 text-start">Material Type Wise</h1>

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

export default MaterialType;

import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InwardOutward = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("");
 const dropdownRef = useRef(null);
  const options = ["7 days", "10 days", "20 days", "30 days"];

  const fullChartData = React.useMemo(() => [
    { label: "Inward", value: 150, createdDate: "2025-07-02" },
    { label: "Outward", value: 100, createdDate: "2025-07-07" },
    { label: "Dispatch", value: 90, createdDate: "2025-07-10" },
    { label: "Transit", value: 65, createdDate: "2025-07-14" },
    { label: "Returned", value: 35, createdDate: "2025-07-16" },
    { label: "Cancelled", value: 10, createdDate: "2025-07-18" },
  ], []);

  const getDaysFromLabel = (label) => parseInt(label.split(" ")[0]);

  const renderChart = (data) => {
    if (!chartRef.current || !data) return;

    // Sort in descending order (higher values at the top)
    const sorted = data
      .slice()
      .sort((a, b) => a.value - b.value); // highest value first (top)

    const labels = sorted.map(item => item.label);
    const values = sorted.map(item => item.value);

    const option = {
      grid: {
        left: 100,
        top: 20,
        bottom: 20,
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      yAxis: {
        type: 'category',
        data: labels,
        axisLabel: {
          interval: 0,
        },
      },
      series: [
        {
          data: values,
          type: 'bar',
          label: {
            show: true,
            position: 'right',
          },
          itemStyle: {
            color: '#5470C6',
          },
        },
      ],
    };

    chartInstanceRef.current.setOption(option);
  };

  useEffect(() => {
    chartInstanceRef.current = echarts.init(chartRef.current);
    return () => {
      chartInstanceRef.current.dispose();
    };
  }, []);

  useEffect(() => {
    const days = selectedRange ? getDaysFromLabel(selectedRange) : 7;
    const today = new Date();

    const filteredData = fullChartData.filter((item) => {
      const itemDate = new Date(item.createdDate);
      const diffTime = today - itemDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);
      return diffDays <= days;
    });

    renderChart(filteredData);
  }, [selectedRange, fullChartData]);


  const handleOptionClick = (option) => {
    setSelectedRange(option);
    setIsDropdownOpen(false);
  };
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[26rem] flex flex-col border border-gray-200 rounded-md">
      <div className="p-4 flex justify-between align-middle items-center">
        <h1 className="text-xl font-bold mb-4 text-start">Inward vs Outward</h1>
        <div className="inline-block relative"  ref={dropdownRef}>
          <button
         
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-2 py-2 min-w-32 max-w-32 flex justify-between border rounded bg-white shadow text-sm font-medium"
          >
            {selectedRange || "Select Range"}
            <ExpandMoreIcon />
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-32 border rounded bg-white shadow text-sm">
              {options.map((option, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div
          ref={chartRef}
          style={{ width: '100%', height: '320px' }}
          className="bg-white rounded"
        />
      </div>
    </div>
  );
};

export default InwardOutward;

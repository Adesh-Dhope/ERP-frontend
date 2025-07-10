import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StopCircleIcon from "@mui/icons-material/StopCircle";

const DataCards = () => {
  return (
    <div className="pt-4">
 
<div className="flex flex-col md:flex-row w-full gap-4">
  {/* Card 1 */}
  <div className="flex w-full md:w-1/4 items-center gap-3 p-4 border border-gray-300 rounded-lg">
    <div className="w-1/4 flex justify-center text-blue-600">
      <StopCircleIcon size={28} />
    </div>
    <div className="w-3/4">
      <h1 className="text-sm text-gray-500 text-start"> Total Stock Quantity</h1>
      <h1 className="text-lg font-bold text-gray-800 text-start">$5,466,512</h1>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex w-full md:w-1/4 items-center gap-3 p-4 border border-gray-300 rounded-lg">
    <div className="w-1/4 flex justify-center text-green-600">
      <StopCircleIcon size={28} />
    </div>
    <div className="w-3/4">
      <h1 className="text-sm text-gray-500 text-start">{"Recycle Bin (%)"}</h1>
      <h1 className="text-lg font-bold text-gray-800 text-start">12%</h1>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex w-full md:w-1/4 items-center gap-3 p-4 border border-gray-300 rounded-lg">
    <div className="w-1/4 flex justify-center text-yellow-600">
      <AccessTimeIcon size={28} />
    </div>
    <div className="w-3/4">
      <h1 className="text-sm text-gray-500 text-start">Non-Moving Items</h1>
      <h1 className="text-lg font-bold text-gray-800 text-start">342</h1>
    </div>
  </div>

  {/* Card 4 */}
  <div className="flex w-full md:w-1/4 items-center gap-3 p-4 border border-gray-300 rounded-lg">
    <div className="w-1/4 flex justify-center text-red-600">
      <ArrowForwardIcon size={28} />
    </div>
    <div className="w-3/4 " >
      <h1 className="text-sm text-gray-500 text-start">{"Inward-Flow (Today)"}</h1>
      <h1 className="text-lg font-bold text-gray-800 text-start">571</h1>
    </div>
  </div>
</div>



    </div>
  );
};

export default DataCards;

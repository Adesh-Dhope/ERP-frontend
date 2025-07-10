import React from "react";
import StockByStorage from "./stockByStorage";
import TaskDestribution from "./TaskDestribution";
import MaterialType from "./MaterialType";
import InwardOutward from "./InwardOutward";

const PiechartParent = () => {
  return (
    <div className="pt-4">
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 p-2">
          <StockByStorage />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <TaskDestribution />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <InwardOutward />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <MaterialType />
        </div>
      </div>
    </div>
  );
};

export default PiechartParent;

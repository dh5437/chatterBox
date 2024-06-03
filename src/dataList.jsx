import React from "react";
import DataItem from "./dataItem";

const DataList = ({ datas }) => {
  return (
    <div>
      {datas.map((data) => (
        <DataItem key={data.index} data={data}></DataItem>
      ))}
    </div>
  );
};

export default DataList;

import React from "react";

const DataItem = ({ key, data }) => {
  return (
    <div>
      <h2>{data.username}</h2>
      <div>{data.roomname}</div>
    </div>
  );
};

export default DataItem;

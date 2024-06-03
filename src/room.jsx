import React from "react";
import { Outlet } from "react-router-dom";

const Room = ({ data }) => {
  return (
    <div>
      <Outlet />
      <h2>{data.roomname}</h2>
    </div>
  );
};

export default Room;

import React from "react";
import Room from "./room";

const RoomList = ({ datas, rooms }) => {
  return (
    <div className="roomList">
      {rooms.map((data) => (
        <Room key={data.id} data={data} datas={datas}></Room>
      ))}
    </div>
  );
};

export default RoomList;

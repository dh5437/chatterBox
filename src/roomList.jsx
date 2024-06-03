import React from "react";
import Room from "./room";

const RoomList = ({ rooms, datas }) => {
  return (
    <div>
      {rooms.map((data) => (
        <Room key={data.id} data={data} datas={datas}></Room>
      ))}
    </div>
  );
};

export default RoomList;

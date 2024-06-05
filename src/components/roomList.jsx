import React from "react";
import Room from "./room";

const RoomList = ({ rooms, datas, sendMessage }) => {
  return (
    <div className="roomList">
      {rooms.map((data) => (
        <Room
          key={data.id}
          data={data}
          datas={datas}
          // sendMessage={sendMessage}
        ></Room>
      ))}
    </div>
  );
};

export default RoomList;

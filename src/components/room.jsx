import React from "react";
import { Link } from "react-router-dom";

const Room = ({ data, datas }) => {
  return (
    <div className="room">
      <Link to={`/${data.roomname}`} state={{ datas }}>
        {data.roomname}
      </Link>
    </div>
  );
};

export default Room;

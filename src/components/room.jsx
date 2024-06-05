import React from "react";
import { Link } from "react-router-dom";

const Room = ({ data, datas, sendMessage }) => {
  return (
    <div>
      <Link to={"/" + data.roomname} state={{ datas, sendMessage }}>
        {data.roomname}
      </Link>
    </div>
  );
};

export default Room;

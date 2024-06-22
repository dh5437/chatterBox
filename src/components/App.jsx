import React from "react";
import axios from "axios";
import RoomList from "./roomList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import LeftSidebar from "./leftSidebar";

function App() {
  const [datas, setDatas] = useState([]);
  const [room, setRoom] = useState();

  useEffect(() => {
    axios
      .get("https://www.yungooso.com/api/messages")
      .then(({ data }) => {
        setDatas(data);
        return data;
      })
      .catch((error) => console.error(error))
      .then((response) => console.log(response));
  }, []);

  const rooms = datas.slice().reduce((acc, current) => {
    const madeRoom = acc.find((room) => room.roomname === current.roomname);
    if (!madeRoom) {
      acc.push(current);
    }
    return acc;
  }, []);
  console.log(rooms);

  return (
    <>
      <LeftSidebar />
      <div className="wrapper">
        <Nav />
        <div className="container">
          <Link to="/about">
            <button>about</button>
          </Link>
          <RoomList datas={datas} rooms={rooms}></RoomList>
        </div>
      </div>
    </>
  );
}

export default App;

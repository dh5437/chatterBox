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
  const [query, setQuery] = useState("");

  const getMessages = async () => {
    try {
      const response = await axios.get("https://www.yungooso.com/api/messages");
      setDatas(response.data);
    } catch (error) {
      console.error("Error while getting messages:", error);
    }
  };

  useEffect(() => {
    getMessages();
    const interval = setInterval(getMessages, 1000);
    return () => clearInterval(interval);
  }, []);

  const rooms = datas.slice().reduce((acc, current) => {
    const madeRoom = acc.find((room) => room.roomname === current.roomname);
    if (!madeRoom) {
      acc.push(current);
    }
    return acc;
  }, []);

  const filteredRooms = rooms.filter((room) =>
    room.roomname.toLowerCase().includes(query.toLowerCase())
  );

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <LeftSidebar />
      <div className="wrapper">
        <Nav
          getQuery={handleQueryChange}
          query={query}
          onSearch={handleSearch}
        />
        <div className="container">
          <Link to="/about">
            <button>about</button>
          </Link>
          <RoomList datas={datas} rooms={filteredRooms}></RoomList>
        </div>
      </div>
    </>
  );
}

export default App;

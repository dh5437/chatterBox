import React from "react";
import Chat from "./chat";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const ChatList = () => {
  const location = useLocation();
  const datas = location.state.datas;
  const { roomname } = useParams();

  const chats = datas.filter((data) => {
    return data.roomname === roomname;
  });
  console.log(chats);

  return (
    <div>
      <h1>Room: {roomname}</h1>
      <ul>
        {chats.map((chat) => (
          <Chat key={chat.id} data={chat} />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;

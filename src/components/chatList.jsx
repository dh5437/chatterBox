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

  const sendMessage = location.state.sendMessage;

  return (
    <div>
      <h1>Room: {roomname}</h1>
      <div style={{ maxHeight: "600px" }}>
        <div>
          {chats.map((chat) => (
            <Chat key={chat.id} data={chat} />
          ))}
        </div>
      </div>
      <form>
        <input
          className="form-control"
          type="text"
          // onChange={sendMessage}
        ></input>
        <button>Send</button>
      </form>
    </div>
  );
};

export default ChatList;

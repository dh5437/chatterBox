import React from "react";
import Chat from "./chat";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div className="chatContainer">
      <div className="roomNav">
        <span class="material-symbols-outlined" onClick={() => {}}>
          arrow_back
        </span>
        Room: {roomname}
        <span class="material-symbols-outlined">menu</span>
      </div>
      <div className="chatList">
        <div>
          {chats.map((chat) => (
            <Chat key={chat.id} data={chat} />
          ))}
        </div>
      </div>
      <div className="sendForm">
        <form>
          <input
            className="form-control"
            type="text"
            // onChange={sendMessage}
          ></input>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatList;

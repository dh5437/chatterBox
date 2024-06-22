import React, { useState, useEffect } from "react";
import Chat from "./chat";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let datas = location.state.datas;

  const { roomname } = useParams();

  const [text, setText] = useState("");
  const [chats, setChats] = useState(
    datas ? datas.filter((data) => data.roomname === roomname) : []
  );

  const RefreshMessage = async () => {
    try {
      const response = await axios.get("https://www.yungooso.com/api/messages");
      const newChats = response.data.filter(
        (data) => data.roomname === roomname
      );
      setChats(newChats);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    RefreshMessage();
  }, [roomname]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      username: "sliverstone",
      roomname: roomname,
      text: text,
      date: new Date().toISOString(),
    };

    try {
      let response = await axios.post(
        "https://www.yungooso.com/api/messages",
        newMessage
      );
      setText("");
      RefreshMessage();

      const messageId = response.data.id;
      console.log("Message sent with ID:", messageId);
      return messageId;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chatContainer">
      <div className="roomNav">
        <span
          className="material-symbols-outlined"
          onClick={() => {
            navigate("/"); // Navigate to the room list
          }}
        >
          arrow_back
        </span>
        Room: {roomname}
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div className="chatList">
        <div>
          {chats.map((chat) => (
            <Chat key={chat.id} data={chat} />
          ))}
        </div>
      </div>
      <div className="sendForm">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="MESSAGE"
          ></input>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatList;

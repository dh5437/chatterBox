import React from "react";

const Chat = ({ data }) => {
  return (
    <div
      className="oppositeChat"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <div className="chatUser">{data.username}</div>
      <div className="chatMessage">{data.text}</div>
    </div>
  );
};

export default Chat;

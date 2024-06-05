import React from "react";

const Chat = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div>{data.username}</div>
      <div>{data.text}</div>
    </div>
  );
};

export default Chat;

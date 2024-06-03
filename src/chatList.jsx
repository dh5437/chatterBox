import React from "react";

const ChatList = ({ datas }) => {
  return (
    <div>
      {datas.map((data) => (
        <Room key={data.id} data={data} datas={datas}></Room>
      ))}
    </div>
  );
};

export default ChatList;

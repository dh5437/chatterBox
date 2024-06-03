import React from "react";
import axios from "axios";
import DataList from "./dataList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.yungooso.com/api/messages")
      .then(({ data }) => setDatas(data))
      .then((response) => console.log(response));
  }, []);

  return <DataList datas={datas}></DataList>;
}

export default App;

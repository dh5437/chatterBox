import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/style.scss";
import ErrorPage from "./components/error-page.jsx";
import ChatList from "./components/chatList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <div>About me</div>,
  },
  {
    path: ":roomname",
    element: <ChatList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

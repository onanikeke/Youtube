import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";
import SearchPage from "./components/SearchPage";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "/watch",
            element: <Watchpage />,
          },
          {
            path: "/search",
            element: <SearchPage />,
          },
        ],
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

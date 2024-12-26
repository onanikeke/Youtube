import "./App.css";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import { Outlet } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

function App() {
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Body />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <MainContainer />,
  //       },
  //       {
  //         path: "/watch/:id",
  //         element: <WatchPage />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;

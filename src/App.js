import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import User from "./pages/User";
import Detail from "./pages/Detail";
import Post from "./pages/Post";
import Setting from "./pages/Setting";
import ModifyUsername from "./pages/ModifyUsername";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/main",
      element: <Main />,
    },
    {
      path: "/:userId",
      element: <User />,
    },
    {
      path: "/post",
      element: <Post />,
    },
    {
      path: "detail/:recordId",
      element: <Detail />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/modify/username",
      element: <ModifyUsername />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

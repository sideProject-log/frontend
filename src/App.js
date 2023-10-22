import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
import MyPage from "./pages/my-page";
import Detail from "./pages/Detail";
import Post from "./pages/Post";

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
      path: "/my",
      element: <MyPage />,
    },
    {
      path: "/post",
      element: <Post />,
    },
    {
      path: "detail/:recordId",
      element: <Detail />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

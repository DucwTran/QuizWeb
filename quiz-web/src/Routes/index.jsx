import PrivateRouter from "../Components/PrivateRouter";
import LayoutDefault from "../Layout/LayoutDefault";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Quiz from "../Pages/Quiz";
import Answer from "../Pages/Answer";
import Topic from "../Pages/Topic";
import Result from "../Pages/Result";
import Blog from "../Pages/Blog";
import Logout from "../Pages/Logout";


export const routes = [
  {
    path: "/", 
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        element: <PrivateRouter />,
        children: [
          {
            path: "/quiz/:id",
            element: <Quiz />
          },
          {
            path: "/answer",
            element: <Answer />
          },
          {
            path: "/topic",
            element: <Topic />
          },
          {
            path: "/result/:id",
            element: <Result />
          }
        ]
      }
    ]
  }
]
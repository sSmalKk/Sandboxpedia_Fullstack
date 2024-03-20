import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePage from "pages/HomePage";
import LoginPage from "pages/Login";
import Landingpage from "pages/Landingpage";
import Register from "pages/Register";
import Home1 from "pages/Home1";
import World from "pages/World";
import Home2 from "pages/Home2";
import Loading from "pages/Loading";
import ItemCreator from "pages/ItemCreator";
import Home3 from "pages/Home3";
import Pedia from "pages/Pedia";
import Post from "pages/Post";
import Store from "pages/Store";
import Sandbox from "pages/World";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/dhiwise-dashboard", element: <Home /> },
    {
      path: "/",
      element: <Landingpage />,
    },{
      path: "/Sandbox",
      element: <Sandbox/>,
    },{
      path: "/HomePage",
      element: <HomePage />,
    },{
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home1",
      element: <Home1 />,
    },
    {
      path: "/world",
      element: <World />,
    },
    {
      path: "/home2",
      element: <Home2 />,
    },
    {
      path: "/loading",
      element: <Loading />,
    },
    {
      path: "/itemcreator",
      element: <ItemCreator />,
    },
    {
      path: "/home3",
      element: <Home3 />,
    },
    {
      path: "/pedia",
      element: <Pedia />,
    },
    {
      path: "/post",
      element: <Post />,
    },
    {
      path: "/store",
      element: <Store />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

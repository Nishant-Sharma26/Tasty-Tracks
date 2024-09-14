import React, {Suspense,lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contacts";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import UserContext from "./uttils/UserContext";
import { Provider } from "react-redux";
import appStore from "./uttils/appStore";
import Cart from "./components/Cart";

const About = lazy(()=>import("./components/About"));

const AppLayout = () => {

  // authentication

  const [userName,setuserName]  = useState("");

  useEffect(()=>{
      const data = {
        name: "Nishant Sharma"
      };
      setuserName(data.name);
  },[]);
  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{loggedInUser: userName , setuserName}}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
    
      {
        path:"/",
        element:<Body />
      },

      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About...</h1>}>
            <About />
          </Suspense>
        )
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path:"/Cart",
        element:<Cart />
      }
    ],
    errorElement:<Error/>
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);

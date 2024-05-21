import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//create the HTML using core react
// const parent = React.createElement(
//     "div", {id:'container'}, 
//         React.createElement(
//         "h1", {id:'hdng'}, 
//             "Hello world from React" 
//     )
// );


const FoodApp = ()=> (
  <Provider store={appStore}>
    <div className=" mx-auto">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  </Provider>
  
)
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children:[
      {
        path: "/",
        element : <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },

    ],
    errorElement : <Error />,  
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
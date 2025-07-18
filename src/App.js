import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//
//
// Header
//      - Logo
//      -Nav Items
// Body
//      -Search
//      -Restaurant container
//          -Card
//              -image
//              -name, desc, star, cuisine, etc
// Footer
//      -Copyright
//      -Links
//      -Address
//      -contact

// React element.
//this is an object.
// after rendering it will become an html.
const heading = React.createElement("h1", {}, "Namaste react");

// JSX syntax.
// JSx makes easy to write the html for react.

const jsxHeading = <h1 className="head"> Hi JSX</h1>;
// JSX -> react.createElement  -> js object ->Html.

// react component.




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* based on the route, changethe content  */}
      <Outlet />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

const title = <h1 className="heading"> React funcitonal Title </h1>;

const number = 1000;
const HeadingComponent1 = () => (
  <div id="container">
    {title}
    <h2>{number * 2}</h2>
    {/* <Title /> */}
    <h1 className="heading"> React funcitonal component</h1>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>
  },
 
])
root.render(<RouterProvider router={appRouter}/>);

import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
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
      <Body />
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

root.render(<AppLayout />);

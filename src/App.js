import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//create the HTML using core react
// const parent = React.createElement(
//     "div", {id:'container'}, 
//         React.createElement(
//         "h1", {id:'hdng'}, 
//             "Hello world from React"
//     )
// );





const FoodApp = ()=> (
    <div className="container">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FoodApp />);
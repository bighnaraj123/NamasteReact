import React from "react";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Header = () =>{
    const [loginBtn, setLoginBtn] = useState("Login");
   
    const data = useContext(UserContext);

    //Selector - subscribing stor using Selector
const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
    return (
        <header className="flex justify-between shadow-lg">
            <div><img  className="w-40" src={LOGO_URL} alt="logo" /></div>
            <div className="logo"><img  className="w-100" src={'assets/images/logo.png'} alt="logo" /></div>
            <nav>
            <ul className="flex p-4 m-4">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
                <li className="px-4"><button className="btn btn-danger"
                    onClick={
                        ()=>{
                            loginBtn === "Login" ?
                            setLoginBtn("Logout") :
                            setLoginBtn("Login");
                        }
                    }
                >{loginBtn} </button></li>

                <li className="font-bold  px-4">
                    {data.loggedInUser}
                </li>
                <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
            </ul>
            </nav>
        </header> 
    );
};
export default Header;
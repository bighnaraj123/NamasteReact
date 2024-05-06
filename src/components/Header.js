import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <header>
            <div className="logo"><img src={LOGO_URL} alt="logo" /></div>
            <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Products</a></li>
                <li><button className="btn btn-danger"
                    onClick={
                        ()=>{
                            setLoginBtn("Logout");
                        }
                    }
                >{loginBtn} </button></li>
            </ul>
            </nav>
        </header>
    );
};
export default Header;
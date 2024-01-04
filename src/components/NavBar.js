import React from "react";
import {  NavLink } from "react-router-dom";


const NavBar = ()=>{

    return (
        <div id="navBar">
            <div className="nav-left">
                <p>Shopping Cart</p>
            </div>

            <div className="nav-right">
                <NavLink className={"nav"} to={"/"}>Home</NavLink>
                <NavLink className={"nav"} to={"/cart"}>My cart</NavLink>
            </div>
        </div>
    )
}

export default NavBar;




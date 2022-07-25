import React, { useState } from "react";
import "./Navbar.scss";
import {Search, Notifications, ArrowDropDown} from "@material-ui/icons";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return(
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="" alt="logo" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>

                <div className="right">
                    <Search className="icon" />
                    <span>KID</span> 
                    <Notifications className="icon"/>
                    <img src="" alt="img" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>settings</span>
                            <span>logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar
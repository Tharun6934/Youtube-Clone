import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo_icon from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import jack_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";

function Navbar({ setIsopen, isopen }) {
  return (
    <div className="nav_container">
      <div className="nav1">
        <img
          src={menu_icon}
          alt="menu_icon"
          className="menu-nav"
          onClick={() => {
            setIsopen(!isopen);
          }}
        />
        <Link to="/">
          <img src={logo_icon} alt="logo_icon" />
        </Link>
      </div>
      <div className="nav2">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="search_icon" />
      </div>
      <div className="nav3">
        <img src={upload_icon} alt="upload_icon" className="images-nav3" />
        <img className="navjack" src={more_icon} alt="icon" />
        <img className="navjack" src={notification_icon} />
        <img src={jack_icon} alt="" className="jackimage" />
      </div>
    </div>
  );
}

export default Navbar;

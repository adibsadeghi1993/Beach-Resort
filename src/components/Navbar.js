import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className="adib">
     <div className="links">
       <img src={logo} alt="beach-resort" />
       <nav className={isOpen ? "nav show-nav":"nav hide-nav"}>
       <ul className="nav-links">
         <li className="nav-link">
           <Link to="/">Home</Link>
         </li>
         <li className="nav-link">
           <Link to="/rooms">Rooms</Link>
         </li>
       </ul>
     </nav>
     </div>
     <button onClick={handleToggle} className="btn">
       <FaAlignRight className="icon" />
     </button>
    </header>
  );
};

export default Navbar;

import React from 'react';
import {categories} from "../news/Categories";
import {NavLink} from "react-router-dom";
import uniqid from "uniqid";
import Logo from "./Logo";
import {FaUserAlt} from 'react-icons/fa';

const Navbar = () =>  {
    return(
       <div className="navbar-container">
           <NavLink to="/">
               <Logo/>
           </NavLink>
           {
               categories.map(category =>
               (
                   <NavLink to={`/${category}`}
                            key={uniqid()}
                            activeClassName="active-nav-link">
                       {category.toUpperCase()}
                   </NavLink>
               )
           )}
           <NavLink to="/signup"
                    activeClassName="active-nav-link">
               <FaUserAlt />
           </NavLink>
       </div>
    )
}

export default Navbar;
import React from 'react'
import "./Navbar.css"
import logo from "../img/logo.png"
import { Avatar } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import home from "../img/home.png"

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>


            <ul className="routes">
                <li>
                    <Link className="cur-route" to="/">
                        <img src={home} alt="" />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img src={home} alt="" />
                        Notice Board
                    </Link>
                </li>
                <li>
                    <Link to="/attendance"><img src={home} alt="" />Attendance</Link>
                </li>
                <li>
                    <Link to="/"><img src={home} alt="" />Fees Details</Link>
                </li>
                <li>
                    <Link to="/"><img src={home} alt="" />Calendar</Link>
                </li>
                <li>
                    <Link to="/"><img src={home} alt="" />Multimedia</Link>
                </li>
                <li>
                    <Link to="/"><img src={home} alt="" />Time Tables</Link>
                </li>
                <li>
                    <Link to="/"><img src={home} alt="" />Schedules</Link>
                </li>
                <li>
                    <Link to="/"><img src={home} alt="" />Support Requests</Link>
                </li>
                <li>
                    <Link to="/"><img src={home} alt="" />Support</Link>
                </li>
                <li>
                    <Link to="/"><img src={home} alt="" />Account</Link>
                </li>
            </ul>

            <div className="profile">
                <Avatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                <div className="text">
                    <h4>Fr. Paul D'Souza</h4>
                    <p>Admin Account</p>
                </div>
                <div className="actions">
                    <ExpandLessIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar

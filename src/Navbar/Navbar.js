import React from 'react'
import "./Navbar.css"
import logo from "../img/logo.png"
import { Avatar } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>


            <ul className="routes">
                <li className="cur-route">
                    Home
                </li>
                <li>
                    Notice Board
                </li>
                <li>
                    Attendance
                </li>
                <li>
                    Fees Details
                </li>
                <li>
                    Calendar
                </li>
                <li>
                    Multimedia
                </li>
                <li>
                    Time Tables
                </li>
                <li>
                    Schedules
                </li>
                <li>
                    Support Requests
                </li>
                <li>
                    Support
                </li>
                <li>
                    Account
                </li>
            </ul>

            <div className="profile">
                <Avatar src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"/>
                <div className="text">
                    <h4>Fr. Paul D'Souza</h4>
                    <p>Admin Account</p>
                </div>
                <div className="actions">
                    <ExpandLessIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    )
}

export default Navbar

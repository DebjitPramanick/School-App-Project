import React from 'react'
import "./Navbar.css"
import logo from "../img/logo.png"
import { Avatar } from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import home from "../img/home.png"
import notice from "../img/notice.png"
import attendance from "../img/attendance.png"
import grid from "../img/grid.png"
import schedule from "../img/schedule.png"
import fees from "../img/fees.png"
import support from "../img/support.png"
import flag from "../img/flag.png"
import account from "../img/account.png"
import calendar from "../img/calendar.png"
import multimedia from "../img/multimedia.png"

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>


            <ul className="routes">
                <li>
                    <Link className="cur-route" to="/"><img src={home} alt="" />Home</Link>
                </li>
                <li>
                    <Link to="/"><img src={notice} alt="" />Notice Board</Link>
                </li>
                <li>
                    <Link to="/attendance"><img src={attendance} alt="" />Attendance</Link>
                </li>
                <li>
                    <Link to="/"><img src={fees} alt="" />Fees Details</Link>
                </li>
                <li>
                    <Link to="/"><img src={calendar} alt="" />Calendar</Link>
                </li>
                <li>
                    <Link to="/"><img src={multimedia} alt="" />Multimedia</Link>
                </li>
                <li>
                    <Link to="/"><img src={grid} alt="" />Time Tables</Link>
                </li>
                <li>
                    <Link to="/"><img src={schedule} alt="" />Schedules</Link>
                </li>
                <li>
                    <Link to="/"><img src={support} alt="" />Support Requests</Link>
                </li>
                <li>
                    <Link to="/"><img src={flag} alt="" />Support</Link>
                </li>
                <li>
                    <Link to="/"><img src={account} alt="" />Account</Link>
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

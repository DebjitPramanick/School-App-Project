import React, { useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Screen2.css"
import { IconButton } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import { DropDowns, Records } from "./Utils"

const Screen2 = ({ setParam }) => {

    let h = useHistory().location.pathname
    h = h.split("/");
    useEffect(() => setParam(h[1]), [])

    const [present, setPresent] = useState(JSON.parse(localStorage.getItem('present')) || [])
    const [absent, setAbsent] = useState(JSON.parse(localStorage.getItem('absent')) || [])

    const handlePresent = (id) => {
        if(present.includes(id)){
            const newList = present.filter(p => p!== id);
            setPresent(newList)
        }
        else{
           setPresent(p => [...p,id]) 
        }
    }

    const handleAbsent = (id) => {
        if(absent.includes(id)){
            const newList = absent.filter(p => p!== id);
            setAbsent(newList)
        }
        else{
           setAbsent(a=>[...a,id]) 
        }
        
    }

    useEffect(() => {
        localStorage.setItem("present", JSON.stringify(present))
        localStorage.setItem("absent", JSON.stringify(absent))
    }, [present, absent])

    return (
        <div className="screen2-container">
            <div className="header">
                <div className="text">
                    <h1>Attendance</h1>
                </div>
                <div className="search-bar">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input type="search" placeholder="Search.." />

                </div>

                <div className="bell">
                    <IconButton>
                        <NotificationsNoneIcon />
                    </IconButton>
                    <p className="noti">2</p>
                </div>
            </div>

            <div className="drop-downs">
                {DropDowns.map(d => (
                    <div className="select-container">
                        <select name={d.type} id={d.type} value={d.type}>
                            {d.options.map(op => (
                                <option value={op}>{op}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>

            <div className="record-attendance">
                {Records.map(r => (
                    <div className="record">
                        <div className="period">{r.period} <br /> Period</div>
                        <div className="teacher-name">{r.teacher}</div>
                        <button className={
                            (present.includes(r.id) ? "present" : "")
                        } onClick={() => handlePresent(r.id)}
                        disabled={absent.includes(r.id)}>Present</button>

                        <button className={
                            (absent.includes(r.id) ? "absent" : "")
                        } onClick={() => handleAbsent(r.id)}
                        disabled={present.includes(r.id)}>Absent</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Screen2

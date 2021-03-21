import React, { useEffect, useState } from "react";
import "./Style.css";
import { days, months, dates } from "./Utils";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import RestoreIcon from '@material-ui/icons/Restore';
import DateRangeIcon from '@material-ui/icons/DateRange';

const Calendar = () => {

    const curD = new Date().getUTCDay();
    const curM = new Date().getMonth();
    const today = new Date().getDate()
    const year = new Date().getFullYear();
    const f = new Date(year, curM, 1).getDay();

    const [month, setMonth] = useState(curM)
    const [allDates, setAllDates] = useState([]);
    const [gaps, setGaps] = useState(f)
    const [curDay, setCurDay] = useState(curD)
    const [highlighted, sethigHlighted] = useState([])
    const [show, setShow] = useState(false)


    useEffect(() => {
        const numDays = new Date(year, month + 1, 0).getDate();

        setAllDates(dates.filter((x) => (x <= numDays))) // Generating all dates of particular month

        for (let i = 0; i < gaps; i++) {
            setAllDates(x => [' ', ...x]) // Generating start and end point of dates
        }

        if(month !== curM) setShow(true)
        else setShow(false)
    }, [gaps, month, year, curM]);



    // Methods ----------------------

    const handleLeft = () => {
        if (month > curM) {
            setMonth(month - 1);
            const newGaps = new Date(year, month - 1, 1).getDay();
            setGaps(newGaps);
            const newDay = new Date(year, month - 1, today).getDay();
            setCurDay(newDay)
        }
        else {
            alert("Not allowed.")
        }
    }

    const handleRight = () => {
        if (month < 11) {
            setMonth(month + 1);
            const newGaps = new Date(year, month + 1, 1).getDay();
            setGaps(newGaps);
            const newDay = new Date(year, month + 1, today).getDay();
            setCurDay(newDay)
        }
        else {
            alert("Not allowed.")
        }
    }

    const resetHandler = () => {
        setMonth(curM)
        setGaps(f)
        setCurDay(curD)
    }

    return (
        <div className="calendar-container">

            <div className="cal-header">
                Calendar
                <DateRangeIcon className="icon"/>
            </div>
            

            <div className="months">
                {show && (
                    <RestoreIcon onClick={resetHandler} className="controller"/>
                )}
                
                <div className="left">
                    <ArrowLeftIcon onClick={handleLeft} className="controller" />
                </div>

                <p>{months[month].slice(0, 3)}, 21</p>

                <div className="right">
                    <ArrowRightIcon onClick={handleRight} className="controller" />
                </div>
            </div>


            <div className="cal-container">
                <div className="days">
                    {days.map((d) => {
                        if (days[curDay] === d) {
                            return <p className="cur-day">{d.slice(0, 3)}</p>;
                        } else {
                            return <p>{d.slice(0, 3)}</p>;
                        }
                    })}
                </div>

                <div className="dates">

                    {allDates.map((d) => {
                        if (today === d) {
                            return (
                                <div>
                                    <p className="cur-date">{d}</p>
                                </div>
                            )
                        }
                        else if (highlighted.includes(d) && month === curM) {
                            return (
                                <div>
                                    <p className="selected-date">{d}</p>
                                </div>
                            )
                        }
                        else if (d < today && d !== " " && month === curM) {
                            return (
                                <div>
                                    <p className="invalid-date">{d}</p>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div>
                                    <p>{d}</p>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>

        </div>
    );
};

export default Calendar;
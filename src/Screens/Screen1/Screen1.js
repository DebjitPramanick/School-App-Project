import React from 'react'
import "./Screen1.css"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { IconButton } from '@material-ui/core';
import Calendar from '../../Calendar/Calendar';
import { Doughnut } from 'react-chartjs-2'

const Screen1 = () => {

    const info = {
        labels: ['Present(%)', 'Absent(%)'],
        datasets: [
            {
                label: 'A',
                backgroundColor: ['#08FC59', '#EB4C1A',],
                borderColor: '#8B8680',
                data: [1025, 21]
            }
        ]
    }

    const allCards = [
        {
            title: 'Holi Holiday',
            content: 'Activate every muscle group to get the results you’ve always wanted.',
            date: '15 March 2021'
        },
        {
            title: 'Holi Holiday',
            content: 'Activate every muscle group to get the results you’ve always wanted.',
            date: '15 March 2021'
        },
        {
            title: 'Holi Holiday',
            content: 'Activate every muscle group to get the results you’ve always wanted.',
            date: '15 March 2021'
        },
    ]


    return (
        <div className="screen1-container">
            <div className="header">
                <div className="text">
                    <h3>Fri, 28 March</h3>
                    <h1>Good Morning, Sir.</h1>
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
                </div>
            </div>

            <div className="cards">
                {allCards.map(a => (
                    <div className="card">
                        <div className="card-top">
                            <h4>{a.title}</h4>
                            <button>Holiday</button>
                        </div>
                        <p className="content">
                            {a.content}
                        </p>
                        <p className="date">
                            {a.date}
                        </p>
                    </div>
                ))}

                <IconButton>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </div>

            <div className="container2">
                <div className="stat">
                    <div className="top">
                        <div className="text">
                            <h4>Attendance</h4>
                            <p>Today overall attendance.</p>
                        </div>
                        <DateRangeIcon className="icon"/>
                    </div>

                    <div className="chart">
                        <Doughnut data={info} />
                    </div>
                </div>

                <div className="calendar">
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default Screen1

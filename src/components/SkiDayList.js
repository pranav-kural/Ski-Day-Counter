import React from 'react'
import PropTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlakes from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>

        <tbody>
            {days.map((day, i) => <SkiDayRow key={i} {...day}/>)}
        </tbody>
    </table>
)

SkiDayList.propTypes = {
    days: (props) => {
        return (!Array.isArray(props.days)) ?
                    new Error("SkiDayList should be an array") :
                    (!props.days.length) ?
                        new Error("SkiDayList must have at least one record") :
                        null 
    }
}
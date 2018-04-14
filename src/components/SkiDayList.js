import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days, filter}) => {
    const filteredDays = (!filter ||
    !filter.match(/powder|backcountry/) ?
    days :
    days.filter(day => day[filter]))

    return (
        <div className="ski-day-list">
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
            <tr>
                <td colSpan={4}>
                    <Link to='/list-days'>
                        All Days
                    </Link>
                    <Link to='/list-days/powder'>
                        Powder Days
                    </Link>
                    <Link to='/list-days/backcountry'>
                        Backcountry Days
                    </Link>
                </td>
            </tr>
        </thead>

        <tbody>
            {filteredDays .map((day, i) => <SkiDayRow key={i} {...day}/>)}
        </tbody>
    </table>
    </div>
)
} // SkiDayList

SkiDayList.propTypes = {
    days: (props) => {
        return (!Array.isArray(props.days)) ?
                    new Error("SkiDayList should be an array") :
                    (!props.days.length) ?
                        new Error("SkiDayList must have at least one record") :
                        null 
    }
}
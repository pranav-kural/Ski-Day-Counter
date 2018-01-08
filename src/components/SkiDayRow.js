import React from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlakes from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayRow = ({date, resort, powder, backcountry}) => (

        <tr>
            <td>
                {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </td>
            <td>
                {resort}
            </td>
            <td>
                {powder ? <SnowFlakes /> : null}
            </td>
            <td>
                {backcountry ? <Terrain /> : null}                
            </td>
        </tr>
)
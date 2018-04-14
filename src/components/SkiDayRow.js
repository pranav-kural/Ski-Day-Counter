import React from 'react'
import PropTypes from 'prop-types';
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlakes from 'react-icons/lib/ti/weather-snow'

export const SkiDayRow = ({date, resort, powder, backcountry}) => (

        <tr>
            <td>
                {date}
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

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}
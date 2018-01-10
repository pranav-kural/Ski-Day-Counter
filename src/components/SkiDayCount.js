import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "../stylesheets/ui.css";
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

// SkiDayComponent
export class SkiDayCount extends Component {

    percentToDecimal = (decimal) => ((decimal * 100) + "%")

    calcGoalProgress = (total, goal) => this.percentToDecimal(total/goal)

    render() {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total} 
                    <Calendar />
                    days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder} 
                    <SnowFlake />
                    days</span>                    
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}
                    <Terrain />
                     days</span>                                    
                </div>
                <div>
                    <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>
            </div>
        )
    }
}

SkiDayCount.defaultProps = {
    total: 50,
    powder: 50,
    backcountry: 15,
    goal: 100
}

// default ski-day-count prop-types
SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number,
    goal: PropTypes.number
}
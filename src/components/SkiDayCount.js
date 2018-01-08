import React, { Component } from 'react'
import "../stylesheets/ui.css";

// SkiDayComponent
export class SkiDayComponent extends Component {

    percentToDecimal = (decimal) => ((decimal * 100) + "%")

    calcGoalProgress = (total, goal) => this.percentToDecimal(total/goal)

    render() {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total} days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder} days</span>                    
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry} days</span>                                    
                </div>
                <div>
                    <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>
            </div>
        )
    }
}
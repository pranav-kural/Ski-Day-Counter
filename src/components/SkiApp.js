import React, { Component } from "react";
import { SkiDayList } from "./SkiDayList";
import { SkiDayCount } from "./SkiDayCount";

export class SkiApp extends Component {


    constructor(props) {
        super(props)

        // set initial state
        this.state = {
            allSkiDays: [
                {
                  resort: "Squaw Valley",
                  date: new Date("1/2/2017"),
                  powder: true,
                  backcountry: false
                },
                {
                  resort: "Kirkwood",
                  date: new Date("2/28/2017"),
                  powder: false,
                  backcountry: false
                },
                {
                  resort: "Mt. Tallac",
                  date: new Date("4/2/2017"),
                  powder: false,
                  backcountry: true
                }
              ]
        } // this.state
    } // constructor

    render() {
        return (
        <div className="app">
            <SkiDayList days={this.state.allSkiDays} />
            <SkiDayCount total={this.countDays()}
                         powder={this.countDays('powder')}
                         backcountry={this.countDays('backcountry')}
                         />
        </div>
        )
    }

    countDays = (filter) => this.state.allSkiDays.filter((day) => (filter ? day[filter] : day)).length
}
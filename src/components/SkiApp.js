import React, { Component } from "react";
import { SkiDayList } from "./SkiDayList";
import { SkiDayCount } from "./SkiDayCount";
import { AddDayForm } from "./AddDayForm";
import { Menu } from "./Menu";

import "../stylesheets/ui.css";
import "../stylesheets/index.css";


export class SkiApp extends Component {


    constructor(props) {
        super(props)

        this.addDay = this.addDay.bind(this)
        this.countDays = this.countDays.bind(this)

        // set initial state
        this.state = {
            allSkiDays: [
                {
                  resort: "Squaw Valley",
                  date: "2016-11-12",
                  powder: false,
                  backcountry: true
                }
              ]
        } // this.state
    } // constructor

    render() {
        return (
        <div className="app">
        <Menu />
        {(this.props.location.pathname === "/") ? 
            <SkiDayCount total={this.countDays()}
            powder={this.countDays('powder')}
            backcountry={this.countDays('backcountry')}
            /> :
            (this.props.location.pathname === "/add-day") ?
            <AddDayForm onNewDay={this.addDay} /> :
            <SkiDayList days={this.state.allSkiDays} 
                        filter={this.props.match.params.filter} /> 
        }


            
            
        </div>
        )
    }

    addDay = (newDay) => {
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        })
    }

    countDays = (filter) => this.state.allSkiDays.filter((day) => (filter ? day[filter] : day)).length
}
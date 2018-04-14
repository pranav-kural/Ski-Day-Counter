import React from 'react'
import PropTypes from 'prop-types'

export class AddDayForm extends React.Component {
    render() {
    
    const { resort, date, powder, backcountry } = this.props
    
    return (
        <form className="add-day-form">
            
            <label htmlFor="resort">Resort Name</label>
            <input type="text" id="resort" required defaultValue={resort} />

            <label htmlFor="date">Resort Name</label>
            <input type="date" id="date" required defaultValue={date} />

            <div>
                <input type="checkbox" id="powder" defaultChecked={powder} />
                <label htmlFor="powder">Powder Day</label>    
            </div> 

            <div>
                <input type="checkbox" id="backcountry" defaultChecked={backcountry} />
                <label htmlFor="backcountry">Backcountry Day</label>    
            </div>

        </form>
        )
    } // render()
} // AddDayForm

AddDayForm.defaultProps = {
    resort: "Kirkwood",
    date: "2017-02-12",
    powder: true,
    backcountry: false
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}
import React, { Component } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
class Datepicker extends Component {
  state = {
    startDate: new Date(),
    setStartDate: ''
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
        <DatePicker
            selected={this.state.startDate}
            onChange={date => this.setState({setStartDate: date})}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
        />
    );
  }
}

export default Datepicker;
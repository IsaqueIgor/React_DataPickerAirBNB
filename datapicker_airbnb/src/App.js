import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker , SingleDatePicker, DayPickerRangeController } from 'react-dates'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    }
  };

  alertStartDate = () => {
    alert(this.state.startDate);
  }

  alertEndDate = () => {
    alert(this.state.endDate);
  }

  render() {
    return (
      <div className="App">
        <DateRangePicker 
          startDate= {this.state.startDate}
          startDateId = "your_unique_startdate_id"
          endDate = { this.state.endDate}
          endDateId = "your_unique_enddate_id"
          onDatesChange={({ startDate , endDate }) => this.setState({ startDate , endDate})}
          focusedInput = {this.state.focusedInput }
          onFocusChange = {focusedInput => this.setState({ focusedInput })}
        />
        <br />
        <br />
        <button onClick={this.alertStartDate}>Click me for Start Date</button>
        <button onClick={this.alertEndDate}>Click me for End Date</button>
      </div>
    );
  }
}

export default App;

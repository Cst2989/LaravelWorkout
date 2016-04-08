import React from 'react';
import Day from './Day.jsx';
export default class Week extends React.Component {
	
	render() {
	 var Days = this.props.days.map((day) => {
      return (<Day  {...day} key={day.day_id} week_id={this.props.id} /> )
    });
    return (<div className="week">
      <div className="week_nr">Week {this.props.id}</div>
      <div className="week_days"> {Days}</div>
      <div className="week_nr last">Stretch</div>
    </div>)
  }
}

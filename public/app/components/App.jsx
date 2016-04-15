import React from 'react';
import Calendar from './Calendar.jsx';

import fetch from 'whatwg-fetch';

export default class App extends React.Component {
	render() {
		return <div>
		<div className="upper_calandar">
			<div className="week_nr"></div>
			<div className="week_days">
				<div className="day">Monday</div>
				<div className="day">Tuesday</div>
				<div className="day">Wednesday</div>
				<div className="day">Thursday</div>
				<div className="day">Double Friday</div>
				<div className="day">Saturday</div>
				<div className="day">Sunday</div>
			</div>
		</div>
		<Calendar />
		</div>;
	}

}

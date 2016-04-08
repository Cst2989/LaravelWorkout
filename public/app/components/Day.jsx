import React from 'react';

export default class Day extends React.Component {
	normalDay(){
		return  <div>
			{this.props.work}
			<br/>
			<label className="checkbox-inline"><input type="radio" className="radio_buts" name={"workout_"+this.props.week_id+"_"+this.props.day_id} value="1" /></label>
			<label className="checkbox-inline"><input type="radio" className="radio_buts" name={"workout_"+this.props.week_id+"_"+this.props.day_id} value="2" /></label>
		</div>
	}
	saturday(){
		return <div>
			 <button type="button" className="btn btn-success">Measure</button>
		</div>
	}
	render() {
		return <div className="day">
			{this.props.day_id != 6 ? this.normalDay() : this.saturday()  }
			
		</div>
	}
}

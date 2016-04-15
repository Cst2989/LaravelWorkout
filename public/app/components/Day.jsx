import React from 'react';

export default class Day extends React.Component {
	constructor(props){
		super(props);
		this.state={done:''};
	}
	componentDidMount() {

		//CHANGE THIS 
		// move to week 
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
		$.ajax({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			},
			url: '/LaravelTest/quickstart2/public/workout/'+this.props.week_id+'/'+this.props.day_id,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({
					done: data
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	handleClickBarely(){
		//add to db
		$.ajax({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			},
			type : 'POST',
			url : '/LaravelTest/quickstart2/public/workoutq',
			dataType : 'text',
			data: {
				day		: this.props.day_id,
				week 	: this.props.week_id,
				nail_it 	: 0,
				barely_made_it : 1,
			},
			success: function(data) {
				this.setState({
					done: 1
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	handleClickNailed(){
		//add to db
		
		$.ajax({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			},
			type : 'POST',
			url : '/LaravelTest/quickstart2/public/workoutq',
			dataType : 'text',
			data: {
				day		: this.props.day_id,
				week 	: this.props.week_id,
				nail_it 	: 1,
				barely_made_it : 0,
			},
			success: function(data) {
				this.setState({
					done: 2
				});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	}
	notDone(){
		return  <div>
		<label className="checkbox-inline"><input onClick={this.handleClickBarely.bind(this)} type="radio" className="radio_buts" name={"workout_"+this.props.week_id+"_"+this.props.day_id} value="1" /></label>
		<label className="checkbox-inline"><input onClick={this.handleClickNailed.bind(this)} type="radio" className="radio_buts" name={"workout_"+this.props.week_id+"_"+this.props.day_id} value="2" /></label>
		</div>
	}
	done(){
		return  <div>
		{this.state.done == 1 ? this.barely() : this.nailed()  }
		</div>
	}
	barely(){
		return  <div className="barely">
		Barely Made it
		</div>
	}
	nailed(){
		return  <div className="nailed">
		Nailed it!
		</div>
	}
	normalDay(){
		return  <div>
		{this.props.work}
		
		{this.state.done == 0 ? this.notDone() : this.done()  }
		</div>
	}
	saturday(){
		return <div>
		<button type="button" onClick={this.props.whenClicked}  className="btn btn-success">Measure</button>
		</div>
	}
	render() {
		return <div className="day">
		{this.props.day_id != 6 ? this.normalDay() : this.saturday()  }

		</div>
	}
}

import React from 'react';
import Week from './Week.jsx';
export default class Calendar extends React.Component {
	
	render() {
	var weeks = [
	{
		"id":1, 
		"days":[ 
			{"day_id":1,"nume":"Monday","work":"Cardio"},
			{"day_id":2,"nume":"Tuesday","work":"Speed 1.0"},
			{"day_id":3,"nume":"Wednesday","work":"Total Body Circuit"} ,
			{"day_id":4,"nume":"Thursday","work":"AB Intervals"},
			{"day_id":5,"nume":"Friday","work":"Cardio & Lower Focus"},
			{"day_id":6,"nume":"Saturday","work":"none"},
			
		]
	},
	{
		"id":2, 
		"days":[ 
			{"day_id":1,"nume":"Monday","work":"Cardio"},
			{"day_id":2,"nume":"Tuesday","work":"Total Body Circuit"},
			{"day_id":3,"nume":"Wednesday","work":"Speed 1.0"} ,
			{"day_id":4,"nume":"Thursday","work":"Cardio"},
			{"day_id":5,"nume":"Friday","work":"Lower Focus & AB Intervals"},
			{"day_id":6,"nume":"Saturday","work":"none"},
			
		]
	},
	{
		"id":3, 
		"days":[ 
			{"day_id":1,"nume":"Monday","work":"Total Body Circuit"},
			{"day_id":2,"nume":"Tuesday","work":"Speed 1.0"},
			{"day_id":3,"nume":"Wednesday","work":"Lower Focus"} ,
			{"day_id":4,"nume":"Thursday","work":"Cardio"},
			{"day_id":5,"nume":"Friday","work":"Total Body Circuit & AB Intervals"},
			{"day_id":6,"nume":"Saturday","work":"none"},
			
		]
	},
	{
		"id":4, 
		"days":[ 
			{"day_id":1,"nume":"Monday","work":"Cardio"},
			{"day_id":2,"nume":"Tuesday","work":"Total Body Circuit"},
			{"day_id":3,"nume":"Wednesday","work":"Lower Focus"} ,
			{"day_id":4,"nume":"Thursday","work":"Total Body Circuit"},
			{"day_id":5,"nume":"Friday","work":"AB Intervals & Speed 1.0"},
			{"day_id":6,"nume":"Saturday","work":"none"},
			
		]
	},
	{
		"id":5, 
		"days":[ 
			{"day_id":1,"nume":"Monday","work":"Total Body Circuit"},
			{"day_id":2,"nume":"Tuesday","work":"AB Intervals"},
			{"day_id":3,"nume":"Wednesday","work":"Total Body Circuit"} ,
			{"day_id":4,"nume":"Thursday","work":"Cardio"},
			{"day_id":5,"nume":"Friday","work":"Total Body Circuit & Lower Focus"},
			{"day_id":6,"nume":"Saturday","work":"none"},
			
		]
	}
	];
    var Weeks = weeks.map((week) => {
      return (<Week  {...week} key={week.id} /> )
    });
    return (<div className="weeks">
    	{Weeks}
    </div>)
  }
}

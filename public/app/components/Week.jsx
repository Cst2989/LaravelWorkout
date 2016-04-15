import React from 'react';
import Day from './Day.jsx';
export default class Week extends React.Component {
  constructor(props){
    super(props);
    this.state={opened:false , textW:"", textC:"", textWst:"",textA:"" , textT:"" , newM:true ,id:''};
  }
  handleClick(){
    $.ajax({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      url: '/LaravelTest/quickstart2/public/measurements/'+this.props.id,
      dataType: 'json',
      cache: false,
      success: function(data) {
        if (data != 'null') {
          data = JSON.parse(data);
          this.setState({
            newM: false,
            textW: data.weight,
            textC: data.chest,
            textWst: data.waist,
            textA: data.arm,
            textT: data.thigh,
            id:data.id,
          });
          
        }
        this.setState({
          opened: true
        });
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  }
  handleClose(){
   this.setState({
    opened: false
  });
 }
 handleSave(){
   $.ajax({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    type : 'POST',
    url : '/LaravelTest/quickstart2/public/measurements',
    dataType : 'text',
    data: {
      week   : this.props.id,
      weight  : this.state.textW,
      chest   : this.state.textC,
      waist : this.state.textWst,
      arm : this.state.textA,
      thigh: this.state.textT,
    },
    success: function(data) {
     this.setState({
      opened: false
    });
   }.bind(this),
   error: function(xhr, status, err) {
    console.error(this.props.url, status, err.toString());
  }.bind(this)
});

 }
 handleInputChange(event){
  this.setState({textW: event.target.value});
}
handleInputChangeC(event){
  this.setState({textC: event.target.value});
}
handleInputChangeWst(event){
  this.setState({textWst: event.target.value});
}
handleInputChangeA(event){
  this.setState({textA: event.target.value});
}
handleInputChangeT(event){
  this.setState({textT: event.target.value});
}
handleUpdate(){
  $.ajax({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    type : 'POST',
    url : '/LaravelTest/quickstart2/public/measurements/update',
    dataType : 'text',
    data: {
      id   : this.state.id,
      weight  : this.state.textW,
      chest   : this.state.textC,
      waist : this.state.textWst,
      arm : this.state.textA,
      thigh: this.state.textT,
    },
    success: function(data) {
     this.setState({
      opened: false
    });
   }.bind(this),
   error: function(xhr, status, err) {
    console.error(this.props.url, status, err.toString());
  }.bind(this)
});
}
buttonSave(){
  return  <button type="button" onClick={this.handleSave.bind(this)}  className="btn btn-success">Save
  </button>
}
buttonUpdate(){
 return  <button type="button" onClick={this.handleUpdate.bind(this)}  className="btn btn-success">Update
 </button>
}
render() {
  var Days = this.props.days.map((day) => {
    return (<Day whenClicked={this.handleClick.bind(this)}  {...day} key={day.day_id} week_id={this.props.id}  /> )
  });
  return (<div className="week">
    <div className="week_nr">Week {this.props.id}</div>
    <div className="week_days"> {Days}</div>
    <div className="week_nr last">Stretch</div>
    <div className={this.state.opened ? "measurements active" : "measurements" }>
    <h2>Add Measurements Week {this.props.id}</h2>
    <div className="input-group">
    <input type="text" className="form-control" value={this.state.textW} onChange = {this.handleInputChange.bind(this)}  placeholder="Weight" aria-describedby="basic-addon2" />
    <span className="input-group-addon">kg</span>
    </div>
    <div className="input-group">
    <input type="text" className="form-control" value={this.state.textC} onChange = {this.handleInputChangeC.bind(this)}  placeholder="Chest" aria-describedby="basic-addon2" />
    <span className="input-group-addon">cm</span>
    </div>
    <div className="input-group">
    <input type="text" className="form-control" value={this.state.textWst} onChange = {this.handleInputChangeWst.bind(this)}  placeholder="Waist" aria-describedby="basic-addon2" />
    <span className="input-group-addon">cm</span>
    </div>
    <div className="input-group">
    <input type="text" className="form-control" value={this.state.textA} onChange = {this.handleInputChangeA.bind(this)}  placeholder="Arm" aria-describedby="basic-addon2" />
    <span className="input-group-addon">cm</span>
    </div>
    <div className="input-group">
    <input type="text" className="form-control" value={this.state.textT} onChange = {this.handleInputChangeT.bind(this)}  placeholder="Thigh" aria-describedby="basic-addon2" />
    <span className="input-group-addon">cm</span>
    </div>
    <br/> <br/>
    {this.state.newM ? this.buttonSave() : this.buttonUpdate()}
    <button type="button" onClick={this.handleClose.bind(this)}  className="btn btn-danger">Close</button>
    </div>
    </div>)
}
}

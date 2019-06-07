import React, {Component} from 'react';
import './App.css';
import * as d3 from 'd3';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={data: []}
  }


componentDidMount(){

  var json = require("./data/csvjson.json");
  //console.log(json);
     let jsonNew= this.state.data;
  for (var i = 0; i < 3; i++) {
    var jsonItem = json[i].IsvezimoplanoID;
    //console.log(jsonNew);
     jsonNew.push([jsonItem]);
          this.setState({
            data: jsonNew,
          });
  }

  /*
  d3.json(json, function(data) {
    console.log(data);
  })
  */
  

  d3.select(this.refs.temperatures)
  .selectAll("h2")
  .data(this.state.data)
  .enter()
      .append("h2")
      .text(this.state.data)    
}

/*
componentDidUpdate(){
  d3.select(this.refs.temperatures)
    .selectAll("h2")
    .data(this.state.temperatureData)
    .enter()
        .append("h2")
        .text("New Temperature")
}
*/



  render(){
  return(
    <div ref="temperatures"></div>
  )
  }
}
export default App;

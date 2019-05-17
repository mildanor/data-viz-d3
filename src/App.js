import React, {Component} from 'react';
import './App.css';
import * as d3 from 'd3';
//import '../data/grafikas'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={temperatureData: [ 8, 5, 13, 9, 12 ]}
  }


componentDidMount(){
  d3.csv("../data/grafikas.csv", function(data) {
    for (var i = 0; i < 3; i++){
      console.log(data[i].Isvezimo plano ID);
    }
  });

  d3.select(this.refs.temperatures)
  .selectAll("h2")
  .data(this.state.temperatureData)
  .enter()
      .append("h2")
      .text("New Temperature")    
}

componentDidUpdate(){
  d3.select(this.refs.temperatures)
    .selectAll("h2")
    .data(this.state.temperatureData)
    .enter()
        .append("h2")
        .text("New Temperature")
}



  render(){
  return(
    <div ref="temperatures"></div>
  )
  }
}
export default App;

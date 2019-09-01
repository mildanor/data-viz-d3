import React, {Component} from 'react';
import './App.css';
import * as d3 from 'd3';

//single country exmaple https://www.d3-graph-gallery.com/graph/backgroundmap_country.html

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
      geography: {}
    }
  }


componentDidMount(){
  var json = require("./data/csvjson.json");
  //console.log(json);
     let jsonNew= this.state.data;
  for (var i = 0; i < 4; i++) {
    var jsonItem = json[i].IsvezimoplanoID;
    console.log(jsonNew);
     jsonNew.push([jsonItem]);
          this.setState({
            data: jsonNew,
          });
  }
var svg = d3.select("svg")
var width = +svg.attr("width");
var height = +svg.attr("height");

var projection = d3.geoMercator()
    .center([23,55])                // GPS of location to zoom on
    .scale(1780)                       // This is like the zoom
    .translate([ width/2, height/2 ])

d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
  .then(function(data){
    // Code from your callback goes here...
    data.features = data.features.filter(function(d){/*console.log(d.properties.name)*/ ; return d.properties.name==="Lithuania"})
   // console.log(data.features)
   // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
          .attr("fill", "grey")
          .attr("d", d3.geoPath()
              .projection(projection)
          )
        .style("stroke", "none")
  });

  d3.select(this.refs.temperatures)
  .selectAll("h2")
  .data(this.state.data)
  .enter()
      .append("h2")
      .text(this.state.data)  
   
}


  render(){
  return(
    <div ref="temperatures">
    <h2></h2>
   <svg id="my_dataviz" width="440" height="300"></svg>
    </div>
  )
  }
}
export default App;

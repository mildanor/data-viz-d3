import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

function Example() {
    const [temperatureData, setState] = useState([ 8, 5, 13, 9, 12 ]);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      d3.select(this.refs.temperatures)
     .selectAll("h2")
     .data(temperatureData)
     .enter()
      .append("h2")
      .text("New Temperature")   
    });
  
    return (
      <div>
         <div ref="temperatures"></div>
      </div>
    );
  }
  export default Example;
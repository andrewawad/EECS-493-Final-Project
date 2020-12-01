import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis,   VerticalGridLines,    HorizontalGridLines, LineSeries,  AreaSeries, GradientDefs,  Borders

  } from 'react-vis';

import "../style.css";



const DAYS = [
    'Mon',
    'Tu',
    'Wed ',
    'Thu ',
    'Fri',
    'Sat',
    'Sun',
    ];
function myFormatter() {
        return (<tspan>
          <tspan x="0" dy="1em">Monday</tspan>
          <tspan x="0" dy="1em">{1}</tspan>

        </tspan>);
      }
export default class Graph extends Component {


    
    render() {
        return(

        <div class="graphs">
  <XYPlot xDomain={[0, 6]} yDomain={[0, 15]} width={600} height={300}
>
      <GradientDefs>
        <linearGradient id="WarmGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity={0.4} />
          <stop offset="100%" stopColor="yellow" stopOpacity={0.3} />
        </linearGradient>
      </GradientDefs>
      <GradientDefs>
        <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity={0.4} />
          <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
        </linearGradient>
      </GradientDefs>
      <VerticalGridLines />

      <LineSeries
      
        color={'#67a9cf'}
        curve={'curveMonotoneX'}
        opacity = {1}


        data={[
          {x: 0, y: 10, y0: 0},
          {x: 2, y: 10, y0: 0},
          {x: 3, y: 7, y0: 0},
          {x: 4, y: 7, y0: 0},
          {x: 5, y: 5, y0: 0},
          {x: 6, y: 4, y0: 0}
        ]}
      />
      <Borders
        style={{
          bottom: {fill: '#fff'},
          left: {fill: '#fff'},
          right: {fill: '#fff'},
          top: {fill: '#fff'}
        }}
      />
      <XAxis  tickTotal ={7} tickFormat = {v => `${DAYS[v]}`}/>
      <YAxis />
      <LineSeries
      curve={'curveMonotoneX'}
      color={'#67a9cf'}
      opacity = {1}
      

        data={[
          {x: 0, y: 5, y0: 0},
          {x: 2, y: 5, y0: 0},
          {x: 3, y: 10, y0: 0},
          {x: 4, y: 7, y0: 0},
          {x: 5, y: 5, y0: 0},
          {x: 6, y: 3, y0: 0}

        ]}
      />
    <LineSeries
      curve={'curveMonotoneX'}
      color={'#67a9cf'}
      opacity = {1}
      

        data={[
          {x: 0, y: 4, y0: 0},
          {x: 2, y: 2, y0: 0},
          {x: 3, y: 1, y0: 0},
          {x: 4, y: 3, y0: 0},
          {x: 5, y: 1, y0: 0},
          {x: 6, y: 3, y0: 0}

        ]}
      />
{/* 

    onNearestXY={(value, {index}) =>
    this.setState({
        selectedPointId: index,
    })
    }
    getColor={({id}) =>
    selectedPointId === id ? '#FF9833' : '#12939A'
    }
    sizeRange={sizeRange} */}
            
        </XYPlot>
  

        
    </div>
)
    }
}
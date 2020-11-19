import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
var Slider = require('react-rangeslider');
import '../style.css';



export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
          rating: 6
        }
    }
     
    handleOnChange = (value) => {
        this.setState({
            rating: value
        })
    }
    
    render() {
      let { rating } = this.state;

      return (
        <div>
            <h1 class="formTitle">
                Rate My Day
            </h1>

            <h3 class="formQuestion">How productive were you?</h3>

            <Slider value={rating} orientation="horizontal" onChange={this.handleOnChange}/>

            {/* <div class="slidecontainer">
                <input type="range" min="1" max="10" value="6" class="slider" id="myRange">
                </input>
            </div>

            <h3 class="formQuestion">How well did you handle stress?</h3>

            <div class="slidecontainer">
                <input type="range" min="1" max="10" value="6" class="slider" id="myRange">
                </input>
            </div>

            <h3 class="formQuestion">How happy were you?</h3>

            <div class="slidecontainer">
                <input type="range" min="1" max="10" value="6" class="slider" id="myRange">
                </input>
            </div>

            <h3 class="formQuestion">Today's Journal</h3> */}



        </div>
      )
    }
  }
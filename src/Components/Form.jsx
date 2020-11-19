import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import '../style.css';



export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productive: 5
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({productive: event.target.value});
      }
    
    render() {
      let { rating, productive } = this.state;


      return (
        <div>
            <h1 class="formTitle">
                Rate My Day
            </h1>

            <h3 class="formQuestion">How productive were you?</h3>

            <div class="slidecontainer">
                <input type="range" min="1" max="10" value={productive} onChange={this.handleChange} class="slider"></input>
                <p>{productive}</p>
            </div>

            <h3 class="formQuestion">How well did you handle stress?</h3>

            <div class="slidecontainer">
            <input type="range" min="1" max="10" value="5" class="slider"></input>
            </div>

            <h3 class="formQuestion">How happy were you?</h3>

            <div class="slidecontainer">
                <input type="range" min="1" max="10" value="5" class="slider"></input>
            </div>

            <h3 class="formQuestion">Today's Journal</h3>



        </div>
      )
    }
  }
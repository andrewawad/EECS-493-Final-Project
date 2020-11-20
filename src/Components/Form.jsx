import React, { Component } from 'react';
import '../style.css';
import {Link} from 'react-router-dom';



export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productive: 5,
            happy: 5,
            healthy:5,
            text:""

        }

        this.handleProductiveChange = this.handleProductiveChange.bind(this);
        this.handleHappyChange = this.handleHappyChange.bind(this);
        this.handleHealthyChange = this.handleHealthyChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    }
    
    handleProductiveChange(event) {
        this.setState({productive: event.target.value});
      }
    handleHappyChange(event) {
        this.setState({happy: event.target.value});
      }
    handleHealthyChange(event) {
        this.setState({healthy: event.target.value});
      }
    handleTextChange(event) {

        this.setState({text: event.target.value});
      }
    
    
    render() {
      let { rating, productive ,happy, healthy,text} = this.state;


      return (
        <div>
            <h1 class="formTitle">
                Rate My Day
            </h1>

            <h3 class="formQuestion">How productive were you?</h3>

            <div class="slidecontainer">
                <input type="range" min="1" max="10" value={productive} onChange={this.handleProductiveChange} class="slider"></input>
                <p>{productive}</p>
            </div>

            <h3 class="formQuestion">How well did you handle stress?</h3>

            <div class="slidecontainer">
            <input type="range" min="1" max="10" value={healthy} onChange={this.handleHealthyChange} class="slider"></input>
            <p>{healthy}</p>

            </div>

            <h3 class="formQuestion">How happy were you?</h3>

            <div class="slidecontainer">
            <input type="range" min="1" max="10" value={happy} onChange={this.handleHappyChange} class="slider"></input>
            <p>{happy}</p>

            </div>
            <div class="text_container">

            <h3 class="formQuestion">Today's Journal</h3>

            <input type="text" value={text} onChange={this.handleTextChange}></input>
            </div>

          <div class = 'done'>
          <Link to= {{pathname: "/dashboard", state: this.state }} class = "link" > done </Link>
          </div>



        </div>
      )
    }
  }
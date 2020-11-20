import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../style.css';



export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            overall: 5,
            healthy: 5,
            productive: 5,
            stress: 5,
            relationships: 5,
            learn: 5,
            happy: 5
        }

        this.handleOverall = this.handleOverall.bind(this);
        this.handleHealthy = this.handleHealthy.bind(this);
        this.handleProductive = this.handleProductive.bind(this);
        this.handleStress = this.handleStress.bind(this);
        this.handleRelationships = this.handleRelationships.bind(this);
        this.handleLearn = this.handleLearn.bind(this);
        this.handleHappy = this.handleHappy.bind(this);
    }

    handleHealthy(event) {
        this.setState({healthy: event.target.value});
    }

    handleOverall(event) {
        this.setState({overall: event.target.value});
    }
    
    handleProductive(event) {
        this.setState({productive: event.target.value});
    }

    handleStress(event) {
        this.setState({stress: event.target.value});
    }

    handleRelationships(event) {
        this.setState({relationships: event.target.value});
    }

    handleLearn(event) {
        this.setState({learn: event.target.value});
    }

    handleHappy(event) {
        this.setState({happy: event.target.value});
    }
    
    render() {
      let { overall, healthy, productive, stress, relationships, learn, happy } = this.state;

      return (
        <div>
            <h1 class="formTitle">
                Rate My Day
            </h1>

            <h3 class="formQuestion">How was your day overall? {overall}</h3>

            <div class="slidecontainer">
                <input type="range" min="0" max="10" value={overall} onChange={this.handleOverall} class="slider"></input>
            </div>

            <h3 class="formQuestion">How well did you practice healthy habits? {healthy}</h3>

            <div class="slidecontainer">
                <input type="range" min="0" max="10" value={healthy} onChange={this.handleHealthy} class="slider"></input>
            </div>

            <h3 class="formQuestion">How productive were you? {productive}</h3>

            <div class="slidecontainer">
                <input type="range" min="0" max="10" value={productive} onChange={this.handleProductive} class="slider"></input>
            </div>

            <h3 class="formQuestion">How well did you handle stress? {stress}</h3>

            <div class="slidecontainer">
                <input type="range" min="0" max="10" value={stress} onChange={this.handleStress} class="slider"></input>
            </div>

            <h3 class="formQuestion">How well did you manage your relationships? {relationships}</h3>

            <div class="slidecontainer">
                <input type="range" min="0" max="10" value={relationships} onChange={this.handleRelationships} class="slider"></input>
            </div>

            <h3 class="formQuestion">How much did you learn? {learn}</h3>

            <div class="slidecontainer">
                <input type="range" min="0" max="10" value={learn} onChange={this.handleLearn} class="slider"></input>
            </div>

            <h3 class="formQuestion">How happy were you? {happy}</h3>

            <div class="slidecontainer">
                <input type="range" min="0" max="10" value={happy} onChange={this.handleHappy} class="slider"></input>
            </div>

            <h3 class="formQuestion">How was your day?</h3>

            <div class="journalContainer">
                <textarea class="longInput" cols="30" rows="10"></textarea>
            </div>


            <div class="buttonContainer">
                <Link to="/dashboard">
                    <button class="submitButton">Submit</button>
                </Link>
            </div>

        </div>
      )
    }
  }
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../style.css";
import "firebase/firestore";
import firebase from "firebase";
import app from "./services/firebase.js";

export default class Form extends Component {
  constructor(props) {
    var today = new Date(),
      date = (
        today.getMonth() +
        1 +
        "-" +
        today.getDate() +
        "-" +
        today.getFullYear()
      ).toString();
    super(props);
    this.state = {
      currentDate: date,
      overall: 5,
      healthy: 5,
      productive: 5,
      stress: 5,
      relationships: 5,
      learn: 5,
      happy: 5,
      text: "",
    };

    this.handleOverall = this.handleOverall.bind(this);
    this.handleHealthy = this.handleHealthy.bind(this);
    this.handleProductive = this.handleProductive.bind(this);
    this.handleStress = this.handleStress.bind(this);
    this.handleRelationships = this.handleRelationships.bind(this);
    this.handleLearn = this.handleLearn.bind(this);
    this.handleHappy = this.handleHappy.bind(this);
    this.uploadData = this.uploadData.bind(this);
  }

  handleHealthy(event) {
    this.setState({ healthy: event.target.value });
  }

  handleOverall(event) {
    this.setState({ overall: event.target.value });
  }

  handleProductive(event) {
    this.setState({ productive: event.target.value });
  }

  handleStress(event) {
    this.setState({ stress: event.target.value });
  }

  handleRelationships(event) {
    this.setState({ relationships: event.target.value });
  }

  handleLearn(event) {
    this.setState({ learn: event.target.value });
  }

  handleHappy(event) {
    this.setState({ happy: event.target.value });
  }

  uploadData() {
    let user = app.auth().currentUser.uid;
    const db = firebase.firestore();
    let state = this.state;
    let jsonObject = JSON.stringify({ state });
    console.log(jsonObject.state);
    let date = this.state.currentDate;
    console.log(user, this.state.currentDate);

    db.collection("users")
      .doc(user)
      .set(
        {
          entries: {
            [date]: state,
          },
        },
        { merge: true }
      );
  }

  render() {
    let {
      overall,
      healthy,
      productive,
      stress,
      relationships,
      learn,
      happy,
    } = this.state;

    return (
      <div>
        <h1 class="formTitle">Rate My Day</h1>

        <div class="date">
          <p>{this.state.currentDate}</p>
        </div>

        <h3 class="formQuestion">How was your day overall? {overall}</h3>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="10"
            value={overall}
            onChange={this.handleOverall}
            class="slider"
          ></input>
        </div>

        <h3 class="formQuestion">
          How well did you practice healthy habits? {healthy}
        </h3>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="10"
            value={healthy}
            onChange={this.handleHealthy}
            class="slider"
          ></input>
        </div>

        <h3 class="formQuestion">How productive were you? {productive}</h3>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="10"
            value={productive}
            onChange={this.handleProductive}
            class="slider"
          ></input>
        </div>

        <h3 class="formQuestion">How well did you handle stress? {stress}</h3>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="10"
            value={stress}
            onChange={this.handleStress}
            class="slider"
          ></input>
        </div>

        <h3 class="formQuestion">
          How well did you manage your relationships? {relationships}
        </h3>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="10"
            value={relationships}
            onChange={this.handleRelationships}
            class="slider"
          ></input>
        </div>

        <h3 class="formQuestion">How much did you learn? {learn}</h3>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="10"
            value={learn}
            onChange={this.handleLearn}
            class="slider"
          ></input>
        </div>

        <h3 class="formQuestion">How happy were you? {happy}</h3>
        <div class="slidecontainer">
          <input
            type="range"
            min="0"
            max="10"
            value={happy}
            onChange={this.handleHappy}
            class="slider"
          ></input>
        </div>

        <div class="journalContainer">
          <textarea
            placeholder="Today I ... "
            class="longInput"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div class="buttonContainer">
          <Link to="/dashboard">
            <button class="backButton">Back</button>
          </Link>
          <Link to="/dashboard">
            <button onClick={this.uploadData} class="submitButton">
              Submit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

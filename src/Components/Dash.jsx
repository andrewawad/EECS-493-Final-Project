import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../style.css";

class Card extends Component {
  render() {
    return (
      <div class="card">
        <h2 class="card-title">{this.props.title}</h2>
        <p class="card-num">{this.props.num}</p>
        <h3 class="card-subtitle">{this.props.subtitle}</h3>

      </div>
    );
  }
}

class Note extends Component {
  render() {
    return (
      <div class="note">
        <div class="note-title">{this.props.title}</div>
      </div>
    );
  }
}

export default class Dash extends Component {
  render() {
    let p = 5
    let ha = 5
    let he = 5
    let te = "this is a test note"

    console.log(this.props.location.state)
    if (typeof(this.props.location.state) == 'undefined' ){
      p=5
    }
    else{
      p = this.props.location.state.productive
      ha = this.props.location.state.happy
      he = this.props.location.state.healthy
      te = this.props.location.state.text

    }
 

    return (
      
      <div class="full-dash">
        <h1>Welcome to your dashboard!</h1>


        <h2 class="subtitle">Stats</h2>
        <div class="card-cont">
          <Card title="🔥 STREAK" num = "5" subtitle="days in a row" />
          <Card title="😃 HAPPINESS" num={ha} subtitle="this week" />
          <Card title="💪 HEALTH" num={he} subtitle="this week" />
          <Card title="✍️ PRODUCTIVITY" num={p} subtitle="this week" />
        </div>

        <h2 class="subtitle">Journal Entries</h2>
 
          
        <Note title="this is a test note" />
        <Note title={te}/>

        <div>
          <Link to="/form">
            <div onClick={this.goToForm} Class="plus-button">
              +
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

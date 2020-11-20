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
    return (
      <div class="full-dash">
        <h1 class="dashTitle">Jacob's Dashboard</h1>

        <h2 class="subtitle">Stats</h2>
        <div class="card-cont">
          <Card title="🔥 STREAK" num="6 days in a row" subtitle="" />
          <Card title="😃 HAPPINESS" num="9.7" subtitle="this week" />
          <Card title="💪 HEALTH" num="4.7" subtitle="this week" />
          <Card title="✍️ PRODUCTIVITY" num="4.7" subtitle="this week" />
        </div>

        <h2 class="subtitle">Journal Entries</h2>
        <Note title="this is a test note" />
        <Note title="this is a second test note" />

        <div>
          <Link to="/form">
            <div Class="plus-button">
              +
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

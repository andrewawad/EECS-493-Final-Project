import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import "../style.css";
import {authentication} from "./services/firebase";
<<<<<<< HEAD
import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
=======
import ReactCardFlip from 'react-card-flip';
>>>>>>> 902f665d30a22fa977f6b99bd6b10320330ce437

class Card extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} infinite>
        <div class="card" onClick={this.handleClick}>
          <h2 class="card-title">{this.props.title}</h2>
          <p class="card-num">{this.props.num}</p>
          <h3 class="card-subtitle">{this.props.subtitle}</h3>
        </div>

        <div class="card" onClick={this.handleClick}>
          {/* Graph */}
        </div>
      </ReactCardFlip>  
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

const db = firebase.firestore();

export default class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalEntries: 0,
      hapAvg: 0,
      healthAvg: 0,
      learnAvg: 0,
      overallAvg: 0,
      prodAvg: 0,
      relAvg: 0,
      stressAvg: 0,
      data: {}
    }
<<<<<<< HEAD
  }

  signOut(){
    try {
      authentication.signOut()
      return <Redirect to="/" />;

    } catch (error) {
      alert(error);
    }
  }

  componentDidMount() {
    var uid = firebase.auth().currentUser.uid;
    db.collection('users').doc(uid).get().then(e => {
      // console.log(e.data());
      let data = e.data().entries;
      let len = Object.keys(data).length;

      let relSum = 0;
      let overSum = 0;
      let healthSum = 0;
      let hapSum = 0;
      let learnSum = 0;
      let prodSum = 0;
      let stressSum = 0;
      Object.keys(data).forEach((key) => {
        relSum += data[key].relationships;
        overSum += data[key].overall;
        healthSum += data[key].healthy;
        hapSum += data[key].happiness;
        learnSum += data[key].learn;
        prodSum += data[key].productive;
        stressSum += data[key].stress;
      });

      // Math.round(100*hapSum/len)/100;
      this.setState({
        totalEntries: len,
        hapAvg: Math.round(100*hapSum/len)/100,
        healthAvg: Math.round(100*healthSum/len)/100,
        learnAvg: Math.round(100*learnSum/len)/100,
        overallAvg: Math.round(100*overSum/len)/100,
        prodAvg: Math.round(100*prodSum/len)/100,
        relAvg: Math.round(100*relSum/len)/100,
        stressAvg: Math.round(100*stressSum/len)/100,
      })
      console.log(this.state)
    })
  }

=======
  
  
  
>>>>>>> 902f665d30a22fa977f6b99bd6b10320330ce437
  render() {
    let p = 5
    let ha = 5
    let he = 5
    let te = "this is a test note"

    // console.log(this.props.location.state)
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
        <h1 class="dashTitle">Dashboard</h1>
        <button class="logout" onClick={this.signOut}>logout</button>

        <h2 class="subtitle">Stats</h2>
        <div class="card-cont">
<<<<<<< HEAD
          <Card title="🔥  TOTAL" num = {this.state.totalEntries} subtitle="days tracking your life metrics" />
          <Card title="😃  HAPPINESS" num={this.state.hapAvg} subtitle="overall" />
          <Card title="💪  HEALTH" num={this.state.healthAvg} subtitle="overall" />
          <Card title="✍️  PRODUCTIVITY" num={this.state.prodAvg} subtitle="overall" />
          <Card title="✍️  LEARNING" num={this.state.learnAvg} subtitle="overall" />
          <Card title="✍️  MANAGING STRESS" num={this.state.stressAvg} subtitle="overall" />
          <Card title="✍️  RELATIONSHIPS" num={this.state.relAvg} subtitle="overall" />
=======
          <Card title="🔥 STREAK" num = "5" subtitle="days in a row" />          
          <Card title="😃 HAPPINESS" num={ha} subtitle="this week" />
          <Card title="💪 HEALTH" num={he} subtitle="this week" />
          <Card title="✍️ PRODUCTIVITY" num={p} subtitle="this week" />
>>>>>>> 902f665d30a22fa977f6b99bd6b10320330ce437
        </div>

        <h2 class="subtitle">Journal Entries</h2>
        <Note title="this is a test note" />
        <Note title={te}/>

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

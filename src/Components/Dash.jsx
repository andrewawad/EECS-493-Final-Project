import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import "../style.css";
import { authentication } from "./services/firebase";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import ReactCardFlip from "react-card-flip";
// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   LineSeries,
//   AreaSeries,
//   GradientDefs,
//   Borders,
// } from "react-vis";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';


const DAYS = ["Mon", "Tu", "Wed ", "Thu ", "Fri", "Sat", "Sun"];
class Card extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    // console.log(this.props.data)
    return (
      <>
        {
          (this.props.data != "empty") ? (
            <ReactCardFlip isFlipped={this.state.isFlipped} infinite>
              <div class="card" onClick={this.handleClick}>
                <h2 class="card-title">{this.props.title}</h2>
                <p class="card-num">{this.props.num}</p>
                <h3 class="card-subtitle">{this.props.subtitle}</h3>
              </div>
  
              <div class="card" onClick={this.handleClick}>
                <div class="graphs">
                  <h2 class="card-title">{this.props.title}</h2>
                  <LineChart width={300} height={150} data={this.props.data}>
                    <CartesianGrid strokeDasharray="10 10" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Line type="monotone" dataKey="y" stroke="#ED3F3F" />
                  </LineChart>
                </div>
              </div>
            </ReactCardFlip>
          ) : (
            <ReactCardFlip isFlipped={this.state.isFlipped} infinite>
              <div class="card" onClick={this.handleClick}>
                <h2 class="card-title">{this.props.title}</h2>
                <p class="card-num">{this.props.num}</p>
                <h3 class="card-subtitle">{this.props.subtitle}</h3>
              </div>

              <div class="card" onClick={this.handleClick}>
                <h2 class="card-title">{this.props.title}</h2>
                <p class="card-num">{this.props.num}</p>
                <h3 class="card-subtitle">{this.props.subtitle}</h3>
              </div>
            </ReactCardFlip>
          )
        }
      </>
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

var journals = [];

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
      journals: [],
    };
  }

  signOut() {
    try {
      authentication.signOut();
      return <Redirect to="/" />;
    } catch (error) {
      alert(error);
    }
  }

  componentDidMount() {
    var uid = firebase.auth().currentUser.uid;
    db.collection("users")
      .doc(uid)
      .get()
      .then((e) => {
        console.log(e.data());
        let data = e.data().entries;
        if (data) {
          let journals = [];

          let len = Object.keys(data).length;
          let relSum = 0;
          let overSum = 0;
          let healthSum = 0;
          let hapSum = 0;
          let learnSum = 0;
          let prodSum = 0;
          let stressSum = 0;
  
          let relData = [];
          let overData = [];
          let healthData = [];
          let hapData = [];
          let learnData = [];
          let prodData = [];
          let stressData = [];
  
          Object.keys(data).forEach((key) => {
            relSum += parseFloat(data[key].relationships);
            relData.push({x: key, y: parseFloat(data[key].relationships)});
            
            overSum += parseFloat(data[key].overall);
            overData.push({x: key, y: parseFloat(data[key].overall)});
            
            healthSum += parseFloat(data[key].healthy);
            healthData.push({x: key, y: parseFloat(data[key].healthy)});
            
            hapSum += parseFloat(data[key].happy);
            hapData.push({x: key, y: parseFloat(data[key].happy)});
            
            learnSum += parseFloat(data[key].learn);
            learnData.push({x: key, y: parseFloat(data[key].learn)});
            
            prodSum += parseFloat(data[key].productive);
            prodData.push({x: key, y: parseFloat(data[key].productive)});
            
            stressSum += parseFloat(data[key].stress);
            stressData.push({x: key, y: parseFloat(data[key].stress)});

            journals.push(data[key].text);
          });

          if (len < 1) {
            this.setState({
              totalEntries: len,
              hapAvg: "-",
              healthAvg: "-",
              learnAvg: "-",
              overallAvg: "-",
              prodAvg: "-",
              relAvg: "-",
              stressAvg: "-",
              
              relData: relData,
              overData: overData,
              healthData: healthData,
              hapData: hapData,
              learnData: learnData,
              prodData: prodData,
              stressData: stressData,

              journals: journals,
            });
          }
          else {
            this.setState({
              totalEntries: len,
              hapAvg: Math.round((100 * hapSum) / len) / 100,
              healthAvg: Math.round((100 * healthSum) / len) / 100,
              learnAvg: Math.round((100 * learnSum) / len) / 100,
              overallAvg: Math.round((100 * overSum) / len) / 100,
              prodAvg: Math.round((100 * prodSum) / len) / 100,
              relAvg: Math.round((100 * relSum) / len) / 100,
              stressAvg: Math.round((100 * stressSum) / len) / 100,
              
              relData: relData,
              overData: overData,
              healthData: healthData,
              hapData: hapData,
              learnData: learnData,
              prodData: prodData,
              stressData: stressData,

              journals: journals,
            });
          }
        }
        console.log(this.state);

      });
  }

  render() {

    var renderedOutput = this.state.journals.map(item => <Note title={item}></Note>);

    return (
      <div class="full-dash">
        <h1 class="dashTitle">
          {firebase
            .auth()
            .currentUser.displayName.substr(
              0,
              firebase.auth().currentUser.displayName.indexOf(" ")
            )}
          's Dashboard{" "}
        </h1>
        <button class="logout" onClick={this.signOut}>
          logout
        </button>

        <h2 class="subtitle">Stats</h2>
        <div class="card-cont">
          <Card 
            title="🔥  TOTAL"
            num={this.state.totalEntries}
            subtitle="days tracking your life metrics"
            data="empty"
          />
          <Card
            title="😃  HAPPINESS"
            num={this.state.hapAvg}
            subtitle="overall"
            data={this.state.hapData}
          />
          <Card
            title="💪  HEALTH"
            num={this.state.healthAvg}
            subtitle="overall"
            data={this.state.healthData}
          />
          <Card
            title="📋  PRODUCTIVITY"
            num={this.state.prodAvg}
            subtitle="overall"
            data={this.state.prodData}
          />
          <Card
            title="📚  LEARNING"
            num={this.state.learnAvg}
            subtitle="overall"
            data={this.state.learnData}
            />
          <Card
            title="🏝  MANAGING STRESS"
            num={this.state.stressAvg}
            subtitle="overall"
            data={this.state.stressData}
            />
          <Card
            title="🤝  RELATIONSHIPS"
            num={this.state.relAvg}
            subtitle="overall"
            data={this.state.relData}
          />
        </div>

        <h2 class="subtitle">Journal Entries</h2>

        {renderedOutput}

        <div>
          <Link to="/form">
            <div Class="plus-button">+</div>
          </Link>
        </div>
      </div>
    );
  }
}
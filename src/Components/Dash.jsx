import React, { Component } from 'react';
import '../style.css';

class Card extends Component {
  render() {
    return(
      <div class="card">
        <h2 class="card-title">{this.props.title}</h2>
        <p class="card-num">{this.props.num}</p>
        <h3 class="card-subtitle">{this.props.subtitle}</h3>
      </div>
    )
  }
}

export default class Dash extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to your dashboard!</h1>
        <div class="card-cont">
          <Card title="Happiness" num="9.7" subtitle="this week" />
          <Card title="Health" num="4.7" subtitle="this week" />
          <Card title="????" num="4.7" subtitle="this week" />
          <Card title="????" num="4.7" subtitle="this week" />
          <Card title="????" num="4.7" subtitle="this week" />
          <Card title="????" num="4.7" subtitle="this week" />
        </div>

        <div>
          <div class="plus-button">
            +
          </div>
        </div>
      </div>
    )
  }
}

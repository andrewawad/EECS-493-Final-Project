import React, { Component } from 'react'

export default class SingleMood extends Component {
  render() {
    return (
      <div>
        I am {this.props.mood}.
      </div>
    )
  }
}
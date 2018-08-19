import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        {this.props.value < 0.2 ? null : <colorBox opacity={this.props.value - 0.1}/>}
      </div>
    )
  }

}

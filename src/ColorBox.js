import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        {this.props.value >= 0.2 ? <colorBox opacity={this.props.value}/> : null }
      </div>
    )
  }

}

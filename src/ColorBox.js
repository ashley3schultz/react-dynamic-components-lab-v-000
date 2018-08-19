import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
        {
          const newValue = this.props.value * 2
          if (this.props.value < 100) {
            return (
              <div>
                <Example value={newValue} />
              </div>
            )
          } else {
            return null
          }
        }
      </div>
    )
  }

}

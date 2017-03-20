import React from 'react'

var LinAdjust = React.createClass({

  getInitialState: function() {
    var max = this.props.max;
    var min = this.props.min;
    var scale = max - min;
    return {
      max: max,
      min: min,
      scale: scale
    }
  },

  handleChange: function(event){
    let value = this.linValue(event.target.value);
    this.props.onChange(value);
  },

  linValue: function(position){
    let lin = position * this.state.scale + this.state.min
    return lin
  },

  getDefaultValue: function(){
    let value = (this.props.default - this.state.min) / this.state.scale
    return value
  },

  render: function(){
    let label = <label>{this.props.name}</label>
    let slider = <input
    type = "range"
    id = {this.props.name}
    min = {0}
    max = {1}
    step = {1 / 256}
    defaultValue = {this.getDefaultValue()}
    onChange = {this.handleChange} />

    return(
      <div className = "adjust">{label}{slider}</div>
    )
  }

})

export default LinAdjust
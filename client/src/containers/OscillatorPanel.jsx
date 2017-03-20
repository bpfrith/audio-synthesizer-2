import React from 'react'

import LinAdjust from '../components/LinAdjust'

class OscillatorPannel extends React.Component{

  handleDetuneChange(newDetune){
    this.props.onChange({vcoDeturn: newDetune})
  },

  render(){
    return (
      <div classname = "synthmodule">
        <LinAdjust
        name = "detune"
        min = {-50}
        max = {50}
        default = {this.props.detune}
        onChange = {this.handleDetuneChange} />
      </div>
    )
  }

}

export default OscillatorPannel
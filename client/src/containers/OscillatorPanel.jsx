import React from 'react'

import LinAdjust from '../components/LinAdjust'
import Synth from '../components/Synth'

class OscillatorPanel extends React.Component{

  handleDetuneChange(newDetune){
    this.props.onChange({vcoDetune: newDetune})
  }

  render(){
    return (
      <div className = "synthmodule">
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

export default OscillatorPanel
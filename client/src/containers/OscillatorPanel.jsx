import React from 'react'

import LinAdjust from '../components/LinAdjust'
import Synth from '../components/Synth'

class OscillatorPanel extends React.Component{

  constructor(props){
    super(props)
    this.handleDetuneChange = this.handleDetuneChange.bind(this)
  }

  handleDetuneChange(newDetune){
    this.props.onChange({vcoDetune: newDetune})
  }

  render(){
    return (
      <div className = "synthmodule">
        <LinAdjust
        name = "Detune"
        min = {-50}
        max = {50}
        default = {this.props.detune}
        onChange = {this.handleDetuneChange} />
      </div>
    )
  }

}

export default OscillatorPanel
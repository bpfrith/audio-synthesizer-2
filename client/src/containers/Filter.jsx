import React from 'react'

import LinAdjust from '../components/LinAdjust'
import LogAdjust from '../components/LogAdjust'

class Filter extends React.Component{

  handleCutoffChange(newFreq){
    this.props.onChange({vcfResonance: newRes})
  },

  render(){
    return (
      <div className="synthmodule">
        <LinAdjust
          name = 'cutoff'
          min = {20}
          max = {20000}
          onChange = {this.handleCutoffChange}
          default = {this.props.cutoff}/>
        <LogAdjust
        name = 'res'
        min = {1}
        max = {30}
        onChange = {this.handleResonanceChange}
        default = {this.props.resonance}/>
      </div>
    )
  }

}

export default Filter
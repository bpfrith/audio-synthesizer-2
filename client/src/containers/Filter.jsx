import React from 'react'

import LinAdjust from '../components/LinAdjust'
import LogAdjust from '../components/LogAdjust'

class Filter extends React.Component{

  constructor(props){
    super(props)
    this.handleCutoffChange = this.handleCutoffChange.bind(this)
    this.handleResonanceChange = this.handleResonanceChange.bind(this)
  }

  handleCutoffChange(newFreq){
    this.props.onChange({vcfCutoff: newFreq})
  }

  handleResonanceChange(newRes){
    console.log(this)
    this.props.onChange({vcfResonance: newRes})
  }

  render(){
    return (
      <div className="synthmodule">
        <LinAdjust
          name = 'Cutoff'
          min = {20}
          max = {20000}
          onChange = {this.handleCutoffChange}
          default = {this.props.cutoff}/>
        <LogAdjust
        name = 'Res'
        min = {1}
        max = {30}
        onChange = {this.handleResonanceChange}
        default = {this.props.resonance}/>
      </div>
    )
  }

}

export default Filter
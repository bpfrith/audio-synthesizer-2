import React from 'react'

import LinAdjust from '../components/LinAdjust'
import LogAdjust from '../components/LogAdjust'

class FilterPanel extends React.Component{

  constructor(props){
    super(props)
    this.handleDecayChange = this.handleDecayChange.bind(this)
  }

  handleDecayChange(newDecay){
    this.props.onChange({envDecay: newDecay})
  }

  render(){
    return (
      <div className = "synthmodule">
        <logAdjust
          name = "Decay"
          min = {0.01}
          max = {10}
          default = {this.props.decay}
          onChange = {this.handleDecayChange} />
      </div>
    )
  }

}

export default FilterPanel
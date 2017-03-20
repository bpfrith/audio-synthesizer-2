import React from 'react'
import ReactDOM from 'react-dom'

import SynthContainer from './containers/SynthContainer'

window.onload = function(){
  ReactDOM.render(
    <SynthContainer/>,
    document.getElementById('app')
  )
}
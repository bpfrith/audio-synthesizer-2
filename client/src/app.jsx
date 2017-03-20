var React = require('react')
var ReactDOM = require('react-dom')

import SynthContainer from './containers/SynthContainer'

window.onload = function(){
  ReactDOM.render(
    <SynthContainer/>
    document.getElementById('app')
  )
}
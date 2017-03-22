import React from 'react'

class Oscillator extends React.Component{

  constructor(props){
    super(props)
    this.oscillators = []
    this.addOscillators(2)

    console.log(props)
  }

  addOscillators(num){
    if(num < 1) return
      this.oscillators.push(this.props.createOscillator())
    this.addOscillators(num - 1)
  }

  setWaveform(waveform){
    this.oscillators.forEach(osc => osc.type = waveform)
  }

  setFrequency(freq, time){
    if(!time) time = this.props.currentTime
    this.oscillators.forEach(osc => osc.frequency.setValueAtTime(freq, time))
  }

  setDetune(cents, time){
    if(!time) time = this.props.currentTime
    this.oscillators[0].detune.setValueAtTime(cents, time);
  }

  connect (object){
    this.oscillators.forEach(osc => osc.connect(object))
  }

  start(time){
    if(!time) time = this.props.currentTime
    this.oscillators.forEach(osc => osc.start(time))
  }

  render(){
    return null
  }
  
}

export default Oscillator
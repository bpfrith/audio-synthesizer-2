const React = require('react');

class Oscillator extends React.Component{

  constructor(context){
    super(context)
    this.context = context
    this.oscillator = []
    this.addOscillators(2)
  }

  addOscillators(num){
    if(num < 1) return
      this.oscillator.push(this.context.createOscillator())
      this.addOscillators(num - 1)
  }

  setWaveform(waveform){
    this.oscillator.forEach(osc => osc.type = waveform)
  }
}
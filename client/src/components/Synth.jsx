var React = require('react')

var Oscillator = require('./Oscillator')

class Synth extends React.Component{

  getInitialState(){
    return{
      frequency: 0,
      osc: {},
      lpf: {},
      amp: {}
    }
  }

  componentDidMount(){
    var audioContext = new window.AudioContext
    var oscillator = new Oscillator(audioContext)
    var filter = audioContext.createFilter()
    var outputAmp = audioContext.createGain()

    outputAmp.connect(audioContext.destination)
    outputAmp.gain.value = this.props.params.level

    filter.connect(coutputAmp)
    filter.type = "lowpass"
    filter.frequency.valye = this.props.params.vcfCutoff
    filter.Q.value = this.props.params.vcfResonance

    oscillator.connect(filter)
    oscilllator.setWaveform("sine")
    oscillator.setFrequency(this.state.frequency || 261.63)
    oscillator.setDetune(this.props.params.vcoDetune)
    oscillator.start(audioContext.currentTime)

    this.setState({
      context: audioContext,
      osc: oscillator
      lpf: filter,
      amp:outputAmp
    })
  }
}
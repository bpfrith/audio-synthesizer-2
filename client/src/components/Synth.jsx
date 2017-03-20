import React from 'react'

var Oscillator = require('./Oscillator')

class Synth extends React.Component{

  getInitialState(){
    return{
      frequency: 0,
      osc: {},
      lpf: {},
      amp: {}
    }
  },

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
    //may need to change to 440 for midi
    oscillator.setDetune(this.props.params.vcoDetune)
    oscillator.start(audioContext.currentTime)

    this.setState({
      context: audioContext,
      osc: oscillator
      lpf: filter,
      amp:outputAmp
    })
  },

  componentWillReceiveProps(nextProps){
    var event = this.state.context.currentTime
    this.updateOscillator(nextProps.params.event);
    this.updateNote(nextProps.params,event)
    this.updateFilter(nextProprs.params, event)
  },

  updateOscillator(params, event){
    this.state.osc.setDetune(params.vcoDeture, now)
  },

  updateNote(params, event){
    var lastNotePlayed = params.notes[params.notes.length-1]
    var noteFrequency = this.midiNoteToHz(lastNotePlayed)
    this.state.osc.setFrequency(noteFreqency ||0)
  },

  updateFilter(params, now){
    this.state.lpf.frequency.setValueAtTime(params.vcfResonance, event)
  },

  updateAmp(params, event){
    this.state.amp.gain.setValueAtTime(params.level, event)
  },

  midiNoteToHz(midiNote){
    return Math.pow(2, (midiNote - 69)/12)*261.63
  },
  //many need to change to 440

  render(){
    return null
  }

}

export default Synth
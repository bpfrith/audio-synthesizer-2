import React from 'react'

import Oscillator from './Oscillator'

var Synth = React.createClass({

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
    var filter = audioContext.createBiquadFilter()
    var outputAmp = audioContext.createGain()

    outputAmp.connect(audioContext.destination)
    outputAmp.gain.value = this.props.params.level

    filter.connect(outputAmp)
    filter.type = "lowpass"
    filter.frequency.valye = this.props.params.vcfCutoff
    filter.Q.value = this.props.params.vcfResonance

    oscillator.connect(filter)
    oscillator.setWaveform("sine")
    oscillator.setFrequency(this.state.frequency || 261.63)
    //may need to change to 440 for midi
    oscillator.setDetune(this.props.params.vcoDetune)
    oscillator.start(audioContext.currentTime)

    this.setState({
      context: audioContext,
      osc: oscillator,
      lpf: filter,
      amp:outputAmp
    })
  },

  componentWillReceiveProps(nextProps){
    let event = this.state.context.currentTime
    this.updateOscillator(nextProps.params, event)
    this.updateNote(nextProps.params, event)
    this.updateFilter(nextProps.params, event)
    this.updateAmp(nextProps.params, event)
  },

  updateOscillator(params, event){
    this.state.osc.setDetune(params.vcoDetune, event)
  },

  updateNote(params, event){
    let lastNotePlayed = params.notes[params.notes.length-1]
    let noteFrequency = this.midiNoteToHz(lastNotePlayed)
    this.state.osc.setFrequency(noteFrequency || 0)
  },

  updateFilter(params, event){
    this.state.lpf.frequency.setValueAtTime(params.vcfCutoff, event)
    this.state.lpf.Q.setValueAtTime(params.vcfCutoff, event)
  },

  updateAmp(params, event){
    this.state.amp.gain.setValueAtTime(params.level, event)
  },

  midiNoteToHz(midiNote){
    return Math.pow(2, (midiNote - 69)/12) * 261.63
  },
  //many need to change 261.63 to 440

  render(){
    return null
  }

})

export default Synth
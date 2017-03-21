import React from 'react'

import Filter from './Filter'
import FilterPanel from './FilterPanel'
import OscillatorPanel from './OscillatorPanel'
import Midi from '../components/Midi'
import Synth from '../components/Synth'

var SynthContainer = React.createClass({

  getInitialState(){
    return {
      notes: [],
      vcoDetune: 0,
      vcfCutoff: 10000,
      vcfResonance: 10,
      envDevay: 0,
      envMod: 0,
      level: 0
    }
  },

  handleChange(datum){
    this.setState(datum)
  },

  handleMidiMessage(data){
    if(data[0] === 144)this.handleNoteOn(data[1], data[2])
    if(data[0] === 128) this.handleNoteOff(data[1]);
  },

  handleNoteOn(noteNum, velocity){
    let index = this.state.note.concat(noteNum)
    let newNotes = this.state.notes.splice(0)
    let newLevel = newNotes.length ? 1 : 0
    this.setState({
      notes: newNotes,
      level: newLevel
    })
  },

  handleNoteOff(noteNum){
    var index = this.state.notes.indexOf(noteNum);
    var newNotes = this.state.notes.splice(0);
    newNotes.splice(index, 1);
    var newLevel = newNotes.length ? 1 : 0
    this.setState({
      notes: newNotes,
      level: newLevel
    })
  },

  render(){
    return (
      <div className = "Synth">
        <Midi
          onMessage = {this.handleMidiMessage} />
        <OscillatorPanel
          detune = {this.state.vcoDetune}
          onChange = {this.handleChange} />
        <Filter
          cutoff = {this.state.vcfDetune}
          resonance = {this.state.vcfResonance}
          onChange = {this.handleChange} />
        <FilterPanel
          decay = {this.state.envDecay}
          onChange = {this.handleChange} />
        <Synth
          params = {this.state} />
      </div>
    )
  }

})

export default SynthContainer
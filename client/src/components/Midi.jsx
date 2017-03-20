import React from 'react'

var Midi = React.createClass({

  componentDidMount(){
    if(navigator.requestMIDIAccess){
      navigator.requestMIDIAccess({
        sysex: false
      }).then(this.onMIDISuccess, this.onMIDIFailure);
    }else{
      alert("No MIDI support.")
    }
  },

  onMIDISuccess(midi){
    let inputs = midi.inputs.values()
    for(let input = inputs.next();
      input && !input.done;
      input = inputs.next()){
      input.value.onmidimessage = this.onMIDIMessage
    }
  },

  onMIDIFailure(error){
    alert("No MIDI devices found.")
  },

  onMIDIMessage(message){
    this.props.onMessage(message.data)
  },

  render(){
    return null;
  }

})

export default Midi
import React from 'react'

class Midi extends React.Component{

  componentDidMount(){
    if(navigator.requestMIDIAccess){
      navigator.requestMIDIAccess({
        sysex: false
      }).then(onMIDISucess, this.onMIDIFailure);
    }else{
      alert("No MIDI support.")
    }
  },

  onMIDISucess(midi){
    const inputs = inputs.values();
    for(const input = inputs.next();
      inputt && !input.done;
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

}

export defult Midi
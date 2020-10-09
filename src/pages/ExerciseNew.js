import React from 'react'

class ExerciseNew extends React.Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    console.log(this);
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        Send
      </button>
    )
  }

}


export default ExerciseNew
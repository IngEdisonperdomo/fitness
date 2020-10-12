import React from 'react'
import FatalError from './500'
import ExcersiceNew from './excersiceNew'
import urlGet from '../config'



class ExerciseNewContainer extends React.Component {

  state = {
    form:{
      title:'', 
      description:'', 
      img:'', 
      leftColor:'', 
      rightColor:''
    },
    loading:false,
    error: null

  }

  handleChange = e => {
    
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e =>{

    this.setState({
      loading: true
    })


    e.preventDefault();
    //console.log(this.state);

    try {
      let config = {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state.form)
      }

      let res = await fetch(urlGet, config)
      let json = await res.json();
      console.log(json);

      this.setState({
        loading: false
      })

      this.props.history.push('/exercise')

    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
  }

  render(){

    if(this.state.error)
      return <FatalError />

    return <ExcersiceNew  
      form={this.state.form}
      onChange={this.handleChange}
      onSubmit={this.handleSubmit}

    />
  }

}


export default ExerciseNewContainer
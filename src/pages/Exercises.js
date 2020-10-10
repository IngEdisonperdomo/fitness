import React from 'react'
import Excersice from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/button'
import Loading from '../components/loading'
import FatalError from './500'

class Exercises extends React.Component {

  state = {
    data: [],
    loading: true,
    error: null
  }

  async componentDidMount() {

    await this.fetchExcersices()
  }

  fetchExcersices = async () => {

    try {

      let res = await fetch('http://localhost:8000/api/exercises')
      let data = await res.json();
      console.log(data)

      this.setState({
        data,
        loading: false
      })

    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }


  }





  render() {

    if(this.state.loading)
      return <Loading />
    if(this.state.error)
      return <FatalError />

    return (

      <React.Fragment>
        <Welcome username="Raul" />

        <Excersice
          exercises={this.state.data}
        />

        <AddButton />


      </React.Fragment>
    )
  }


}

export default Exercises
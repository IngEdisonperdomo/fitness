import React from 'react'
import Excersice from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/button'
import Loading from '../components/loading'
import FatalError from './500'
import useFetch from '../hooks/useFetch'
import urlGet from '../config'

const Exercises = () =>{

  const {data, loading, error } = useFetch(urlGet)

  if(loading)
    return <Loading />
  if(error)
    return <FatalError />

  return (

    <React.Fragment>
      <Welcome username="Raul" />

      <Excersice
        exercises={data}
      />

      <AddButton />


    </React.Fragment>
  )

}
export default Exercises




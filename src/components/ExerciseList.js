import React from 'react'
import Card from './Card'

const ExcerciseList = ({exercises}) => (
  <React.Fragment>
    { exercises.map( (exercises) =>{

      return (
        <Card
        key={exercises.id}
        {...exercises}
      />
      );

    } ) }
  </React.Fragment>
)



export default ExcerciseList
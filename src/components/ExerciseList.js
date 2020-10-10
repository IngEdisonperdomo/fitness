import React from 'react'
import Card from './Card'

const ExcerciseList = ({exercises}) => (
  <React.Fragment>
    { exercises.map( (exercises) =>{

      return (
        <Card
        key={exercises.id}
        title={exercises.title}
        description={exercises.description}
        img={exercises.img}
        leftColor={exercises.leftColor}
        rightColor={exercises.rightColor}
      />
      );

    } ) }
  </React.Fragment>
)



export default ExcerciseList
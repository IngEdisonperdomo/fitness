import React from 'react'
import Card from './Card'

const ExcerciseList = ({exercises}) => (
  <div>
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
  </div>
)



export default ExcerciseList
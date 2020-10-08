import React from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'

class Exercises extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: [{
        "id" : 1,
        "title": "prueba",
        "description": "esto es una prueba",
        "img": "",
        "leftColor": "#A74CF2",
        "rightColor": "#617BFB"
      },
      {
        "id" : 2,
        "title": "prueba 22",
        "description": "esto es una prueba 22",
        "img": "",
        "leftColor": "#17EAD9",
        "rightColor": "#F76B1C"
      }
    ]
    }
  }

  render() {
    return (

      <div>
        <Welcome username="Raul" />


<Card
            title="Technique Guides"
            description="Learn amazing street workout"
            img=""
            leftColor="#A74CF2"
            rightColor="#617BFB"
          />
        

      </div>
    )
  }


}

export default Exercises
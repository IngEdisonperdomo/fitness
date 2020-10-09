import React from 'react'
import './style/addButton.css'
import buttomImg from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
  <Link to="/exercise/new">
      <img src={buttomImg} className="Fitness-Add" alt="button"/>
    </Link>
)



export default AddButton

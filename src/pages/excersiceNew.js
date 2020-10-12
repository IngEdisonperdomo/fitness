import React from 'react'
import ExcersiceFrom from '../components/exerciseForm'
import Card from '../components/Card'


const ExcersiceNew = ({form,onChange,onSubmit}) => (

  <div className="row">
        <div className="col-sm">
          <Card form={form} /> 
        </div>
        <div className="col-sm">
          <ExcersiceFrom 
            onChange={onChange} 
            onSubmit={onSubmit}
            form={form}
          />
        </div>
      </div>

)

export default ExcersiceNew
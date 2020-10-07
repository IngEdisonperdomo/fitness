/* const element = document.createElement('h1')
element.innerText = "Hello React"
const container = document.getElementById('root')
container.appendChild(element) */

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firtsName : 'Raul',
  lastName : 'Palacios',
  avatar : ""
}

function getName(user){
  return `${user.firtsName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}</h1>
  }

  return <h1>Hello Stranger</h1>
}

const name = "edison"
//const element = <div> { getGreeting(user) } </div>
//const element = <img src={user.avatar} />
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
)
const container = document.getElementById('root')

ReactDOM.render(element,container)


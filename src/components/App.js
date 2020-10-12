import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercise from '../pages/Exercises'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NoFound from '../components/Nofound'

const App = () => (
  <BrowserRouter>
        <Switch>
          <Route exact path="/exercise" component={Exercise} />
          <Route exact path="/exercise/new" component={ExerciseNewContainer} />
          <Route path="/" component={Exercise} />
          <Route component={NoFound} />
        </Switch>
      </BrowserRouter>
)



export default App
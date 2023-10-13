import { useState } from 'react'
import { Route, Switch } from 'wouter'
import './App.css'

// components
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import { Home, Natural, AnimalsDetail, Animals } from './pages'




function App() {
  const [,] = useState(0)

  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/animals' component={Animals} />
        <Route path='/animals/:animalsName' component={AnimalsDetail} />
        <Route path='/natural' component={Natural} />

      </Switch>


      <Footer />

    </>
  )
}

export default App

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Route, Switch } from 'wouter'

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Animals, Home, Natural, AnimalsDetail } from './pages';


function App() {

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


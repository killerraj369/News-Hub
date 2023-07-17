import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Fetchdata from './components/Fetchdata'

// The following code is taken from the react-dom example
import {
  BrowserRouter as Router,
  Routes, // change swith to routes
  Route,


} from "react-router-dom";
import Mainfooter from './components/Mainfooter'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          {/* The follwing line will render <Home/> component when we go to the '/' route */}
          <Route exact path='/' element={<Home />} />

          <Route path='/general' element={<Fetchdata cat="general" />} />
          <Route path='/trending' element={<Fetchdata cat="trending" />} />

          <Route path='/business' element={<Fetchdata cat="business" />} />

          <Route path='/entertainment' element={<Fetchdata cat="entertainment" />} />

          <Route path='/health' element={<Fetchdata cat="health" />} />
          <Route path='/sports' element={<Fetchdata cat="sports" />} />
          <Route path='/tech' element={<Fetchdata cat="tech" />}>



          </Route>
        </Routes>

        <Mainfooter />

      </Router>
    </>
  )
}

export default App

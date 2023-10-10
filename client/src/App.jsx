import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './components/Event'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/Queens',
      element: <LocationEvents index={"Queens"} />
    },
    {
      path: '/Brooklyn',
      element: <LocationEvents index={"Brooklyn"} />
    },
    {
      path: '/Manhattan',
      element: <LocationEvents index={"Manhattan"} />
    },
    {
      path: '/StatenIsland',
      element: <LocationEvents index={"StatenIsland"} />
    },
    {
      path: '/Bronx',
      element: <LocationEvents index={"Bronx"} />
    } 
  ])

  return (
    <div className='app container'>

      <header className='main-header'>
        <h1>Virtual Community Space</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App
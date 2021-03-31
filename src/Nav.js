import React from 'react'
import './switcher.scss'
import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  import Work from './Work'
  import Home from './Home'
  import About from './About'
  

const Nav = () => {
    const [ colorTheme, setColorTheme ] = useState('theme-white')
    
    useEffect(() => {
      const currentThemeColor = localStorage.getItem('theme-color')
      if(currentThemeColor) {
        setColorTheme(currentThemeColor)
      }
    },[])
    
    const handleClick = (theme) => {
        setColorTheme(theme)
        localStorage.setItem('theme-color', theme)
    }

    return (
        <Router>
        <div className={`App ${colorTheme}`}>
        <nav className='nav'>
          <div className='theme-options'>
              <div id='theme-white' onClick={() => handleClick('theme-white')} className={`${colorTheme === 'theme-white' ? 'active' : ''}`} ></div>
              <div id='theme-blue' onClick={() => handleClick('theme-blue')} className={`${colorTheme === 'theme-blue' ? 'active' : ''}`} />
              <div id='theme-orange' onClick={() => handleClick('theme-orange')} className={`${colorTheme === 'theme-orange' ? 'active' : ''}`} />
              <div id='theme-purple' onClick={() => handleClick('theme-purple')} className={`${colorTheme === 'theme-purple' ? 'active' : ''}`} />
              <div id='theme-green' onClick={() => handleClick('theme-green')} className={`${colorTheme === 'theme-green' ? 'active' : ''}`} />
              <div id='theme-black' onClick={() => handleClick('theme-black')} className={`${colorTheme === 'theme-black' ? 'active' : ''}`}/>
          </div>
            <ul className='ul'>
            <h2 className='logo'><span>I N</span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z"/></svg></h2>
              <li>
                <Link  className='nav-link' to='/' >Home</Link>
              </li>
              <li>
                <Link  className='nav-link' to='/about' >About me</Link>
              </li>
              <li>
                <Link  className='nav-link' to='/work' >Work</Link>
              </li>
            </ul>
            <ul className="social-icons">
              <li>
                  <a href="#" target="_blank"  aria-label="twitter social link">
                      <span aria-hidden="true" className="fab fa-twitter"></span>
                  </a>
              </li>
              <li>
                  <a href="top" target="_blank"  aria-label="facebook social link">
                      <span aria-hidden="true" className="fab fa-facebook"></span>
                  </a>
              </li>
              <li>
                  <a href="top" target="_blank"  aria-label="github social link">
                      <span aria-hidden="true" className="fab fa-github"></span>
                  </a>
              </li>
              <li>
                  <a href="top" target="_blank"  aria-label="dribbble social link">
                      <span aria-hidden="true" className="fab fa-dribbble"></span>
                  </a>
              </li>
              </ul>
          </nav>
          <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default Nav

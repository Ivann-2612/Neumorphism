import './App.css'
import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web"
import Nav from './Nav'

const alanKey = '47d87650097f1c030d76271add2f9f562e956eca572e1d8b807a3e2338fdd0dc/stage'


const App = () => {
  
  useEffect(() => {
    alanBtn({
      key:alanKey,
    })
  })
  return (
    <div className='Apii'>
      <Nav />
    </div>
  )
}

export default App;

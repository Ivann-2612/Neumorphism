import React from 'react'
import Typed from 'react-typed';

const Home = () => {
    return (
        <div className='wrapper'>
               <div className='home'>
              <p> Hi, I am<br/></p><h1>  Ivan Nikolic</h1> <h2><span class="cursor">   
              <Typed className='typed'
                    strings={['Frontend developer',
                              'Traveler',
                              'A fan of movies'            
                    ]}
                    typeSpeed={75}
                    backSpeed={50}
                    loop
                ></Typed> &nbsp;</span>based in Serbia</h2>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import Typed from 'react-typed'
import Logo from './images/logo.png'

const Home = () => {
    return (
        <div className='wrapper1'>
               <div className='home'>
               {/* <div className='Waterdrop'></div> */}
               <img className='img' src={Logo} alt='avatar' />
               <div className='wrapp-div'> 
                  <p> Hi, I am<br/></p><h1>  Ivan Nikolic</h1> <h2><span className="cursor">   
                   <Typed className='typed'
                    strings={['Frontend developer',
                              'UI Designer',
                              'Traveler',
                              'A fan of movies'            
                    ]}
                    typeSpeed={75}
                    backSpeed={50}
                    loop
                   ></Typed> &nbsp;</span>based in Serbia</h2>
                </div>
                 <h6>Copyright © 2021 Ivan Nikolic.</h6>
            </div>
        </div>
    )
}

export default Home

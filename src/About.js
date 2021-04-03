import React from 'react';

const About = () => {
    return (
        <div className='wrapper'>
            <div className='about'>
              <h4>I started as a self-taught web developer
              and continued learning JS and React.
              I have a strong will to progress
              and learn new technologies.
              My interests are innovative design and
              optimum user experience.</h4>
            <div className='skills'>
            <div className='frameworks'>
              <h4>Languages &amp; Frameworks</h4>
              <div className="languages-frameworks">
                <p className="text-center">HTML, CSS, JavaScript, React, Tailwind</p>
              </div>
                <p className="icon"><i className="fab fa-html5" aria-hidden="true"></i><i className="fab fa-css3-alt" aria-hidden="true"></i><i className="fab fa-js-square" aria-hidden="true"></i><i className="fab fa-react" aria-hidden="true"></i><i className="fab fa-bootstrap" aria-hidden="true"></i></p>
            </div>  
            <div className="tools">
              <h4>Tools &amp; Design</h4>
              <p className="text-center">Visual Studio Code, Github </p>
              <p className="icons"><i className="fas fa-laptop-code" aria-hidden="true"></i><i className="fab fa-github" aria-hidden="true"></i></p>
            </div >
            </div>
          </div>
          <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        </div>
        </div>
    )
}

export default About

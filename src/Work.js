import Project1 from './images/project-1.png'
import Project2 from './images/project-2.png'
import Project3 from './images/project-3.png'
import Project4 from './images/project-4.png'
import ProjectW from './images/Wairau.png'
import Project5 from './images/Mataura.png'
// import Cloud from './images/cloud.png'


const Work = () => {
      
      return (
        <div>
          {/* <img className='cloud' src={Cloud} /> */}
          <div className='wrapper'>
            <div className='main'>
                <div className='inside-wrapper'>
                  {/* <p>Ivan Nikolic</p> */}
                  <div className='grid'>
                   <h3><img src={Project2} alt='project1' /><br/><a href='https://ivann-2612.github.io/News-app/'>Blog App</a></h3>
                   <h3><img src={Project3} alt='project2' /><br/><a href='https://ivann-2612.github.io/Recipes-app/'>Recipes App</a></h3>
                   <h3><img src={Project1} alt='project3' /><br/><a href='https://ivann-2612.github.io/weather-app/'>Weather App</a></h3>
                   <h3><img src={ProjectW} alt='project4' /><br/><a href='https://ivann-2612.github.io/To-do-list/'>To-do App</a></h3>
                   <h3><img src={Project4} alt='project1' /><br/><a href='https://ivann-2612.github.io/Zavrsni-projekat/'>News App</a></h3>
                   <h3><img src={Project5} alt='project5' /><br/><a href='https://dribbble.com/ivan2612'>Dribbble</a></h3>
                  </div>
   
                </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default Work;
    
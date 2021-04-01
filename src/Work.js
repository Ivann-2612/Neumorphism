import Project1 from './images/project-1.png'
import Project2 from './images/project-2.png'
import Project3 from './images/project-3.png'
import Project4 from './images/project-4.png'


const Work = () => {
      
      return (
        <div>
          <div className='wrapper'>
            <div className='main'>
                <div className='inside-wrapper'>
                  {/* <p>Ivan Nikolic</p> */}
                  <div className='grid'>
                   <h3><img src={Project1} /><br/><a href='https://ivann-2612.github.io/News-app/'>Blog App</a></h3>
                   <h3><img src={Project2} /><br/><a href='https://ivann-2612.github.io/Recipes-app/'>Recipes App</a></h3>
                   <h3><img src={Project3} /><br/><a href='https://ivann-2612.github.io/weather-app/'>Weather App</a></h3>
                   <h3><img src={Project4} /><br/><a href='https://ivann-2612.github.io/To-do-list/'>To-do App</a></h3>
                  </div>
                  <div className='grid2'>
                   <h3 className='grid2-1'><img src={Project1} /><br/><a href='https://ivann-2612.github.io/Zavrsni-projekat/'>News App</a></h3>
                   <h3 className='grid2-2'><img src={Project1} /><br/><a href='https://ivann-2612.github.io/To-do-list/'>News App</a></h3>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )
    }
    
    export default Work;
    
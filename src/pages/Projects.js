import Slide from "../components/Slide";
import planet from '../img/planet.png'

const Projects = () => {

  const slides = [
    {
      id:'01',
      title:'Travelled App',
      img:'',
      color:'#D61355',
      subColor:'#FFFFFF',
      text:'blablabla',
      url:'https://www.youtube.com/watch?v=MejiQoKrHTY&ab_channel=Cantin'
    }
]

    return (
      <div className="Projects">
        {slides.map((slide)=>
          <Slide key={slide.id} data={slide}/>
        )}
          
      </div>
    );
  }
  
  export default Projects;
  
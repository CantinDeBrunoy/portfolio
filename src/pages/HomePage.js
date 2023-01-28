import './HomePage.css'
import paralax from '../plugin/paralax.js'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { homePageTradEng, homePageTradFR } from '../trad/homePageFormat';

const HomePage = () => {
    const [indexY,setIndexY] = useState();
    const [buttonIsClicked,setButtonIsClicked] = useState(false);
    const [buttonIsClickedFormat,setButtonIsClickedFormat] = useState(false);
    const [format,setFormat] = useState(homePageTradEng);
    const navigate = useNavigate();

    const handleScroll = () => {
        const scrollPosition = window.scrollY; 
        setIndexY(scrollPosition);
    };

    useEffect(() => {
        //handleScroll();
        setIndexY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onClickmyProjectButton = (bool) => {
        setButtonIsClicked(bool);
        setTimeout(() => {
            navigate('projects');
        }, "5000")
        setTimeout(() => {
            setButtonIsClicked(!bool);
        }, "12000")
          
    }

    const switchLanguage = (bool) => {
        setFormat(format == homePageTradFR ?  homePageTradEng: homePageTradFR);
        setTimeout(() => {
            setButtonIsClickedFormat(!bool);
        }, "1000")
        setButtonIsClickedFormat(bool);
    }

  return (
    <div className="HomePage">
        <div className={`LangButton ${buttonIsClickedFormat ? 'LangButtonActive': ''}`} onClick={() =>switchLanguage(true)}></div>

        <div className="paralax">
            <div className="paralax-item p-item1"></div>
            <div className="paralax-item p-item2"></div>
            <div className={`paralax-item p-item3 ${indexY > 1100 ? 'LowerZindex' : ''}`}></div>
        </div>

        <div className="container">
            <div className="content-top">
                <h1>{format.scroll}</h1>
            </div>
                       
            <div className="content-header">
                <h1>{format.name}</h1>
                <h2>{format.subtitle}</h2>
            </div>

            <div className={`content `}>
                    <button className='button' onClick={()=> onClickmyProjectButton(true)}>{format.projects}</button>
                    <div className={`backgroundTransition TransitionBlue ${buttonIsClicked ? 'displayBlock': ''}`}></div>
                    <div className={`backgroundTransition TransitionPurple ${buttonIsClicked ? 'displayBlock': ''}`}></div>
                    <div className={`backgroundTransition TransitionBlack ${buttonIsClicked ? 'displayBlock': ''}`}></div>
            </div>
            

        </div>
        <script src={paralax}></script>
    </div>
  );
}

export default HomePage;

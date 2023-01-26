import './HomePage.css'
import paralax from '../plugin/paralax.js'
import scrollDown from '../img/scrolldown.gif'
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [indexY,setIndexY] = useState();
    const [buttonIsClicked,setButtonIsClicked] = useState(false);

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
    }

  return (
    <div className="HomePage">
        <div className="paralax">
            <div className="paralax-item p-item1"></div>
            <div className="paralax-item p-item2"></div>
            <div className={`paralax-item p-item3 ${indexY > 1100 ? 'LowerZindex' : ''}`}></div>
        </div>

        <div className="container">
            <div className="content-top">
                <h1>SCROLL VERS LE BAS</h1>
            </div>
                       
            <div className="content-header">
                <h1>Cantin ROQUIER</h1>
                <h2>Développeur web</h2>
            </div>

            <div className={`content `}>
                    <button className='button' onClick={()=> onClickmyProjectButton(true)}>MES PROJETS</button>
                    <div className={`backgroundTransition ${buttonIsClicked ? 'displayBlock': ''}`}></div>
            </div>
            

        </div>
        <script src={paralax}></script>
    </div>
  );
}

export default HomePage;

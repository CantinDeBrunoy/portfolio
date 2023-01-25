import './HomePage.css'
import paralax from '../plugin/paralax.js'
import scrollDown from '../img/scrolldown.gif'

const HomePage = () => {


  return (
    <div className="HomePage">
        <div className="paralax">
            <div className="paralax-item p-item1"></div>
            <div className="paralax-item p-item2"></div>
            <div className="paralax-item p-item3"></div>
        </div>

        <div className="container">
            <div className="content-top">
                <h1>SCROLL VERS LE BAS</h1>
                {/* <img src={scrollDown}/> */}
            </div>
                       
            <div className="content-header">
                <h1>Cantin ROQUIER</h1>
                <h2>Développeur web</h2>
            </div>

            <div className="content">
                <button className='button'>BUTTON</button>
            </div>
            

        </div>
        <script src={paralax}></script>
    </div>
  );
}

export default HomePage;

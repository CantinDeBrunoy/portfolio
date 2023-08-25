import './Carousel.css'

const Carousel = ({data}) => {
    console.log(data);

    return (
      <div className="Carousel" style={{backgroundColor:data.color}}>
          {data.title}
      </div>
    );
  }
  
  export default Carousel;
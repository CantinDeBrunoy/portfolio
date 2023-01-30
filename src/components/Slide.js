import './Slide.css'

const Slide = ({data}) => {
    console.log(data);

  return (
    <div className="Slide" style={{backgroundColor:data.color}}>
        <span className="Slide_Id" style={{color:data.subColor}}>Projets n°{data.id}</span>
        <div className="Slide_Header">
          <span className="Slide_Title" style={{color:data.subColor}}>{data.title}</span>
        </div>
        <span className="Slide_Text">{data.text}</span>
        <a className="Slide_Link" href={data.url}>Voir la démo</a>
        
    </div>
  );
}

export default Slide;

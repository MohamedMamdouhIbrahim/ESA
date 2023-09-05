
import './mainview.css'

const mainview = (probs)=>
{
return(<div className="mainview" style={probs.color==null?{backgroundColor:'rgba(72,93,88,0.4)'}:{backgroundColor: probs.color}}>
   
    <p style={{color:'white'}}><h2>{probs.title}</h2>{probs.parag}</p> 
    <img src={probs.imgPath} alt='our vision'/>
</div>);

}

export default mainview;
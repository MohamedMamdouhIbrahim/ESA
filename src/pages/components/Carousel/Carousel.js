import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Carousel/carousel.css'
import img1_carousel from '../../../assets/carousel/profimg.jpeg';
import img2_carousel from '../../../assets/carousel/progimg2.jpg';
import img3_carousel from '../../../assets/carousel/img3_carousel.png';

const carousel = ()=>{

    return(<Carousel className="Carousell"  infiniteLoop={true} autoFocus={true} autoPlay={true} interval={3000}>
                <div className="imgcont" style={{background:`url(${img1_carousel})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',height:'70%',width:'100%'}} alt="img"><p>Don't worry about outrageous overhead, just top-notch service that won't break the bank!</p></div>


       
                <div className="imgcont" style={{background:`url(${img2_carousel})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',height:'70%',width:'100%'}} alt="img"><p>
                Start working with a team of proffessionals solely dedicated to your success, from lead creation to deal closing!</p></div>


      <img src={img3_carousel} alt="img"/>
       
    </Carousel>);
}

export default carousel;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Carousel/carousel.css'
import img1_carousel from '../../../assets/carousel/profimg.jpeg';
import img2_carousel from '../../../assets/carousel/progimg2.jpg';
import img3_carousel from '../../../assets/carousel/img3_carousel.png';

const carousel = ()=>{

    return(<Carousel className="Carousell"  infiniteLoop={true} autoFocus={true} autoPlay={true} interval={100000}>
                <div className="imgcont" style={{background:`url(${img1_carousel})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',height:'70%',width:'100%'}} alt="img"><p>"Elevate Your Journey: Discover Lucrative Partnerships in Real Estate with Us."</p></div>


       
                <div className="imgcont" style={{background:`url(${img2_carousel})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',height:'70%',width:'100%'}} alt="img"><p>
"Your Pathway to Prosperity: Join Us for LucrativeLucrative Real Estate Partnerships."</p></div>


      <img src={img3_carousel} alt="img"/>
       
    </Carousel>);
}

export default carousel;
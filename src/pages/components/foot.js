
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './foot.css'
import { NavLink } from 'react-router-dom';
export default function foot(){
    return(<footer className="site-footer"> <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify" style={{color:'#fff'}}>
Welcome to <i style={{color:'gold'}}>ESA</i>, your trusted partner in property acquisition services. At ESA, we understand that finding the perfect property is more than just a transaction – it's a journey towards finding your ideal space to call home or invest in. With a dedicated team and years of experience in the real estate industry, we offer top-notch acquisition services tailored to your unique needs. Our commitment extends beyond the ordinary as we combine personalized assistance with a modern approach, including cold calling strategies, to identify the hidden gems in the market. Discover the possibilities with ESA Real Estate as we pave the way for you to make informed, confident decisions in the dynamic world of real estate.</p>
      </div>



      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li><NavLink  to="/about">About us</NavLink></li>
          <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
          <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
        </ul>
      </div>
    </div>
    <hr></hr>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
     <a href="#">ESA</a>.
        </p>
      </div>

      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a className="twitter" href="#"><i clclassNameass="fa fa-twitter"></i></a></li>
          <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
          <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
        </ul>
      </div>
    </div>
  </div></footer>);
}
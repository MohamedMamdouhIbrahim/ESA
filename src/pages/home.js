
import WithComponent from "../hoc/MainLayout"
import Carousel from "./components/Carousel/Carousel";
import Mainview from "./components/mainview";
import './home.css'

import ourvision from '../assets/ourvis-removebg-preview.png'
import ourmission from '../assets/mis-removebg-preview.png'
import aboutusimg from '../assets/aboutus-removebg-preview.png'

const p0 = `Welcome to our world of Real Estate innovation! We're all about transparency – no hidden agendas here. Our Lead and Acquisition Managers seamlessly integrate with your CRM, giving you total access. Our Cold Calling service is practically a steal – almost free. Plus, we're not just here on Mondays; we're your daily sidekicks. Whether you're a seasoned pro or a newbie, we're your partners in success. Join us to redefine Real Estate Investment
`
const p1 = `Pioneering a specialized Real Estate call center, we streamline your operations from lead generating to closing the deal, including training and monitoring. Our focus is affordability and a partnership mindset, with a team of industry experts setting us apart.`

const p2 = `We're reshaping Real Estate support through transparency, excellence, and client-focused service. Our mission is to simplify your Real Estate journey from lead to deal, breaking the mold of call center stereotypes. We're dedicated to a transparency-driven support, ushering in a new era of Real Estate assistance`

const home = ()=>{


    
    return(
        <div className="homediv">
        <div className="CarouselContainer">
        <Carousel/>
        </div>
        <Mainview title={'About us'} parag={p0} imgPath={aboutusimg} />
        <br/>
        <Mainview title={'Our vision'} parag={p1} imgPath={ourvision}/>

    <br/>
    <Mainview title={'Our mission'} parag={p2} imgPath={ourmission}/>

    </div>
    
    )
}
export default WithComponent(home);
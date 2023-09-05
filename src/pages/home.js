
import WithComponent from "../hoc/MainLayout"
import Carousel from "./components/Carousel/Carousel";
import Mainview from "./components/mainview";
import './home.css'

import ourvision from '../assets/ourvis-removebg-preview.png'
import ourmission from '../assets/mis-removebg-preview.png'
import aboutusimg from '../assets/aboutus-removebg-preview.png'

const p0 = `Hey there, welcome to our world! We're not your typical call center agency – we're here to shake things up in the Real Estate realm. Imagine having a team solely dedicated to your success, from lead creation to deal closing. Our focus is creating magic in Real Estate support. What sets us apartis that we're all about transparency. No shady business here – our Lead Managers and Acquisition Managers jump right into your CRM, giving you full access to the action. As for our Cold Calling service, it's practically a steal. It's not free, but it's as close as you can get. But that's not all. We're not just here every Monday of the week– we're your daily sidekicks. If you have questions, concerns, or a sudden change of plan, our rep is gonna be there to help. Oh, and those call center stereotypes? We're on a mission to crush 'em. We're rewriting the book by being crystal clear about what we do. No outrageous overhead, just top-notch service that won't break the bank, we make the real money when you close the deal. And we're the opposite of that 'unreachable agency' – we're right here, ready to chat. So, whether you're a seasoned real estate maven or just starting out, we're your partners in success. Join us in this journey to redefine Real Estate support – where transparency, greatness, and your needs are always front and center.`
const p1 = `We're here to change the game.
Our vision is to be the first call center agency solely focused on Real Estate.
Our goal is clear: to make your Real Estate business run itself, from generating leads to closing deals.
But that's not all – we'll also handle training, monitoring, and those important regular meetings. Our aim? 
Affordable services that lighten your overhead. We're in this together – we make the real money when we close the deal. What makes us different? 
We're not just about sales – we're about understanding Real Estate inside and out. 
Expect our team to be pros who truly get it, not just another telemarketing call.`

const p2 = `"Elevating the Real Estate Acquisition Experience: 
Our mission is clear and ambitious – to redefine Real Estate support with a focus on transparency, excellence, and unwavering client service.
 We're determined to be the premier call center agency tailored exclusively for Real Estate. 
Our commitment is simple: to streamline our client's Real Estate journey, from lead generation to deal finalization.

We stand out by dismantling stereotypes associated with call center agencies.
 We're driven to provide transparency where others obscure.
 We're dedicated to delivering remarkable service at a fraction of the cost, and our doors are always open for our clients' needs. 
We're not just a support system – we're your partners, ensuring that our clients' success is ours too.

At the core, our mission is to elevate our clients' Real Estate endeavors by redefining the norms, 
providing unmatched transparency, delivering greatness, and offering steadfast, round-the-clock support.
 Welcome to a new era of Real Estate support."`

const home = ()=>{


    
    return(
        <div className="homediv">
        <div className="CarouselContainer">
        <Carousel/>
        </div>
        <Mainview title={'about us'} parag={p0} imgPath={aboutusimg} />
        <br/>
        <Mainview title={'Our vision'} parag={p1} imgPath={ourvision}/>

    <br/>
    <Mainview title={'Our mission'} parag={p2} imgPath={ourmission}/>

    </div>
    
    )
}
export default WithComponent(home);
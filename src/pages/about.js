
import WithComponent from "../hoc/MainLayout"
import './about.module.css'
import classes from './about.module.css'
import Slider from "./components/Slider"
import Mainview from "./components/mainview"
import coldcaller from '../assets/cold-caller-removebg-preview.png'
import qualityagentimg from '../assets/qualityagent-removebg-preview.png'
import trainerimg from '../assets/trainer.jpeg'
import followupimg from '../assets/followup-removebg-preview.png'
import bob from '../assets/img1.jpeg'
const about = ()=>{
    const calledcallerp = `The Bedrock of Real Estate Success!
    Our Cold Callers are the architects of opportunity, shaping connections with finesse (like your next door neighbor) and transforming your leads into gold. 
    Like the essential foundation of a structure, they will help fortify your real estate empire, call by call.
    Our team excels in extracting pertinent details from each homeowner, ensuring no valuable information remains untapped. `
    const qualityagent = `Custodians of Lead Excellence! 
    With a watchful eye, our diligent Quality Agents oversee Cold Callers and their discussions, ensuring each lead comes fortified with vital information on the 4 
    real estate pillars: Motivation, Asking Price, Condition, and Timeline. Like expert craftsmen, they make sure all conversations resonate trust, and that all leads are actually leads. Join us in setting new industry standards,
     where precision meets potential!`
     const trainers = `skilled Trainers illuminate the path during onboarding and lead weekly collective meetings,
     molding and honing the skills of our team. 
    They orchestrate the evolution of each Cold Caller, 
    fostering natural conversations through nuanced tonality and empowering them to conquer objections with the best rebuttals. `
    const leadmg = `With a steadfast commitment, our Lead Managers Carefully nurture every lead, fostering relationships through systematic follow-ups. 
    Functioning as adept junior acquisition managers, they actively engage in initial negotiations, skillfully uncovering pain points to prepare our closers for the kill. 
    Much like seasoned cultivators yield the finest crops, our Lead Managers cultivate opportunities with care`
    const am = ` Closers are the Pinnacle of our organisation. With precision and expertise, they execute the final decisive steps, going for the close of the deal. 
    As seasoned sales professionals, they navigate the intricacies of deals with finesse, leveraging their wealth of experience. 
    Having undergone our most rigorous onboarding process, they emerge as leaders in the art of acquisition and sales. 
    Like expert marksmen, they hit the mark and painpoints with unerring accuracy, do the last bits of negotiations (and renegotiations if need), and ultimately, securing deals that highlight their competence.`
    return(
        <div className={classes.Aboutpage}>

    <Mainview title={"Cold Callers"} parag={calledcallerp} imgPath={coldcaller} color={'#485d58'}/>
    <br/>
    <Mainview  title={'Quality Agents'} parag={qualityagent} imgPath={qualityagentimg} />
    <br/>={}
    <Mainview title={"Trainers"} parag={trainers} color={"#485d58"} imgPath={trainerimg} />
    <br/>
    <Mainview title={'Lead Managers/follow up sprecialists'} parag={leadmg} imgPath={followupimg}/>
    <br/>
    <Mainview title={"Acquisition manager"} parag={am} imgPath={bob} color={"#485d58"}/>

   <div className="scontainer">
    <p><h2 style={{color:'white'}}>Our team members</h2></p>
   <Slider/>
   </div>
   </div>
    )
}
export default WithComponent(about);
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpeg'

import arrowLeft from '../../assets/angle-left-solid.svg'
import arrowRight from '../../assets/angle-right-solid.svg'

import './slider.css'

import {useRef, useEffect, useState} from 'react';
const Slider = (probs)=>{

   const [draggingState , setDraggingState] = useState(false);
   const [startx,setStartX] = useState(0);
   const [startScrollLeft,setStartScrollLeft] = useState(0);

   const ref = useRef(null);
   const btnLeft = useRef(null);
   const btnRight = useRef(null);
   const myCard = useRef(null);

   const swipeRight = (e)=>{
      ref.current.scrollLeft += myCard.current.offsetWidth;
      console.log('swipping by btn left ',myCard.current.offsetWidth)
    }
    const swipeLeft = (e) =>{
      ref.current.scrollLeft -= myCard.current.offsetWidth;
      console.log('swipping by btn right ',myCard.current.offsetWidth)
    }



   const draggingStart = (e)=>
   {
     
      setDraggingState(true)
      setStartX(e.pageX);
      console.log('startx = ',startx);
      setStartScrollLeft(ref.current.scrollLeft);
      console.log('startscroll left = ',startScrollLeft)
      ref.current.classList.add('dragging');
   }

   const draggingStop = (e)=>
   {
      setDraggingState(false)
      ref.current.classList.remove('dragging');
   }
   const dragging = (e)=>{
      if(draggingState) 
      
      {
         let x = startScrollLeft - (e.pageX - startx)
         console.log('startScrollLeft ,e.pageX startx = ',startScrollLeft,e.pageX,startx,draggingState)
         ref.current.scrollLeft = startScrollLeft - (e.pageX - startx) 
         console.log('we will scroll now by ',x )}
      else{
         console.log('we will return now')
      return;}}

   useEffect(
      () => {const element = ref.current;
         const buttonLeft = btnLeft.current;
         const buttonRight = btnRight.current;
      
  console.log("the value of element is =>" ,element)
  
      element.addEventListener('mousedown',draggingStart);
      element.addEventListener('mousemove',dragging);
      element.addEventListener('mouseup',draggingStop);
      buttonLeft.addEventListener('click',swipeLeft);
      buttonRight.addEventListener('click',swipeRight);
      return () => {
         console.log('cleaning up the event lisner')
          element.removeEventListener('mousemove', dragging);
          element.removeEventListener('mousedown',draggingStart);
          element.removeEventListener('mouseup',draggingStop);
          buttonLeft.removeEventListener('click',swipeLeft);
          buttonRight.removeEventListener('click',swipeRight);
      };
   },[draggingState]);






    return(
    <div className='sliderbody'>
        <div className="wrapper">
            <img ref={btnLeft} src={arrowLeft} alt='arrowleft' className='arrowleft'/>
            <ul ref={ref} className="carouse1">
                  <li ref={myCard} className="card">
                     <div className="img">
                        <img src={img1} alt="Bahaa the manager"/>
                     </div>
                        <h2>Bahaa</h2>
                        <span>CEO</span>
                        
                  </li>
                  <li className="card">
                     <div className="img">
                        <img src={img2} alt="img"/>
                     </div>
                        <h2>Hemany</h2>
                        <span>CTO</span>
                        
                  </li>
                  <li className="card">
                     <div className="img">
                        <img src={img3} alt="img"/>
                     </div>
                        <h2>Mohaned</h2>
                        <span>Quality Manager</span>
                        
                  </li>
                  <li className="card">
                     <div className="img">
                        <img src={img4} alt="img"/>
                     </div>
                        <h2>Nervana</h2>
                        <span>SALES MANAGER</span>
                        
                  </li>
                  <li className="card">
                     <div className="img">
                        <img src={img5} alt="img"/>
                     </div>
                        <h2>hooda</h2>
                        <span>Operations manager</span>
                        
                  </li>
            </ul>
        <img ref={btnRight} className='arrowright' src={arrowRight} alt='arrowright'/>
    </div></div>
    );
}
export default Slider;
import './ourClients.css'
import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Modal from './components/UI/Modal/modal';

const OurClient = ()=>{

    const [state,setState] = useState('');
    const [modal,modalState] = useState(false);
    const data = [
        { name: 'Kansas', value: 1 },
        { name: 'Oklahoma City', value: 3 },
        { name: 'Memphis, TN', value: 1 },
        { name: 'DFW, tx', value: 4 },
        { name: 'Washington', value: 1 },
        { name: 'Sacramento, CA', value: 1 },

      ];
      ChartJS.register(ArcElement, Tooltip, Legend);
      const datat = {labels:['Kansas','Oklahoma City','Memphis, TN','DFW, tx','Washington','Sacramento, CA'],
      datasets: [
        {
          label: '# ofClients',
          data: [1, 3, 1, 4, 1, 1],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],};

const handleChange = (e)=>{let selectedState = e.target.value
    setState(selectedState)
  modalState(!modal)}
  const backdrophandler = ()=>{modalState(false)}

      

const stateInfo = {Kansas:{Total_number_of_clients: 1,Clients_working_now: 1,Deals_Closed: 14},
                   Oklahoma:{Total_number_of_clients: 1,Clients_working_now: 1,Deals_Closed:104},
                   Memphis:{Total_number_of_clients: 3,Clients_working_now: 0,Deals_Closed: 6},
                   DFW:{Total_number_of_clients: 4,Clients_working_now: 3,Deals_Closed: 40},
                   Washington:{Total_number_of_clients: 1,Clients_working_now: 0,Deals_Closed: 3},
                   Sacramento:{Total_number_of_clients: 1,Clients_working_now: 0,Deals_Closed: 1}}

const smallCard = state!==''? (
<dialog className='smallCard'>
<p style={{color:'white'}}>In {state}, we've collaborated with {stateInfo[state].Total_number_of_clients} clients  in total,and we're currently assisting {stateInfo[state].Clients_working_now}  of them.  Impressively, we've also successfully closed a total of {stateInfo[state]?.Deals_Closed ||null} deals here.</p>

</dialog>):null;


return(
  <>
    <div className="parentOurClient">
        <div className='stats'>
            <h2 style={{color:'black'}}>The percentage of our clients in each state.</h2>
        <div className='stats-1'>
       <Pie data={datat}/>
      <ul id='uls'>
        <li className='Kansas'><span>Kansas</span></li>
        <li className='Oklahoma'><span>Oklahoma</span></li>
        <li className='Memphis'><span>Memphis</span></li>
        <li className='DFW'><span>DFW</span></li>
        <li className='Washington'><span>Washington</span></li>
        <li className='Sacramento'><span>Sacramento</span></li>
      </ul>
      </div>
      <p style={{background: '#485D58',width:'100%',color:'#fff'}}>Our clients
      <br/>
 You, the shrewd real estate wholesaler (Or even if you just buy and hold or do the flipping yourself), are no stranger to the challenges in the game.
 Closing deals sometimes feels like cracking a vault. Assembling the right team is like finding a needle in a haystack.
 And automation Seems like it's in a galaxy far, far away. We're here to change that.

Imagine this: effortlessly closing 1-3 deals every month,
 each one adding a sweet $10,000 to $30,000 to your bank account.
 Now that's not a dream – that's what we've already done to our clients in all the states bellow.
 we're here to make that happen to you too!</p>
      <p style={{display:'inline',margin:'15px'}}>select a state to get more information.</p>
      
      {/* <select value={state} onChange={handleChange}>
            <option value={''}></option>
            <option value={"Kansas"}>Kansas</option>
            <option value={'Oklahoma'}>Oklahoma City</option>
            <option value={'Memphis'}>Memphis, TN</option>
            <option value={'DFW'}>DFW, tx</option>
            <option value={'Washington'}>Washington</option>
            <option value={'Sacramento'}>Sacramento, CA</option>
        </select> */}

       <div className='buttonsholder'>
        <button className='Kansasbtn' value={'Kansas'} onClick={handleChange}>Kansas</button>
        <button className='Oklahomabtn' value={'Oklahoma'} onClick={handleChange}>Oklahoma</button>
        <button className='Memphisbtn' value={'Memphis'} onClick={handleChange}>Memphis</button>
        <button className='DFWbtn' value={'DFW'} onClick={handleChange}>DFW</button>
        <button className='Washingtonbtn' value={'Washington'} onClick={handleChange}>Washington</button>
        <button className='Sacramentobtn' value={'Sacramento'} onClick={handleChange}>Sacramento</button>
        </div>
        <br/>
        
      </div>
      
    </div>
    <Modal show={modal} modalClosed={backdrophandler}>{smallCard}</Modal></>
    )
}


export default OurClient;

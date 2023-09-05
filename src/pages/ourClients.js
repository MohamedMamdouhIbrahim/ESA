import './ourClients.css'
import { useState } from 'react';
import {PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'
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
const handleChange = (e)=>{let selectedState = e.target.value
    setState(selectedState)
  modalState(!modal)}
  const backdrophandler = ()=>{modalState(false)}

      const COLORS = ['#032f60', '#176dae', '#cccccc', '#dd6e6e','#cc0000','#80b3c0'];
      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
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
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={240} height={240}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
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

import { NavLink,Outlet } from "react-router-dom";

import './rootlayout.module.css'
import classes from './rootlayout.module.css'
import Foot from '../pages/components/foot'
import logo from '../assets/logo.jpeg'
import Toolbar from "../pages/components/UI/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../pages/components/UI/Navigation/Sidedrawer/Sidedrawer";

export default function rootLayout(){
    return(

        <div className="root-layout">
        <Toolbar/>
        
        <div className={classes.Outlet}>
        <main>
          <Outlet />
        </main>
        </div>
        <Foot/>

      </div>

    
    
    )
}
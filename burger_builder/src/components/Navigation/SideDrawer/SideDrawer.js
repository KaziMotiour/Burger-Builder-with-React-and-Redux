import React, {useState} from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import CSS from './SideDrawer.css'
import BackDrop  from '../../UI/BackDrop/BackDrop'

const sideDrawer = props =>{
    
    let attachedClasses = [CSS.sideDrawer, CSS.Close]
    // if(props.open){
    //     attachedClasses = [CSS.sideDrawer, CSS.Open]
    // }
    
  return(  
    <div>
        {/* <BackDrop showSummery={props.open} clicked={props.closed}/> */}
        <div className={CSS.SideDrawer}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </div>
)}

export default sideDrawer
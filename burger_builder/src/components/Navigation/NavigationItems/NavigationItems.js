import React from 'react'
import {NavLink} from 'react-router-dom'
import CSS from './NavigationItems.css'

const navigationItems = props =>(
    <ul className={CSS.NavigationItems}>

       <li> <NavLink to="/burger" active>BurgerBuilder</NavLink></li>
       <li><NavLink to="/checkout" >Check Out</NavLink></li>
    </ul>
)
export default navigationItems
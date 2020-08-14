import React from 'react'
import CSS from './Logo.css'
import BurgerLogo from '../../assets/images/Burger-logo.png'

const logo = props =>(
    
    <div className={CSS.Logo} style={{height:props.height}}>
        <img src={BurgerLogo} alt="MyBurger"/>
    </div>
)

export default logo
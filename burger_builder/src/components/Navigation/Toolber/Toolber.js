import React from 'react'
import CSS from './Toolber.css'
import BugerLogo from '../../Logo/Logo'
import Navigation from '../NavigationItems/NavigationItems'

const toolber = props =>(
    <header className={CSS.Toolber} >
        <div>Menu</div>
        <BugerLogo  height="80%"/>
        <nav className={CSS.DesktopOnly}>
            <Navigation />
        </nav>
    </header>
)
export default toolber
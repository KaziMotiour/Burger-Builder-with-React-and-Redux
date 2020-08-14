import React from 'react'
import CSS from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

const navigationItems = props =>(
    <ul className={CSS.NavigationItems}>
        <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
        <NavigationItem link="/" >Check Out</NavigationItem>
    </ul>
)
export default navigationItems
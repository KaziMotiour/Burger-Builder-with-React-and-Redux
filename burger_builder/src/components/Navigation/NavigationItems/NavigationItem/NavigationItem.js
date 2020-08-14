import React from 'react'
import CSS from './NavigationItem.css'

const navigationItem = props =>(

    <li className={CSS.NavigationItem}> 
        <a href={props.link} className={props.active? CSS.active:null}>
            {props.children}
            </a>
    </li>
)

export default navigationItem
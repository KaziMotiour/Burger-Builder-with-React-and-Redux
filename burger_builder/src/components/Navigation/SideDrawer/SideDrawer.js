import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import CSS from './SideDrawer.css'
import BackDrop  from '../../UI/BackDrop/BackDrop'

const sideDrawer = props =>(
    <div>
        <BackDrop showSummery/>
        <div className={CSS.SideDrawer}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </div>
)

export default sideDrawer
import React from 'react'
import CSS from './layout.css'
import Toolber from '../Navigation/Toolber/Toolber'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = props =>(
    <div>
        <Toolber />
        <SideDrawer />
        <main className={CSS.Content}>
        {props.children}
        </main>

    </div>
);

export default layout
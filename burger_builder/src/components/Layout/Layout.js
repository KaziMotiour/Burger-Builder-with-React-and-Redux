import React, {useState} from 'react'
import CSS from './layout.css'
import Toolber from '../Navigation/Toolber/Toolber';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = props =>{

    const [Drawer, setShowSideDrawer] = useState({
        showSideDrawer: true
    })

    const sideDrawerClosedHandelar = () =>{
        setShowSideDrawer({
            showSideDrawer:false
        })
    }
    return(
    <div>
        <Toolber />
        <SideDrawer open={Drawer.showSideDrawer} closed={sideDrawerClosedHandelar}/>
        
        <main className={CSS.Content}>
        {props.children}
        </main>

    </div>
    )};

export default Layout
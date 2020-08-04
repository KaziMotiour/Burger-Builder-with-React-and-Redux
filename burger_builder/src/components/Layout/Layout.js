import React from 'react'
import CSS from './layout.css'

const layout = props =>(
    <div>
        <div>Toolber, SideDrawn, Backdrop</div>
        <main className={CSS.Content}>
        {props.children}
        </main>

    </div>
);

export default layout
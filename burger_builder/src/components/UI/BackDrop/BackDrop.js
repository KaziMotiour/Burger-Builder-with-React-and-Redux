import React from 'react'
import CSS from './BackDrop.css'    

const backDrop = props =>(

    props.showSummery ?<div className={CSS.BackDrop} onClick={props.clicked}></div>: null
    // props.showSummery ? <p>hello</p>:null
    )

export default backDrop
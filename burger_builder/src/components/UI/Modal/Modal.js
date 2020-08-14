import React from 'react'
import CSS from './Modal.css'
import BackDrop from '../BackDrop/BackDrop'

const modal = props =>(
   <div>
    <BackDrop showSummery={props.showSummery} showSummeryHandellar={props.showSummeryHandellar}/>
    
    <div className={CSS.Modal}>
        {props.children}
        </div>
    </div>
)

export default modal
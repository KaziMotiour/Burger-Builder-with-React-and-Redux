import React from 'react'
import CSS from './BuildControl.css'

const buildControl = props =>{

    return (
        <div className={CSS.BuildControl}>
        <div className={CSS.Label}>{props.label}</div>
        <button onClick={()=> props.removeIngredients(props.type)} className={CSS.Less}>less</button>
        <button onClick={()=> props.addIngredients(props.type)} className={CSS.More }>more</button>
    </div>
    )}
export default buildControl
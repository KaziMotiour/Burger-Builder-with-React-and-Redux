import React from 'react'
import CSS from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
    
]

const buildControls = (props) =>(
    <div className={CSS.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl addIngredients={props.addIngredients}
            removeIngredients={props.removeIngredients}
            key={ctrl.label} label={ctrl.label} type={ctrl.type}/>
        ))}
    </div>
)

export default buildControls
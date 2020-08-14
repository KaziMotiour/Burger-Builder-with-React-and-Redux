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
        <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl =>(
            <BuildControl 
            addIngredients={props.addIngredients}
            removeIngredients={props.removeIngredients}
            disabled={props.disabled[ctrl.type]}
            key={ctrl.label} label={ctrl.label} type={ctrl.type}/>
        ))}
        <button type="submit" className={CSS.OrderButton} onClick={props.showSummery} disabled={props.disabledOrderButton}>Order Now</button>
    </div>
)

export default buildControls
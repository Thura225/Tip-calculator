import React from 'react';

const PriceInput = (props) => {
    return ( 
        <div className='input-group'>
            <div className='label-group'>
                <label>{props.title}</label>
            </div>
            <input type="number" placeholder='0' id='price' className={props.title} onChange={(e)=>{props.setPrice(e.target.value)}}/>
        </div>
     );
}
 
export default PriceInput;
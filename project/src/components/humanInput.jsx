import React from 'react';

const HumanInput = (props) => {
    return ( 
        <div className='input-group'>
            <div className='label-group'>
                <label>Number of {props.title}</label>
                { props.zero && props.children }
            </div>
            <input type="number" id='human' placeholder='0' className={`${props.person === 0? 'personB' : 'personA'}`} onChange={(e)=>props.setPerson(Math.floor(e.target.value))}/>
        </div>
     );
}
 
export default HumanInput;
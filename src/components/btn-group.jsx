import React from 'react';

const BtnGroup = (props) => {

    return ( 
        <div className='tip-box'>
            <div className='label-group'><label>Select Tips %</label></div>
            <div className='btn-box'>
                {
                    props.tips.map(tip=>{
                        return(
                            <a key={tip.id} onClick={(()=>{props.setRate(tip)})} href='#' className='tipA'>{tip.tipamount*100}%</a>
                        )
                    })
                }
                <input id='rate' className='tip-input' onChange={(e)=>{props.rateInput(e.target.value/100)}} placeholder='Custom'/>
            </div>
        </div>
     );
}
 
export default BtnGroup;

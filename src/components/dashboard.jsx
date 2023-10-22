import React from 'react';

const Dashboard = (props) => {
    let zero = 0;
    return ( 
        <section className='dashboard'>
           <div className='price-view'>
                <div className='amount-view'>
                    <h3>Tip amount<br/><span> / person</span></h3>
                    <h1>${props.person==null||props.person===0?zero.toFixed(2):props.tip.toFixed(2)}</h1>
                </div>
                <div className='amount-view'>
                    <h3>Total<br/><span> / person</span></h3>
                    <h1>${props.person==null||props.person===0?zero.toFixed(2):props.total.toFixed(2)}</h1>
                </div>
           </div>
           <a href='#' className='reset' id='reset' onClick={props.reset}>RESET</a>
        </section>
     );
}
 
export default Dashboard;
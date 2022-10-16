import React from 'react';
import BtnGroup from './btn-group';
import PriceInput from './priceInput';
import HumanInput from './humanInput';
const Form = (props) => {

    

    return ( 
        <form onSubmit={()=>props.onClick}>
            <PriceInput setPrice={props.setPrice} title={"Bill"}/>
            <BtnGroup setRate={props.addRate} tips = {props.tips} rateInput={props.rateInput} />
            <HumanInput zero={props.zero} person={props.person} setPerson={props.setPerson} title={"person"}>
                <span className='warning zero'>can't be zero</span>
            </HumanInput>
        </form>
     );
}
 
export default Form;
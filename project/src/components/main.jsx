import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Dashboard from './dashboard';
import Form from './form';

const Main = () => {
    let [price, setPrice] = useState(0);
    let [rate, setRate] = useState(0);
    let [person, setPerson] = useState(null);
    let [tip,setTip]=useState(0);
    let [total, setTotal] = useState(0);
    let [zero, setZero] = useState(false);
    const button = document.getElementsByClassName("tipA");
    let tips = 
        [
            {
                id:0,
                tipamount:0.05
            },
            {
                id:1,
                tipamount:0.1
            },
            {
                id:2,
                tipamount:0.15
            },
            {
                id:3,
                tipamount:0.25
            },
            {
                id:4,
                tipamount:0.5
            }
        ];

    useEffect(
        function(){
            if(person === 0){
                setZero(true);
                setTip(0);
                setTotal(0);
            }else{
                setZero(false);
                setTip((price*rate)/person);
                setTotal(((price*rate)/person)+(price/person));
            }
        },
    [person])

    

    useEffect(
        function(){
            if(tip>0||total>0){
                document.getElementById("reset").style.pointerEvents="auto";
                document.getElementById("reset").style.cursor="pointer";
                document.getElementById("reset").style.opacity="1";
            }else{
                document.getElementById("reset").style.pointerEvents="none";
                document.getElementById("reset").style.cursor="default";
                document.getElementById("reset").style.opacity="0.5";
            }
        }
    ,[tip,total])
    
    function addPrice(p){
        setPrice(p);
    }

    function addHuman(h){
        setPerson(h);
    }

    function addRate(r){
        let {id,tipamount} = r;

        setRate(tipamount);
        let i=0;
        while(i<tips.length){
            if(i===id){    
                button[i].classList.add("tipB");    
            }else{
                button[i].classList.remove("tipB")
            }
            i++;
        }
        
    }

    function rateInput(b){
        setRate(b);
    }


    function reset(){
       setPrice(0);
       setPerson(null);
       setRate(0);
       document.getElementById("price").value = null;
       document.getElementById("human").value = null;
       document.getElementById("rate").value = null;

        for(let i=0;i<5;i++){
            button[i].classList.remove("tipB");
        }
    }
    

    console.log(price);
    console.log(rate);
    console.log(person);
    console.log(tip);
    console.log(total);
    return ( 
        <main>
            <Form 
                zero={zero}
                tips={tips}
                setPrice={(p)=>addPrice(p)}
                person={person}
                setPerson={(h)=>{addHuman(h)}}
                addRate={(r,g)=>{addRate(r,g)}}
                rateInput={(b)=>{rateInput(b)}}
            />
            <Dashboard
                tip={tip}
                total={total}
                person={person}
                reset={reset}
            />
        </main>
     );
}
 
export default Main;
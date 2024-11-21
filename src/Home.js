import React,{useEffect, useState} from 'react';
import Colors from './Colors';
import axois from 'axios';

const Home=()=>{
    // useEffect(()=>){
    //     axios.get
    // }

    return(
        <>
            <h1> This is the Home component</h1>
            <Colors/>
        </>
    )
}

export default Home;
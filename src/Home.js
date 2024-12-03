import React,{useEffect, useState} from 'react';
import Colors from './colors';
import axios from 'axios';

const Home=()=>{
    const[Data,setData]=useState({
        Company: '',
        Description: ''
    })
    const[colorsData,setColorsData]=useState([])
    
     useEffect(()=>{
         axios.get('https://reqres.in/api/unknown')
         .then(res=>{
            console.log('Response from main API:',res)
            console.log('Home Data: ', res.data.ad)
             let companyData=res.data.ad;
             setData({Company:"Dogs", Description:"Dogs"})
             console.log('Colors Data: ', res.data.data)
             setColorsData(res.data.data)
               
         })
         .catch(err=>{
             console.log(err);
         })
     },[])

    return(
        <>
            <h1> {Data.Company}</h1>
            <p>{Data.Description}</p>
            <Colors data={colorsData}/>
        </>
    )
}

export default Home;
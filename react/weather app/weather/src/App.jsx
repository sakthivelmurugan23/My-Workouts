import React, { useState } from 'react'
import Clacy from './Clacy';

const App = () => {

  const weather =[
    {
      pin : 1,
      city:'Cbe',
      temp:'34°C'
    },
    {
      pin : 2,
      city:'Erode',
      temp:'12°C'
    },
    {
      pin : 3,
      city:'Selam',
      temp:'70°C'
    },
    {
      pin : 4,
      city:'Chennai',
      temp:'50°C'
    },
    {
      pin : 4,
      city:'Bangalore',
      temp:'50°C'
    },
    {
      pin : 5,
      city:'Kodai',
      temp:'-10°C'
    }
  ];
const [selected,setselected]=useState('Check ur Weather')
  
const handlechange=(e)=>{

  const selectedcity = e.target.value;
  const cityData= weather.find((item)=>(item.city === selectedcity))
   
  if(cityData){
    setselected(cityData.temp);
  }

}
  return (
    <div>
{/* head */}
      <h2 style={{marginLeft:"600px",color:'blue'}}>
        WEATHER APP
      </h2>

{/* Dropdown */}
      <select onChange={handlechange} style={{width:"800px", height:'50px',marginLeft:"300px"}}> 
        <option>Select a city</option>

          {weather.map((athil)=>(<option value={athil.city}>{athil.city}</option>))}

      </select>
    
<h2 style={{marginLeft:'600px',marginTop:'100px' , color:"blue"}}>Climate:{selected}</h2>
<Clacy/>
    </div>
  )
}

export default App


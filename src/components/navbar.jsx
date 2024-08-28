import React from 'react'
import { Link } from 'react-router-dom'
import './navabar.css'
import { useState } from 'react';

function Navbar(props) {
    const {arr,setarr}=props;
    const [i,seti]=useState(0);
    const handleLinkClick = () => {
      seti(i+1); // Toggle between 0 and 1
    };
  return (
    <div className="main">
        <h1 >Our Menu</h1>

       <div className="in_main">
        {/* new concepts */}
        <Link to="/all" className="a1" onClick={handleLinkClick}>All</Link>
        <Link to="/breakfast" className="a1" onClick={handleLinkClick} >Breakfast</Link>
        <Link to="/lunch"className="a1" onClick={handleLinkClick}>Lunch</Link>
        <Link to="/shakes" className="a1" onClick={handleLinkClick}>Shakes</Link>
       </div>

      {i==0? <div>
      {
        arr.map((e)=>{
          return <div key={e.id} className="p1">
            <div>
              <img src={e.img}/>
               $ {e.price}
            </div>
            <div>
              {e.title}
              <hr/>
              {e.desc}

            </div>
          </div>
       })
      }
        

        
        
    </div>:""}
     
    </div>
  )
}

export default Navbar
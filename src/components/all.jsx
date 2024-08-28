import React from 'react'
import './cs.css'

function All(props) {
    let {arr,setarr}=props;
    console.log(arr);
    
  return (
    <div>
      {
        arr.map((e)=>{
          return <div key={e.id} className="p1">
            <div>
              <img src={e.img}/>
            </div>
            <div>
              {e.title}
              <hr/>
              {e.desc}

            </div>
          </div>
       })
      }
        

        
        
    </div>
  )
}

export default All
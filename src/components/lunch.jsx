import React from 'react'
import './cs.css'
function Lunch(props) {
    const {arr,setarr}=props;
  return (
    <div>
      {
        arr.map((e)=>{
          if(e.category=="lunch"){
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
           
          }
        })
      }
    </div>
  )
}

export default Lunch
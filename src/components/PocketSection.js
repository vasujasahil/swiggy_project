import React from 'react'

export default function PocketSection() {
    return (
        <div className="pocketflex">
            <div className="pocketleft" style={{margin:"30px",minWidth:"320px"}}>
               <h1>Restaurants in <br/> your pocket</h1>
               <p style={{fontSize:"20px",color:"#7e808c"}}>Order from your favorite restaurants & track <br/> on the go, with the all-new Swiggy app.</p>
               <div style={{paddingTop:"30px"}}>
                    <a href="#"> <img style={{marginRight:"20px",}} src="playstore.png" alt="" width="170px"></img></a>
                    <a href="#"> <img  src="apple.png" alt="" width="170px"></img></a>
               </div>
            </div>
            <img className="pocketimg" src="pocket1.png" alt="" width="390px" height="490px"/>
            <img className="pocketimgr" src="pocket2.png" alt=""  height="auto"/>
        </div>
    )
}

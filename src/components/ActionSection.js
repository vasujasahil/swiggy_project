import React from 'react'
import Citylist from './Citylist'

export default function ActionSection() {
    const a=[
             
             [["COMPANY"],["About us","Team","Careers","Swiggy Blog","Bug Bounty","Swiggy Super","Swiggy Corporate","Swiggy Instamart"]],
             [["CONTACT"],["Help & Support","Partner with us","Ride with us"]],
             [["Legal"],["Terms & Conditions","Refund & Cancellation","Privacy Policy","Cookie Policy"," Offer Terms","Phishing & Fraud"]],
            ] 
             return (
       <><div style={{height:"40px",backgroundColor:"black"}}></div>
        <div className="actionflex">
            {
                 a.map((arr,index)=>{
                    return(
                    <Citylist head={arr[0]} list={arr[1]}/>)
                   })
                   
            }
            <div>
                <ul>

              
              <li> 
              <a href="#"> <img  style={{marginBottom:"20px"}} src="apple2.png" width="200px" alt=""></img></a>
                </li>
                <li>
                <a href="#"> <img src="playstore2.png" width="200px" alt=""></img></a>
             </li>

                </ul>
               
            </div>   
                
        </div>
        {/* <div style={{margin:"0px 20px 0px 20px",backgroundColor:"black"}}>
    <hr style={{backgroundColor:"#44413f",margin:"0px"}}/>
        </div> */}
        </>
    )
}

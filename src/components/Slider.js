import React from 'react'
// import {Button} from 'react-bootstrap'
import $ from 'jquery'
import Button from './Button';

export default function Slider() {

    const HideSlider = ()=>{
        $('.Slider').animate({width: '0%'}, 500);
    }
    return (
        <div style={{padding:"30px",paddingTop:"0px"}}>
             <button className='text-dark text-right bg-white border-0 p-0 m-0 ' onClick={HideSlider} style={{fontSize:'45px',fontWeight:"300"}}>&times;</button>
           <div className="loginflex">
           <div>
               
                
                <h2>Login</h2>
                <p>or <span>create a new account</span></p>
                 
           </div>
           <div>
               <img src="login.png" alt="" width="110px"/>
           </div>
           </div>
           <input style={{width:"100%",backgroundColor:"rgba(255, 255, 255, 0.295)", padding:"25px 16px",margin:"35px 0px 20px 0px",minWidth:"220px",border:"1px solid #7c7875"}} 
                   type="text" placeholder="Phone Number"></input>
               
           <Button className="loginbtn" height="14px" bgcolor="rgb(252, 128, 25)" 
                     color="white" minWidth="280px" name="LOGIN"/>
            
         <p style={{fontWight:"600",fontSize: "12px"}}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        </div>
    )
}

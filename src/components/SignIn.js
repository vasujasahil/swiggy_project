import React from 'react'
import Button from './Button';
import $ from 'jquery'
export default function SignIn(props) {
    const HideSlider2 = ()=>{
        $('.Slider1').animate({width: '0%'}, 500);
        $('.headerflex').removeClass('brightnesslow');
    $('.brightlow').removeClass('brightnesslow');
    }
    return (
        
        <div  style={{padding:"0px 10px 0px 35px"}}>
        <button className='text-dark bg-white border-0 p-0 m-0 ' onClick={HideSlider2} style={{fontSize:'45px',fontWeight:"300",outline:"none"}}>&times;</button>
      <div className="loginflex">
      <div>
          
           
           <h2>Sign up</h2>
           <p>or <button id="signinb" onClick={props.span}><span>login to your account</span></button></p>
            
      </div>
      <div>
          <img src="login.png" alt="" width="100px"/>
      </div>
      </div>
      <div style={{border:"1px solid lightgray",marginTop:"25px",marginBottom:"15px"}}>
      <input style={{width:"100%",backgroundColor:"rgba(255, 255, 255, 0.295)", padding:"21px 16px",margin:"0px ",minWidth:"220px",border:"none",borderBottom:"1px solid lightgray"}} 
              type="text" placeholder="Phone Number"></input>
         <input style={{width:"100%",backgroundColor:"rgba(255, 255, 255, 0.295)", padding:"21px 16px",margin:"0px ",minWidth:"220px",border:"none",borderBottom:"1px solid lightgray"}} 
              type="text" placeholder="Name"></input>
           <input style={{width:"100%",backgroundColor:"rgba(255, 255, 255, 0.295)", padding:"21px 16px",margin:"0px ",minWidth:"220px",border:"none",borderBottom:"1px solid lightgray"}} 
              type="email" placeholder="Email"></input>
               <input style={{width:"100%",backgroundColor:"rgba(255, 255, 255, 0.295)", padding:"21px 16px",margin:"0px ",minWidth:"220px",border:"none"}} 
              type="password" placeholder="Password"></input>
      </div>  <p className="Signinp">Have a refferal code?</p>     
      <Button className="loginbtn" height="14px" bgcolor="rgb(252, 128, 25)" 
                color="white" minWidth="280px" name="Continue"/>
      
    <p style={{fontWight:"500",fontSize: "12px",marginBottom:"0px"}}>By creating an account, I accept the Terms & Conditions & Privacy Policy</p>
   </div>
    
    )
}

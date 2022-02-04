import React from 'react'
import Button from './Button';
import $ from 'jquery'
export default function Login(props) {
    const HideSlider = ()=>{
        $('.Slider').animate({width: '0%'}, 500);
        $('.headerflex').removeClass('brightnesslow');
        $('.brightlow').removeClass('brightnesslow');
    }
    return (
        <div style={{padding:"0px 10px 30px 35px"}}>
        <button className='text-dark text-right bg-white border-0 p-0 m-0 ' onClick={HideSlider} style={{fontSize:'45px',fontWeight:"300",outline:"none"}}>&times;</button>
      <div className="loginflex">
      <div>
          
           
           <h2>Login</h2>
           <p>or <button id="loginb" onClick={props.span}><span>create a new account</span></button></p>
            
      </div>
      <div>
          <img src="login.png" alt="" width="110px"/>
      </div>
      </div>
      <input style={{width:"100%",backgroundColor:"rgba(255, 255, 255, 0.295)", padding:"25px 16px",margin:"35px 0px 20px 0px",minWidth:"220px",border:"1px solid #7c7875"}} 
              type="text" placeholder="Phone Number"></input>
          
      <Button className="loginbtn" height="14px" bgcolor="rgb(252, 128, 25)" 
                color="white" minWidth="280px" name="LOGIN"/>
       
    <p style={{fontWight:"500",fontSize: "12px"}}>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
   </div>
    )
}

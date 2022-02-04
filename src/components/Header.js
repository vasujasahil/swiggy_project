import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Animation from "./Animation";
import $ from "jquery";
import Login from "./Login";
import SignIn from "./SignIn";
export default function Header() {
  const [width, setWidth] = useState(1260);
  const [height, setHeight] = useState(545.6);

  window.addEventListener("resize", () => setWidth(window.innerWidth));
  // useEffect(() => {

  //   setWidth( window.innerWidth)
  // })
  window.addEventListener("resize", () =>
    setHeight(document.getElementsByClassName("headerform")[0].clientHeight)
  );

  const ToggleSlider = () => {
    if ($(".Slider").width() > 0) {
      $(".Slider").animate({ width: "0%" }, 700);
      $('.headerflex').removeClass('brightnesslow');
    $('.brightlow').removeClass('brightnesslow');
    } 
    else {
    $(".Slider").animate({ width: "100%" }, 1000);
    $('.headerflex').addClass('brightnesslow');
    $('.brightlow').addClass('brightnesslow');
    }
    if ($(".Slider1").width() > 0) {
      $(".Slider1").animate({ width: "0%" }, 700);

    }
  };
  const ToggleSlider1 = () => {
    if ($(".Slider1").width() > 0) {
      $(".Slider1").animate({ width: "0%" }, 700);
      $('.headerflex').removeClass('brightnesslow');
    $('.brightlow').removeClass('brightnesslow');
    } else {
    $(".Slider1").animate({ width: "100%" }, 1000);
    $('.headerflex').addClass('brightnesslow');
    $('.brightlow').addClass('brightnesslow');
  }

    if ($(".Slider").width() > 0) {
      $(".Slider").animate({ width: "0%" }, 700);
  
    }
  };
  const ref = useRef("a");
  // useEffect(() => {
  // })

  const inputcheck = () => {
    if (ref.current.value != "") {
      document.getElementsByClassName("clear")[0].classList.remove("hide");
      document.getElementsByClassName("clear1")[0].classList.remove("hide");
      document.getElementsByClassName("clear1")[0].classList.add("unhide");
      document.getElementsByClassName("redDiv")[0].classList.add("hide");
      console.log(document.getElementsByClassName("clear1")[0].classList);
    } else {
      document.getElementsByClassName("clear")[0].classList.add("hide");
      document.getElementsByClassName("clear1")[0].classList.add("hide");
      document.getElementsByClassName("clear1")[0].classList.remove("unhide");
    }
  };
  const SaveData = () => {
    if (ref.current.value == "") $(".redDiv").slideDown("slow");
    //document.getElementsByClassName("redDiv")[0].classList.remove("hide")
    else {
      $(".redDiv").slideUp("slow");
      window.open(`https://www.swiggy.com/${ref.current.value}`, "_blank");
    }
    //document.getElementsByClassName("redDiv")[0].classList.add("hide")
  };

  useEffect(() => {
    const inter = setInterval(() => {
      // if(!document.getElementsByClassName("redDiv")[0].classList.contains("hide")){
      // document.getElementsByClassName("redDiv")[0].classList.add("hide")
      $(".redDiv").slideUp("slow");
    }, 6000);
    return () => {
      clearInterval(inter);
    };
  });

  const clear = () => {
    ref.current.value = "";
    document.getElementsByClassName("clear")[0].classList.add("hide");
    document.getElementsByClassName("clear1")[0].classList.add("hide");
    document.getElementsByClassName("clear1")[0].classList.remove("unhide");
  };
  return (<>
    <div
    className="Slider h-200 bg-white"
    style={{
      position: "fixed",
      width: "0",
      maxWidth: "422px",
      overflowX: "hidden",
      zIndex: "101",
      bottom: "0px",
      height: "100%",
      right: "0px",
      filter: "brightness(1) contrast(1)",
    }}
  >
    <Login span={ToggleSlider1} />
  </div>
  <div
    className="Slider1 h-200 bg-white"
    style={{
      position: "fixed",
      width: "0",
      maxWidth: "422px",
      overflowX: "hidden",
      zIndex: "101 ",
      bottom: "0px",
      height: "100%",
      right: "0px",
      filter: "brightness(1) contrast(1)",
    }}
  >
    <SignIn span={ToggleSlider} />
  </div>
    <div className="headerflex">
      <div className="headerform">
        <nav className="logologinflex">
          <img src="swiggy.png" alt="" width="30%" />
          <div>
            <Button
              click={ToggleSlider}
              className="login"
              height="8px"
              bgcolor="transparent"
              color="black"
              name="Login"
            />
            <Button
              click={ToggleSlider1}
              className="sign"
              height="8px"
              bgcolor="black"
              color="white"
              name="Sign up"
            />
          </div>
        </nav>
        {/* <div class="blackdiv hide"> </div> */}
      

        <Animation />
        <div className="inputbtnflex">
          <input
            style={{
              width: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.295)",
              padding: "16px",
              minWidth: "220px",
            }}
            type="text"
            placeholder="Enter your delivery location"
            ref={ref}
            onChange={inputcheck}
          ></input>
          <Button
            className="locate"
            pos="absolute"
            right="160px"
            span="fa fa-crosshairs"
            height="10px"
            margin="6px 20px"
            bgcolor="transparent"
            color="#80807d"
            minWidth="110px"
            name="Locate Me"
          />
          <Button
            click={clear}
            className="clear hide locate"
            pos="absolute"
            right="160px"
            height="10px"
            margin="6px 20px"
            bgcolor="#fa4a5b"
            color="white"
            minWidth="110px"
            name="&times; clear"
          />
          <Button
            click={clear}
            className="clear1 hide locate3"
            pos="absolute"
            right="160px"
            height="10px"
            margin="6px 20px"
            bgcolor="#fa4a5b"
            color="white"
            minWidth="30px"
            name="&times;"
          />
          <Button
            className="locate2"
            pos="absolute"
            right="160px"
            span="fa fa-crosshairs"
            height="10px"
            margin="6px 20px"
            bgcolor="transparent"
            color="#80807d"
            minWidth="30px"
            name=""
          />
          <Button
            click={SaveData}
            className="findfood"
            height="16px"
            bgcolor="rgb(252, 128, 25)"
            color="white"
            minWidth="140px"
            name="FIND FOOD"
          />
        </div>
        <div className="redDiv hide">Enter your delivery location</div>

        {/* <div className="notvisible">Enter your delivery location</div> */}
        <p className="popular">POPULAR CITIES IN INDIA</p>
        <div style={{ paddingRight: "15px" }} className="popular alterflex">
          <div>Ahemdabad</div>
          <div>Bangalore</div>
          <div>Chennai</div>
          <div> Delhi</div>
          <div>Gurgaon</div>
          <div> Hydreabad</div>
          <div>Kolkata</div>
          <div> Mumbai</div>
          <div> Pune &</div>
          <div> more.</div>
        </div>
      </div>
      <div className="headerimg">
        <img
          style={{ opacity: `${width / 13}%` }}
          src="Lunch1.jpg"
          alt=""
          width="550px"
          height={`${height}px`}
        />
      </div>
    </div></>
  );
}

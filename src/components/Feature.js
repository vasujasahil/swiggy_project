import React from 'react'

export default function Feature(props) {
    return (
        <div style={{padding:"40px",paddingTop:"10px",maxWidth:"300px",minWidth:"200px"}}>
            <img style={{paddingBottom:"35px",display:"block",margin:"auto"}} src={props.image} alt="" width="100px" height="200px"></img>
            <h5 style={{textAlign:"center",color:"white"}}>{props.h1}</h5>
            <p style={{textAlign:"center",fontSize:"15px",fontWeight:"400"}}s>{props.p}</p>
        </div>
    )
}

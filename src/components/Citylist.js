import React from 'react'

export default function Citylist(props) {
    return (
        <div className="minwidth">
            <p style={{color:"#80807d",fontWeight:"600",fontSize:"15px"}}>{props.head}</p>
            <ul >
                {
                    props.list.map((arr,index)=>{
                     return(
                        <a href="#"><li>{arr}</li></a>);
                    })
                    
                }
                
            </ul>
        </div>
    )
}

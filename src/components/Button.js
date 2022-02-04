import React from 'react'

export default function Button(props) {
    return (
        <><button onClick={props.click} className={props.className} style={{padding:`${props.height} 25px`,
          color:`${props.color}`,backgroundColor:`${props.bgcolor}`
          ,fontWeight:"500",border:"none",minWidth:`${props.minWidth}`,
          position:`${props.pos}`,right:`${props.right}`,outline:"none",margin:`${props.margin}`}}>
              <span><i class={props.span} aria-hidden="true"></i></span> {props.name}
              </button>
              
              </>
    )
}

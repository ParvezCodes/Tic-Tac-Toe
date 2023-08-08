import React from "react";

export default function Square(props)
{
    const box__style = {
        // border : "1px solid",
        // display:"flex",
        // alignItems:"center",
        // justifyContent:"center",
    }

    return(
        <div className="square" style={box__style} onClick={props.onClick}>
           <h5>{props.value}</h5>
        </div>
    );
}
import React from "react";
import './box.css';
// This named export returns just a single div with the class of box
export const Box = ({secret,reset, wrong}) =>
{
    let check = e => e.target.style.backgroundColor === secret? reset() : wrong() ;
    return <div className="box" onClick={check}></div>;
}
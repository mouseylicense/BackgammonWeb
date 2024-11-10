import React from "react";
import './styling/Checker.css'
function Checker({color,onClick,point_index}) {
  return (<div onClick={onClick} className={`checker ${color}` }></div>)
}
export default Checker;
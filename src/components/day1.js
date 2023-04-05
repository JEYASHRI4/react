import React from "react";

const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const console_ =()=>{
    console.log("Message to Developer");
}
const myarray=['h','e','l','l','e'];
const check=()=>{
    alert("Check console");
    myarray.push('e');
    console.log(myarray);
}
export default function Display() {
  return (
    <div id='d1'>
    <button onClick={alertBox}>alert message</button><br></br><br></br>
    <button onClick={console_}>console message</button><br></br><br></br>
    <button onClick={check}>click to check</button><br></br><br></br>
    </div>
  )
}
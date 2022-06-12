import React,{useState} from 'react'
import "./MenuIcon.css"

const evHandler = (e) =>{
    console.log(e.target.classList)
    e.target.classList.toggle("change");
    
};

function MenuIcon() {
    const [ToggleStatevar, setToggleStatevar] = useState(false)

    // Dynamically change styles by itself
    const ToggleState = (e) =>{
        console.log(ToggleStatevar)
        console.log(e.target.classList)
        ToggleStatevar ? setToggleStatevar(false) : setToggleStatevar(true)
    }
    



  return (
    //   MenuIcon
    <div className="MenuIcon" onClick={ToggleState}>
        <div  className={`bar1 ${ ToggleStatevar ? "change1":""}`} onClick={ToggleState}></div>
        <div className={`bar2 ${ ToggleStatevar ? "change2":""}`} onClick={ToggleState}></div>
        <div className={`bar3 ${ ToggleStatevar ? "change3":""}`} onClick={ToggleState}></div>
    </div>
  )
}

export default MenuIcon
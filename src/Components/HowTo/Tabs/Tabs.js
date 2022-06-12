import React,{useState} from 'react'
import './Tabs.css'

const toggleTabs = (EV) =>{
    switch (EV) {
        case "Earn":
            return EV.target.value
            break;
    
        default:
            return "default"
            break;
    }
}

function Tabs() {
    const [Toggledstate, setToggledstate] = useState(false);
    const [TabState, setTabState] = useState("default");

    const changeTabState = (e)=>{
                // CHANGE TOGGLE STATE FIRST
                !Toggledstate ? setToggledstate(true):setToggledstate(false);
        // Set value to be displayed on tab
        setTabState(e.target.textContent);
    }

    const changeToggleState = ()=>{
                // CHANGE TOGGLE STATE FIRST
                !Toggledstate ? setToggledstate(true):setToggledstate(false);
    }
  return (
    <div className="Tabs">
        <ul className="TabsHeader">
            {/* className='fa fa-fw fa-home' */}
            <li  name="Earn" onMouseEnter={changeTabState} >Earn</li>
            <li name="Learn" onMouseEnter={changeTabState} onMouseLeave={changeToggleState}>Learn</li>
            <li name="Grow" onMouseEnter={changeTabState} onMouseLeave={changeToggleState}>Grow</li>
            <li  name="Earn" onMouseEnter={changeTabState} onMouseLeave={changeToggleState}>Earn</li>
            <li name="Learn" onMouseEnter={changeTabState} onMouseLeave={changeToggleState}>Learn</li>
            <li className='fa fa-caret-down' name="Grow" onMouseEnter={changeTabState} onMouseLeave={changeToggleState}>Grow</li>
        </ul>
        <div className={Toggledstate ? "TabsBody":"TabsBodys show"} onMouseEnter={changeTabState} onMouseLeave={changeToggleState}>
            {
                TabState
            }
        </div>
    </div>
  )
}

export default Tabs
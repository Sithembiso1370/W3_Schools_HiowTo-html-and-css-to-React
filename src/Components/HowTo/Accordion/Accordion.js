import React from 'react'
import './Accordion.css'

function Accordion() {
  return (
      <ul className="Accordion">
        <select className="no_icon" >
            <option>Sell Crypto</option>
            <option  selected>Earn</option>
        </select>
        <select className="no_icon" >
            <option >Sell Crypto</option>
            <option  selected disabled={true}>Play</option>
        </select>
        <select className="no_icon" >
            <option >Sell Crypto</option>
            <option  selected>Earn</option>
        </select>
        <select className="no_icon" >
            <option >Sell Crypto</option>
            <option  selected>Earn</option>
        </select>
        <select className="no_icon" >
            <option >Sell Crypto</option>
            <option  selected>Earn</option>
        </select>
        <select className="no_icon" >
            <option >Sell Crypto</option>
            <option  selected>Earn</option>
        </select>
      </ul>

  )
}

export default Accordion
import React from 'react'
import './IconBarVertical.css'


function IconBar() {
  return (
    <div className="icon-bar">
        <a className="active" href="/"><i className="fa fa-home"></i></a>
        <a href="/"><i className="fa fa-search"></i></a>
        <a href="/"><i className="fa fa-envelope"></i></a>
        <a href="/"><i className="fa fa-globe"></i></a>
        <a href="/"><i className="fa fa-trash"></i></a>
    </div>
  )
}

export default IconBar
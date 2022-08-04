import React from 'react'
import './Navbar.css'
const Navbar = (props) => {
  return (
    <div>
        <div className="navbar">
         
        <p>𝖇𝖆𝖟𝖎𝖓𝖌𝖆</p>
      
        <div className="inp">
      
      <input
        type="text"
        value={props.inp}
        placeholder="search photos"
        onChange={props.handleInp}
        onKeyDown={props.onKeyDown}
      />
      <button type="button" onClick={props.Search}>
        search
      </button>
      </div>
        </div>
    </div>
  )
}

export default Navbar
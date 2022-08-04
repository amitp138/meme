import React from 'react'
import "./MemeCard.css";
const MemeCard = (props) => {
  return (
    <div>
        <div className="image">
              <img key={props.value.id} src={props.value.urls.small} alt="amit" />
            </div>
    </div>
  )
}

export default MemeCard
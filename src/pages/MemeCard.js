import React from 'react'
import "./MemeCard.css";
const MemeCard = (props) => {
  return (
    <div className='card'>
        <div className="image">
              <img className='memepht' key={props.value.id} src={props.value.urls.small} alt="amit" />
            </div>
            <div className="bottom">
              <div className="like">
                <img src="./like.png" alt="" />
              </div>
              <div className="dislike">
                <img src="./dislike.png" alt="" />
              </div>
              <div className="chat">
                <img src="./chat.png" alt="" />
              </div>
              <div className="share">
                <img src="./share.png" alt="" />
              </div>
            </div>
    </div>
  )
}

export default MemeCard
import React from 'react';

export const Card = () => {

  const [faceUp, setFaceUp] = React.useState(false)

  const toggleTurn = () => {
    setFaceUp(!faceUp)
  }


  return (
    <>
      <div className={faceUp ? "flip-card flip-card-clicked" : "flip-card"} onClick={toggleTurn}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {faceUp ? "front" : "back"}
            {/*<img src={"img_avatar.png"}
                 alt="Avatar"
                 style={{width:"300px", height:"300px"}}/>*/}
          </div>
          <div className="flip-card-back">
            {faceUp ? "front" : "back"}
          </div>
        </div>
      </div>
    </>
)

//<div className="fl ba br-2 b--solid w-10" onClick={handleTurn}>{faceUp ? "front" : "back"}</div>
}

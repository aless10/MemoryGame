import React from 'react';

interface Props {
  name: string
}



export const Card = (props: Props) => {

  const {name} = props

  const [faceUp, setFaceUp] = React.useState(false)

  const toggleTurn = () => {
    setFaceUp(!faceUp)
  }


  return (
    <>
      <div className={faceUp ? "flip-card flip-card-clicked" : "flip-card"} onClick={toggleTurn}>
        <div className="flip-card-inner">
          <div id={`${name}-back`} className="flip-card-back">
            Back
            {/*<img src={"img_avatar.png"}
                 alt="Avatar"
                 style={{width:"300px", height:"300px"}}/>*/}
          </div>
          <div id={`${name}-front`} className="flip-card-front">
            {name}
          </div>
        </div>
      </div>
    </>
)

//<div className="fl ba br-2 b--solid w-10" onClick={handleTurn}>{faceUp ? "front" : "back"}</div>
}

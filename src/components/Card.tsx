import React from 'react';

export const Card = () => {

  const [faceUp, setFaceUp] = React.useState(false)

  const handleTurn = () => {
    setFaceUp(!faceUp)
  }

  return <div className="fl ba b--solid w-10" onClick={handleTurn}>{faceUp ? "front": "back"}</div>
}

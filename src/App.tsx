import React from 'react';
import 'tachyons'
import 'tachyons-extra'
import './App.css'
import { Card } from "./components/Card"

const Cards = [
  "pippo",
  "pippo",
  "pluto",
]

function App() {

  const frontReg = new RegExp('-front')

  const [frontTurned, setFrontTurned] = React.useState(0)
  const [backTurned, setbackTurned] = React.useState(2)

  const onCardClick = (event: any) => {
    const elementId = event.target.id
    console.log(elementId.match(frontReg))
    if (elementId.match(frontReg)) return
    setFrontTurned(frontTurned + 1)
    setbackTurned(backTurned - 1)
  }


  return (
    <div className="App">
      <h3>Total back {backTurned}</h3>
      <h3>Total front {frontTurned}</h3>
      <div className="flex flex-wrap">
        {
          Cards.map((card, index) => {
              return (
                <div className="pa2-ns" key={index} onClick={onCardClick}>
                  <Card key={index} name={card}/>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  );
}

export default App;

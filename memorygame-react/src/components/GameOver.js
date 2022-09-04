import React, { Fragment } from 'react'

export default function GameBoard(props) {
  return (props.show ?
    <div id="gameOver">
      <div>
        Congratulations, you've completed the game!
      </div>
      <button id="restart" onClick={props.handleRestart}>NEW GAME</button>
    </div> : <Fragment />
  )
}
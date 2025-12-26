import React from 'react'
import styles from "./StartGame.module.css";



const StartGame = ({toggleGamePlay}) => {
  return (
    <div className={styles.container}>
        <div>
        <img src="images/dice.png" alt="dice" /> 
        </div>
        
        <div className={styles.content}>
            <h1>Dice Game</h1>
            <button className={styles.button}  onClick={toggleGamePlay}>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame
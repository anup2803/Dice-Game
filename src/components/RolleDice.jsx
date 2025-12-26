import React, { useState } from 'react'
import styles from "./RolleDice.module.css"

const RolleDice = ({currentDice,rollDice}) => {
    


  return (
    <div className={styles.DiceContainer}>
        <div className={styles.Dice} onClick={rollDice}> 
         <img src={`/images/Dice/dice_${currentDice}.png`} alt="Dice 1" />
        </div>
     
     <p>Click on Dice to roll</p>
    </div>
  )
}

export default RolleDice
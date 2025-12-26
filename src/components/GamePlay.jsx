import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import styles from "./GamePlay.module.css"
import RolleDice from './RolleDice'
import Rules from './Rules'

const GamePlay = () => {
    const [selected,setSelected]=useState(null)
    const[currentDice,setCurrentDice]=useState(1);
    const[score,setScore]=useState(0);
    const[error,setError]=useState("");
    const[showRules,setSetRules]=useState(false);





    const generateRandomNumber=(min,max)=>{
       return Math.floor(Math.random() * (max-min )+min);
    }

    const rollDice=()=>{
        if(!selected)
        {
            setError("You have not Selected any number")
            return;
        }
        setError("")
           
        
        const randomNumber =generateRandomNumber(1,7);
        setCurrentDice((prev)=> randomNumber);

        

        if(selected===randomNumber){
            setScore(prev=>prev+randomNumber);
        }
        else{
            setScore(prev=>prev -2);
        }


        setSelected(null);
    }


    const reset=()=>{
        setScore(0);
    }





  return (
    <main>
     <div className={styles.top_sections}>
    <TotalScore score={score}/>
    <NumberSelecter selected={selected} setSelected={setSelected} error={error}/>
     </div>
     <div>
        <RolleDice currentDice={currentDice} rollDice={rollDice}/>
     </div>
     <div className={styles.btn}>
        <button className={styles.white} onClick={reset} >Reset Score</button>
        <button className={styles.black} onClick={()=> setSetRules(prev=>!prev)}>{showRules?"Hide Rules":"Show Rules"}</button>
     </div>

     <div >
        {showRules && <Rules />}
     </div>
    </main>
  )
}

export default GamePlay
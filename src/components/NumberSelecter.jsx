import React, { useState } from 'react'
import styles from "./NumberSelecter.module.css"
const NumberSelecter = ({selected,setSelected,error}) => {
    const arrayNumber=[1,2,3,4,5,6];
    


    
  return (
<div className={styles.NumberSelecte}>
    <p className={styles.error}>{error}</p>
    <div className={styles.container} >
        {arrayNumber.map((number,index)=>
         <div className={`${styles.box} ${selected===number? styles.selected : ""}`}
          key={index} onClick={()=>setSelected(number)}>{number}</div>
        )}
    </div>
    <p>Selceted Number</p>
</div>
  )
}

export default NumberSelecter
import React from 'react'
import styles from"./Testimonal.module.css"

function Testimonal({name,position,imgSrc, testimonalDescr}) {
  return (
    <div className={styles.testimonalContainer}>
        <p className={styles.testimonals}>Testimonials</p>
        <p className={styles.testimonal}>{testimonalDescr}</p>
        <div className={styles.testimonalImageContainer}>
        <img src={imgSrc} alt="An image of the CEO" className={styles.testimonalImage}/>
        </div>
        <div className={styles.jobContainer}>
        <p className={styles.testimonalName}>{name}</p>
        <p className={styles.testimonalPosition}>{position}</p>
        </div>
    </div>
  )
}

export default Testimonal
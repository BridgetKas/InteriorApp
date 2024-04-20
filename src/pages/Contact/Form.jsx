import React from 'react'
import styles from "./Contact.module.css"
import Button from '../../components/common/Button/Button'

function FormC() {
  return (
    <div>
        <form className={styles.formContainer}>
            <div className={styles.formInputContainer}>
                <div className={styles.inputContainer}>
                    <p  className={styles.formLabel}>First Name</p>
                    <input type="text" className={styles.input}/>
                </div>
                <div className={styles.inputContainer}>
                    <p className={styles.formLabel}>Last Name</p>
                    <input type="text" className={styles.input}/>
                </div>

            </div>
            <div>
                <p className={styles.formLabel}>Email</p>
                <input type="email" className={`${styles.input} ${styles.inputEmail}`}/>
            </div>
            <div>
                <p className={styles.formLabel}>Message</p>
                <textarea className={`${styles.input} ${styles.inputTextArea}`}></textarea>
            </div>
             <Button  title="Send Message"/>
        </form>
    </div>
  )
}

export default FormC
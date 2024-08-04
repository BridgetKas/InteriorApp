import { HiOutlineMail } from "react-icons/hi";
import styles from "./FormComp.module.css"
import { LuSend } from "react-icons/lu";
import sofa from "../../../assets/home/sofa.png";
import {colors} from "../../../utils/colors"

function Form() {
  return (
    <div>
        <form className={styles.form}>
            
            <div className={styles.inputContainer}>
                <div className={styles.arrContainer}>
                    <div className={styles.iconContainer}>
                        <HiOutlineMail size={25} color={colors.darkGray}/>
                        <h3 className={styles.letterTitle}>Subscribe to Newsletter.</h3>
                    </div>
                    <div className={styles.inputsContainer}>
                        <input className={styles.input} placeholder='Enter your name'/>
                        <input className={styles.input} placeholder='Enter your email'/>
                        <div className={styles.ionContainer}>
                            <LuSend  size={20} color={colors.white}/>
                        </div>
                    </div>
                </div>
                <div className={styles.formImageContainer}>
                    <img src={sofa} className={styles.formImage}/>
                </div>
            </div>
        </form>

    </div>
  )
}

export default Form
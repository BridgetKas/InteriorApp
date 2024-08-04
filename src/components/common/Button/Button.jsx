import { colors } from '../../../utils/colors'
import styles from "./Button.module.css"


function Button(props) {
  const {title,textColor,bgColor,borderColor} = props
  return (
    <button className={styles.button} style = {{
      color:textColor ? textColor:colors.white,
      backgroundColor: bgColor ? bgColor:colors.black,
      borderColor:borderColor ? borderColor: colors.black,
     }}>
      {title}
    </button>
  )
}

export default Button
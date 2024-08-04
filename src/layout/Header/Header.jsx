import "./Header.module.css"
import styles from "./Header.module.css"
import {colors} from "../../utils/colors"
import Button from '../../components/common/Button/Button'

function Header({
  title,
  titleDescription,
  imageSrc,
  showBtn=true,
  showImage=true,
  showDescription=true
}) {

    return (
        <div className={styles.heroContainer} style={{paddingBottom: !showImage ? "100px":0}}>
          <div>
            <h1 className={styles.heroTitle}>{title}</h1>
            {showDescription && <p className={styles.heroDescription}>{titleDescription}</p>}
             {showBtn && 
              <div className={styles.buttonContainer}>
                <Button title="Shop Now" bgColor={colors.yellow} borderColor={colors.yellow}/>
                <Button title="Explore" bgColor={colors.primary} borderColor={colors.whiteGradient} textColor={colors.white}/>
              </div>}
          </div>
          {showImage && 
            <div className={styles.heroImageContainer}>
                <img src={imageSrc} alt='A green couch' className={styles.heroImage}/>
            </div>}
        </div>
  )
}

export default Header
import "./ProductCard.module.css"
import styles from "./ProductCard.module.css"

function ProductCard({imgSrc, name, price,altInfo}) {
  return (
    <div className={styles.chairContainer}>
      <img src={imgSrc} alt={altInfo} className={styles.chair}/>
      <p className={styles.chairName}>{name}</p>
      <p className={styles.chairCost}>{price}</p>
    </div>
  )
}

export default ProductCard
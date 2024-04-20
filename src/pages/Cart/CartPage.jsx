import React from 'react'
import styles from "./Cart.module.css"
import Header from '../../layout/Header/Header'

function Cart() {
  return (
    <div>
      <Header title="Cart" showBtn={false} showImage={false} showDescription={false}/>
    <div className={styles.container}>

      <div className={styles.cartHeading}>
        <p className={styles.cartTitle}>Image</p>
        <p className={styles.cartTitle}>Product</p>
        <p className={styles.cartTitle}>Price</p>
        <p className={styles.cartTitle}>Quantity</p>
        <p className={styles.cartTitle}>Total</p>
        <p className={styles.cartTitle}>Remove</p>
      </div>
      <hr/>
    </div>

    </div>
  )
}

export default Cart
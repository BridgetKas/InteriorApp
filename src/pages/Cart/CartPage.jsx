import React, {useState} from 'react'
import styles from "./Cart.module.css"
import Header from '../../layout/Header/Header'
import aeroChair from "../../assets/home/AeroChair.png"
import nordicChair from "../../assets/home/nordic.png"
import { RxCross2 } from "react-icons/rx";
import {colors} from "../../utils/colors"
import Button from '../../components/common/Button/Button'


const items = [
  {
      image:aeroChair,
      name:"Product1",
      price:49,
      quantity:1,
      total:49,
      id:0,
  },
  {
    image:nordicChair,
    name:"Product2",
    price:49,
    quantity:1,
    total:49,
    id:1,
}
]

function Cart() {
  return (
    <div>
      <Header title="Cart" showBtn={false} showImage={false} showDescription={false}/>
      <div className={styles.container}>
        <div style={{width:"100%",overflowX:"auto"}}>
          <div className={styles.itemContainer}>
            <div className={styles.cartHeading}>
              <p className={styles.cartTitle}>Image</p>
              <p className={styles.cartTitle}>Product</p>
              <p className={styles.cartTitle}>Price</p>
              <p className={styles.cartTitle}>Quantity</p>
              <p className={styles.cartTitle}>Total</p>
              <p className={styles.cartTitle}>Remove</p>
            </div>

            <hr/>
            {items.map((item) =>  (
              <div key={item.id} >
                <div className={styles.cartContainer}>
                  <div>
                    <img src={item.image} className={styles.cartImage}/>
                  </div>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>${item.price}</p>
                  <div className={styles.mainbtnContainer}>
                    <div className={styles.btnContainer}>
                      <button>-</button>
                    </div>
                    <div className={styles.inputContainer}>
                      <input type="number" className={styles.input} value="1"/>
                    </div>
                    <div className={styles.btnContainer}>
                      <button>+</button>
                    </div>
                  </div>
                  <p className={styles.itemTotal}>${item.total}</p>
                  <div className={styles.removeContainer}>
                  <RxCross2  color={colors.black} size={30}/>
                  </div>
                </div>
                <hr/>
              </div>
            )
            )}
          </div>
        </div>
        <div className={styles.maincouponContainer}>
          <div>
            <div className={styles.btnsContainer}>
              <div className={styles.btnKontainer}>
                <Button title="Update Cart"/>
              </div>
              <div className={styles.btnKontainer}>
                <Button title="Continue Shopping"/>
              </div>
            </div>
            <div className={styles.couponKontainer}>
              <p className={styles.coupon}>Coupon</p>
              <p className={styles.couponDescrption}>Enter your  coupon if you have one.</p>

              <div className={styles.couponContainer}>
                <input  placeholder="Coupon Code"className={styles.inputCoupon}/>
                <div>
                  <Button title="Apply Coupon"/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.couponKontainer}>
            <h2>Cart Totals</h2>
            <hr/>
            <div className={styles.totalContainer}>
            <p className={styles.priceName}>Subtotal</p>
            <p className={styles.price}>$458</p>
            </div>
            <div className={styles.totalContainer}>
            <p className={styles.priceName}>Total</p>
            <p className={styles.price}>$458</p>
            </div>
            <div className={styles.checkoutContainer}>
              <Button title="Proceed To Checkout"/>
            </div>
          </div>
        </div>
      </div>

  </div>
  )
}

export default Cart
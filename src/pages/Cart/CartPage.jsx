import React, {useState , useEffect} from 'react'
import styles from "./Cart.module.css"
import Header from '../../layout/Header/Header'
import aeroChair from "../../assets/home/AeroChair.png"
import nordicChair from "../../assets/home/nordic.png"
import { RxCross2 } from "react-icons/rx";
import {colors} from "../../utils/colors"
import Button from '../../components/common/Button/Button'
import { NavLink } from 'react-router-dom'


const itemsArr = [
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

  const [items, setItems] = useState(itemsArr)

  const handleChair = (chair) => setItems([...items,chair]);

  const handleQuantityIncrease = (id) => {
    const incrementIndex = items.findIndex ((item) => item.id === id)
    let updatedItems = [...items]
    updatedItems[incrementIndex].quantity++
    let updatedQuantity = updatedItems[incrementIndex].quantity
    updatedItems[incrementIndex].total = updatedQuantity * updatedItems[incrementIndex].price
    setItems(updatedItems)
  };

  const handleQuantityDecrease = (id) => {
    const  decrementIndex = items.findIndex ((item) => item.id === id)
    let decrementArr = [...items]
    if (decrementArr[decrementIndex]. quantity <= 1){
      return
    }
   let decrementQuantity = -- decrementArr[decrementIndex].quantity;
   decrementArr[decrementIndex].total = decrementQuantity * decrementArr[decrementIndex].price;
   setItems(decrementArr)
  };

  const changeQuantity = (id,e) =>{
    const changeIndex = items.findIndex((item) => item.id === id)
    let changeValue = Number(e.target.value)
    if (changeValue <= 0) {
        return;
    }
    let changedItems = [...items]
    changedItems[changeIndex].quantity = changeValue
    changedItems[changeIndex].total = changedItems[changeIndex].quantity * changedItems[changeIndex].price
    setItems(changedItems)
  }

  const cartTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.total
    });
    return total;
  }

  


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
                      <button onClick = {() => handleQuantityDecrease(item.id)}>-</button>
                    </div>
                    <div className={styles.inputContainer}>
                      <input type="number" className={styles.input} value={item.quantity} onChange={(e) => changeQuantity(item.id,e)}/>
                    </div>
                    <div className={styles.btnContainer}>
                      <button onClick={() => handleQuantityIncrease(item.id)}>+</button>
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
              <div className={styles.priceName}>Subtotal</div>
              <div className={styles.price}>${cartTotal()}</div>
            </div>
            <div className={styles.totalContainer}>
              <div className={styles.priceName}>Total</div>
              <div className={styles.price}>${cartTotal()}</div>
            </div>
            <div className={styles.checkoutContainer}>
              <NavLink to= "/checkout"><Button title="Proceed To Checkout"/></NavLink>
            </div>
          </div>
        </div>
      </div>

  </div>
  )
}

export default Cart


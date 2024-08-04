import styles from "./checkout.module.css"
import Header from '../../layout/Header/Header'
import Form from "../../components/common/Form/FormComp"
import Button from '../../components/common/Button/Button'

function Checkout() {
  return (
    <div className={styles.mainContainer}>
      <Header title="CheckOut" showBtn={false} showImage={false} showDescription={false}/>
       <div className={styles.checkOutContainer}>
          <div className={styles.returnContainer}>
            <p className={styles.returnName}>Returning customer ? <a href="#" className={styles.returnLink}>Click here </a> to login</p> 
          </div>
          <div className={styles.formContainer}>
            <div className={styles.container}>
              <p className={styles.formTitle}>Billing Details</p>
              <form className={styles.form}>
                <div className={styles.fieldContainer}>
                  <p className={styles.fieldTitle}>Country</p>
                  <select>
                    <option value="">Select a country</option>
                  </select>
                </div>
                <div className={styles.namesContainer}>
                  <div className={styles.fieldContainer}>
                    <p className={styles.fieldTitle}>First Name</p>
                    <input type="text"/>
                  </div>
                  <div className={styles.fieldContainer}>
                    <p className={styles.fieldTitle}>Last Name</p>
                    <input type="text"/>
                  </div>
                </div>
                <div className={styles.fieldContainer}>
                  <p className={styles.fieldTitle}>Company Name</p>
                  <input type="text"/>
                </div>
                <div className={styles.fieldContainer}>
                  <p className={styles.fieldTitle}>Address</p>
                  <input type="text" placeholder="Street address" className={styles.street}/>
                  <input type="text" placeholder="Apartment,suite,unit etc. (optional)"/>
                </div>
                <div className={styles.namesContainer}>
                  <div className={styles.fieldContainer}>
                    <p className={styles.fieldTitle}>State / Country</p>
                    <input type="text"/>
                  </div>
                  <div className={styles.fieldContainer}>
                    <p className={styles.fieldTitle}>Posta/Zip </p>
                    <input type="text"/>
                  </div>
                </div>
                <div className={`${styles.namesContainer} ${styles.final}`}>
                  <div className={styles.fieldContainer}>
                    <p className={styles.fieldTitle}>Email Address</p>
                    <input type="text"/>
                  </div>
                  <div className={`${styles.fieldContainer} ${styles.phone}`}>
                    <p className={styles.fieldTitle}>Phone</p>
                    <input type="text"/>
                  </div>
                </div>
                <div className={styles.fieldCheckBox}>
                  <input type="checkbox"/>
                  <label>Create an account?</label>
                </div>
                <div className={styles.fieldCheckBox}>
                  <input type="checkbox"/>
                  <label>Ship to a different address?</label>
                </div>
                <div>
                  <p className={styles.order}>Order Notes</p>
                  <textarea placeholder="Write your notes here...."></textarea>
                </div>
              </form>
            </div>
            <div className={styles.container1}>
              <div className={styles.couponKontainer}>
                <p className={styles.coupon}>Coupon Code</p>
                <div className={styles.containerKoupon}>
                  <div>
                  <p className={styles.couponDescrption}>Enter your  coupon if you have one.</p>
                  </div>
                  <div className={styles.couponContainer}>
                    <div className={styles.inputContainer}>
                      <input  placeholder="Coupon Code"className={styles.inputCoupon}/>
                    </div>
                    <div className={styles.inputContainer}>
                      <Button title="Apply"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.orderContainer}>
                <p className={styles.coupon}>Your Order</p>
                <div className={styles.tableContainer}>
                  <table>
                    <thead>
                      <tr>
                        <th> Product</th>
                        <th> Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Top Up T-Shirt x 1</td>
                        <td>$250.00</td>
                      </tr>
                      <tr>
                        <td>Polo Shirt x 1</td>
                        <td>$100.00</td>
                      </tr>
                      <tr>
                        <td>Cart SubTotal</td>
                        <td>$100.00</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>$100.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={styles.paymentContainer}>
                    <a href="#" className={styles.payment}>Direct Bank Transfer</a>
                  </div>
                  <div className={styles.paymentContainer}>
                    <a href="#" className={styles.payment}>Cheque Transfer</a>
                  </div>
                  <div className={`${styles.paymentContainer}`}>
                    <a href="#" className={styles.payment}>PayPal</a>
                  </div>
                  <div className={styles.btnContainer}>
                    <Button title="Pay Order"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Form/>
    </div>
  )
}

export default Checkout
import Header from '../../layout/Header/Header'
import Nordic from "../../assets/home/nordic.png"
import AeroChair from "../../assets/home/AeroChair.png"
import greenChair from "../../assets/home/greenChair.png"
import ProductCard from '../../specific/Products/ProductCard'
import styles from"./Shop.module.css"

const chairs = [
  {
    imgSrc1:Nordic,
    name:"Nordic Chair",
    price:"$50", 
    altInfo:"A three legged chair"
  },
  {
    imgSrc1:AeroChair,
    name:"Aero Chair", 
    price:"$78" ,
    altInfo:"A cream four-legged chair"
  },
  {
    imgSrc1:greenChair,
    name:"Ernogomic Chair",
    price:"$48",
    altInfo:"A green four-legged chair"
  },
  {
    imgSrc1:Nordic,
    name:"Nordic Chair",
    price:"$50", 
    altInfo:"A three legged chair"
  },
  {
    imgSrc1:AeroChair,
    name:"Aero Chair", 
    price:"$78" ,
    altInfo:"A cream four-legged chair"
  },
  {
    imgSrc1:greenChair,
    name:"Ernogomic Chair",
    price:"$48",
    altInfo:"A green four-legged chair"
  },
  {
    imgSrc1:Nordic,
    name:"Nordic Chair",
    price:"$50", 
    altInfo:"A three legged chair"
  },
  {
    imgSrc1:AeroChair,
    name:"Aero Chair", 
    price:"$78" ,
    altInfo:"A cream four-legged chair"
  },
  {
    imgSrc1:greenChair,
    name:"Ernogomic Chair",
    price:"$48",
    altInfo:"A green four-legged chair"
  },
  {
    imgSrc1:Nordic,
    name:"Nordic Chair",
    price:"$50", 
    altInfo:"A three legged chair"
  }
]


function Shop() {
  return (
    <div>
      <Header title="Shop" showBtn={false} showImage={false} showDescription={false}/>
      <div className={styles.shopContainer}>
        {chairs.map((chair,index)=>
          <ProductCard key={index} imgSrc={chair.imgSrc1} name={chair.name} price={chair.price} altInfo={chair.altInfo}/>
        )}
      </div>
    </div>
  )
}

export default Shop
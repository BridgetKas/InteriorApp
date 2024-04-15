import React from 'react'
import "./Service.module.css"
import Header from '../../layout/Header/Header'
import greenCouch from "../../assets/home/couch.png"
import Testimonal from '../../components/common/Testimonal/Testimonal'
import person from "../../assets/home/person-1.png"
import Form from '../../components/common/Form/FormComp'
import Icon from '../../specific/Why-us/Why'
import Nordic from "../../assets/home/nordic.png"
import AeroChair from "../../assets/home/AeroChair.png"
import greenChair from "../../assets/home/greenChair.png"
import Button from '../../components/common/Button/Button'
import {colors} from "../../utils/colors"
import styles from "./Service.module.css"
import ProductCard from '../../specific/Products/ProductCard'

function Service() {
  return (
    <div>
       <Header title="Services" imageSrc={greenCouch}titleDescription="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."/>
        <Icon/>
        <div className={styles.mainchairContainer}>
        <div className={styles.productContainer}>
          <h2 className={styles.chairTitle}>
          Crafted with excellent material.
          </h2>
          <p className={styles.chairDescription}>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div >
            <Button title="Explore" textColor={colors.white}/>
          </div>
        </div>
        <div className={styles.chairsContainer}>
            <ProductCard 
              imgSrc={Nordic} 
              name="Nordic Chair" 
              price="$50" 
              altInfo="A three legged chair"
            />

            <ProductCard 
              imgSrc={AeroChair} 
              name="Aero Chair" 
              price="$78" 
              altInfo="A cream four-legged chair"
            />

            <ProductCard 
              imgSrc={greenChair} 
              name="Ernogomic Chair" 
              price="$48" 
              altInfo="A green four-legged chair"
            />
        </div>
      </div>
       <Testimonal name="Maria Jones" position="CEO, Co-Founder, XYZ Inc." imgSrc={person}testimonalDescr="“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”"/>
       <Form/>
    </div>
  )
}

export default Service
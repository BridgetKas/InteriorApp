import React, { Fragment } from 'react'
import styles from "./home.module.css"
import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { TbTruckReturn } from "react-icons/tb";
import greenCouch from "../../assets/home/couch.png"
import Nordic from "../../assets/home/nordic.png"
import AeroChair from "../../assets/home/AeroChair.png"
import greenChair from "../../assets/home/greenChair.png"
import Button from '../../components/common/Button/Button';
import { colors } from '../../utils/colors'
import whyUs from "../../assets/home/why-choose-us-img.jpg";
import gridImg from "../../assets/home/img-grid-1.jpg";
import person from  "../../assets/home/person-1.png"
import Blog from '../../components/common/Blog/Blog';
import stools from "../../assets/home/post-1.jpg"
import coffeeTable from "../../assets/home/post-2.jpg"
import shapes from "../../assets/home/post-3.jpg"
import Form from '../../components/common/Form/FormComp';
import Header from '../../layout/Header/Header';
import gridImg2 from "../../assets/home/img-grid-2.jpg";
import gridImg3 from "../../assets/home/img-grid-3.jpg";







function Home() {
  return (
    <Fragment>
      {/* ****HERO SECTION */}
      <Header 
        title="Modern Interior Design Studio" 
        titleDescription="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        imageSrc={greenCouch}
      />

      {/* PRODUCT SECTION */}
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
          <div className={styles.chairContainer}>
            <img src={Nordic} alt="A cream four-legged chair" className={styles.chair}/>
            <p className={styles.chairName}>Nordic Chair</p>
            <p className={styles.chairCost}>$50</p>
          </div>
          <div className={styles.chairContainer}>
            <img src={AeroChair} alt="A cream four-legged chair" className={styles.chair}/>
            <p className={styles.chairName}>Aero Chair</p>
            <p className={styles.chairCost}>$78</p>
          </div>
          <div className={styles.chairContainer}>
            <img src={greenChair} alt="A green four-legged chair" className={styles.chair}/>
            <p className={styles.chairName}>Ernogomic Chair</p>
            <p className={styles.chairCost}>$48</p>
          </div>
        </div>
      </div>

      {/* Why Chose Us */}
      <div className={styles.qualitiesContainer}>
        <div className={styles.qualityContainer}>
          <h2 className={styles.qualityTitle}>Why Choose Us</h2>
          <p className={styles.qualityDescription}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <div className={styles.featuresContainer}>
            <div className={styles.featureContainer}>
              <div className={styles.iconContainer}>
                <FiTruck size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>
              </div>
              <p className={styles.featureTitle}>Fast & Free Shipping</p>
              <p className={styles.featureDescription}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className={styles.featureContainer}>
              <div className={styles.iconContainer}>
                <FiShoppingCart size={40} className={styles.icon} color={colors.black} style={{margin:10}}/>
              </div>
              <p className={styles.featureTitle}>Easy Shipping</p>
              <p className={styles.featureDescription}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className={styles.featureContainer}>
              <div className={styles.iconContainer}>
                <HiOutlineSupport  size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>
              </div>
              <p className={styles.featureTitle}>24/7 Support</p>
              <p className={styles.featureDescription}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
            <div className={styles.featureContainer}>
              <div className={styles.iconContainer}>
                <TbTruckReturn  size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>
              </div>
              <p className={styles.featureTitle}>Hassle Free Returns</p>
              <p className={styles.featureDescription}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
            </div>
          </div>
        </div>
        <div className={styles.reasonsContainer}>
          <img src={whyUs} alt="A little blue couch with fruits" className={styles.imageR}/>
        </div>
      </div>
      <div className={styles.reasonPromContainer}>
          <div className={styles.reasonsKontainer}>
            <div className={styles.div1}>
              <img src={gridImg} alt="A grid of three images: a stool,couch and a lampshed" className={`${styles.imageR} `}/>
            </div>
            <div className={styles.div2}>
              <img src={gridImg2} alt="A grid of three images: a stool,couch and a lampshed" className={`${styles.imageR} `}/>
            </div>
            <div className={styles.div3}>
              <img src={gridImg3} alt="A grid of three images: a stool,couch and a lampshed" className={`${styles.imageR} `}/>
            </div>
          </div>

        <div className={styles.promiseContainer}>
          <h2 className={styles.promiseTitle}>We Help You Make Modern Interior Design</h2>
          <p className={styles.promiseDescription}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
          <ul className={styles.promises}>
            <li className={styles.promise}>Donec vitae odio quis nisl dapibus malesuada</li>
            <li className={styles.promise}>Donec vitae odio quis nisl dapibus malesuada</li>
            <li className={styles.promise}>Donec vitae odio quis nisl dapibus malesuada</li>
            <li className={styles.promise}>Donec vitae odio quis nisl dapibus malesuada</li>
          </ul>
          <Button title="Explore"  textColor={colors.white}/>
      </div>
      </div>

      {/* CHAIR SECTION  */}
      <div className={styles.moresContainer}>
        <div className={styles.moreContainer}>
          <div className={styles.moreImageContainer}>
            <img src={Nordic} alt="A cream four-legged chair" className={styles.chairMore}/>
          </div>
          <div className={styles.moreDescriptionCont}>
            <p className={styles.moreTitle}>Nordic Chair</p>
            <p className={styles.moreDescription}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            <a href="#" className={styles.more}>Read More</a>
          </div>
        </div>
        <div className={styles.moreContainer}>
          <div className={styles.moreImageContainer}>
            <img src={AeroChair} alt="A cream four-legged chair" className={styles.chairMore}/>
          </div>
          <div className={styles.moreDescriptionCont}>
            <p className={styles.moreTitle}>Aero Chair</p>
            <p className={styles.moreDescription}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            <a href="#" className={styles.more}>Read More</a>
          </div>
        </div>
        <div className={`${styles.moreContainer} ${styles.Two}`}>
          <div className={styles.moreImageContainer}>
            <img src={greenChair} alt="A cream four-legged chair" className={styles.chairMore}/>
          </div>
          <div className={styles.moreDescriptionCont}>
            <p className={styles.moreTitle}>Ergonomic Chair</p>
            <p className={styles.moreDescription}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
            <a href="#" className={styles.more}>Read More</a>
          </div>
        </div>
      </div>

      {/* TESTIMONAL SECTION */}
      <div className={styles.testimonalContainer}>
        <p className={styles.testimonals}>Testimonials</p>
        <p className={styles.testimonal}>
        “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”
        </p>
        <div className={styles.testimonalImageContainer}>
          <img src={person} alt="An image of the CEO" className={styles.testimonalImage}/>
        </div>
        <div className={styles.jobContainer}>
          <p className={styles.testimonalName}>Maria Jones</p>
          <p className={styles.testimonalPosition}>CEO, Co-Founder, XYZ Inc.</p>
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className={styles.blogContainer}>
        <div className={styles.blogpostContainer}>
          <h2 className={styles.blogTitle}>Recent Blog</h2>
          <a href="#" className={styles.blogLink}>View All Posts</a>
        </div>
        <div className={styles.homeblogContainer}>
          <Blog blogTitle="First Time Home Owner Ideas" name="Kristin Watson" date="Dec 19, 2021" image={stools} className={styles.homeBlog}/>
          <Blog blogTitle="How To Keep Your Furniture Clean" name="Robert Fox" date="Dec 15, 2021" image={coffeeTable} className={styles.homeBlog}/>
          <Blog blogTitle="Small Space Furniture Apartment Ideas" name="Kristin Watson" date="Dec 12, 2021" image={shapes} className={styles.homeBlog}/>
        </div>
      </div>
      <div className={styles.formContainer}>
       <Form/>
      </div>
    </Fragment>
  )
}

export default Home
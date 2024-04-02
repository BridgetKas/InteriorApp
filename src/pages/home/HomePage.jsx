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




function Home() {
  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <div className={styles.heroContainer}>
          <div>
            <h1 className={styles.heroTitle}>Modern Interior Design Studio</h1>
            <p className={styles.heroDescription}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <div className={styles.buttonContainer}>
              <Button title="Shop Now" bgColor={colors.yellow} borderColor={colors.yellow}/>
              <Button title="Explore" bgColor={colors.primary} borderColor={colors.whiteGradient} textColor={colors.white}/>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <img src={greenCouch} alt='A green couch' className={styles.heroImage}/>
          </div>
        </div>
      </div>
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
      <div className={styles.qualitiesContainer}>
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
        <div className={styles.reasonContainer}>
          <img src={whyUs} alt="A little blue couch with fruits" className={styles.imageR}/>
        </div>
        <div className={styles.reasonContainer}>
          <img src={gridImg} alt="A grid of three images: a stool,couch and a lampshed" className={`${styles.imageR} ${styles.two}`}/>
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
        <div className={styles.moreContainer}>
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

      <div className={styles.blogContainer}>
        <h2 className={styles.blogTitle}>Recent Blog</h2>
        <a href="#" className={styles.blogLink}>View All Posts</a>
        <div className={styles.blogContainers}>
          <div className={styles.blogContainer}>
            
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
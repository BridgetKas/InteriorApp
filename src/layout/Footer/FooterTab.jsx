import  { Fragment } from 'react'
import { FaFacebookF} from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./FooterTab.module.css";


function FooterTab() {
  return (
    <Fragment>
        <div className={styles.footertabContainer}>
            <h1>Dream.</h1>
            <div className={styles.footerContainer}>
                <div className={styles.bottomContainer}>
                    <p className={styles.description}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                    <div className={styles.socialMediaContainer}>
                        <div className={styles.logoContainer}>
                            <FaFacebookF className={styles.logo} size={16} />
                        </div>
                        <div className={styles.logoContainer}>
                            <FaTwitter  className={styles.logo} size={16}/>
                        </div>
                        <div className={styles.logoContainer}>
                            <FaInstagram  className={styles.logo} size={16}/>
                        </div>
                        <div className={styles.logoContainer}>
                            <FaLinkedin  className={styles.logo} size={16}/>
                        </div>
                    </div>
                </div>

                <div className={styles.companyContainer}>
                    <div className={styles.linksContainer}>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact us</a>
                        <a href="#">Jobs</a>
                    </div>

                    <div className={styles.linksContainer}>
                        <a href="#">Support</a>
                        <a href="#">Knowledge base</a>
                        <a href="#">Live chat</a>
                    </div>

                    <div className={styles.linksContainer}>
                        <a href="#">Jobs</a>
                        <a href="#">Our team</a>
                        <a href="#">Leadership</a>
                        <a href="#">Privacy Policy</a>
                    </div>

                    <div className={styles.linksContainer}>
                        <a href="#">Nordic Chair</a>
                        <a href="#">Kruzo Aero</a>
                        <a href="#">Ergonomic Chair</a>
                    </div>

                </div>
            </div>
            <hr/>
            <div className={styles.copyrightContainer}>
                <p className={styles.copy}>
                    Copyright &#169;2024. All Rights Reserved. <span className={styles.horizontalLine}></span> Designed with love by Untree.co 
                    Distributed By ThemeWagon
                </p>

                <div className={styles.privacyContainer}>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </Fragment>
)
} 

export default FooterTab
import styles from "./Why.module.css"
import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { TbTruckReturn } from "react-icons/tb";
import {colors} from "../../utils/colors"

const features = [
    {
        id:0,
        icon:<FiTruck size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>,
        featureTitle:"Fast & Free Shipping,",
        featureDescription:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
        id:1,
        icon:<FiShoppingCart size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>,
        featureTitle:"Easy Shipping,",
        featureDescription:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
        id:2,
        icon:<HiOutlineSupport  size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>,
        featureTitle:"Support",
        featureDescription:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
        id:3,
        icon:<TbTruckReturn  size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>,
        featureTitle:"Hassle Free Returns,",
        featureDescription:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
        id:4,
        icon:<FiShoppingCart size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>,
        featureTitle:"Easy Shipping,",
        featureDescription:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
        id:5,
        icon:< HiOutlineSupport size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>,
        featureTitle:"Support",
        featureDescription:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
        id:6,
        icon:<FiTruck size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>,
        featureTitle:"Fast & Free Shipping,",
        featureDescription:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    },
    {
        id:7,
        icon:<TbTruckReturn  size={40}  className={styles.icon} color={colors.black} style={{margin:10}}/>,
        featureTitle:"Hassle Free Returns",
        featureDescription:"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
    }

]

function Icon() {
  return (
    <div   className={styles.featureContainer}>
        {features.map((feature) => {
            return <div key ={feature.id}>
                <div className={styles.iconContainer}>
                    {feature.icon}
                </div>
                <p className={styles.featureTitle}>{feature.featureTitle}</p>
                <p className={styles.featureDescription}>{feature.featureDescription}</p>
            </div>
        })}
    </div> 
  )
}

export default Icon
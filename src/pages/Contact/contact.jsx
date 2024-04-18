import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import style from "./Contact.module.css"
import {colors} from"../../utils/colors";

const contacts = [
    {
        icon:<FaLocationDot color={colors.white} size={17}/>,
        information:"43 Raymouth Rd. Baltemoer, London 3910"
    },
    {
        icon:<MdEmail color={colors.white} size={17}/>,
        information:"info@yourdomain.com"
    },
    {
        icon:<FaPhone color={colors.white} size={17}/>,
        information:"+1 294 3925 3939"
    }
]

function Contact() {
  return (
    <div className={style.mainContactContainer}>
        {contacts.map((contact,index) => {
            return <div key={index} className={style.contactContainer}>
                <div className={style.iconContainer}>{contact.icon}</div>
                <div className={style.contactInformation}>{contact.information}</div>
            </div>
        })}
    </div>
  )
}

export default Contact
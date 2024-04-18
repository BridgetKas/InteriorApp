import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import style from "./Contact.module.css"


const contacts = [
    {
        icon:<FaLocationDot />,
        information:"43 Raymouth Rd. Baltemoer, London 3910"
    },
    {
        icon:<MdEmail />,
        information:"info@yourdomain.com"
    },
    {
        icon:<FaPhone />,
        information:"+1 294 3925 3939"
    }
]

function contact() {
  return (
    <div className={style.mainContactContainer}>
        {contacts.map((contact) => {
            return <div key={index} className={style.contactContainer}></div>
        })}


    </div>
  )
}

export default contact
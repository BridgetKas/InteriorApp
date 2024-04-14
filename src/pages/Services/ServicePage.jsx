import React from 'react'
import "./Service.module.css"
import Header from '../../layout/Header/Header'
import greenCouch from "../../assets/home/couch.png"

function Service() {
  return (
    <div>
       <Header title="Services" imageSrc={greenCouch}titleDescription="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."/>
    </div>
  )
}

export default Service
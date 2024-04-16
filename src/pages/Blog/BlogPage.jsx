import React from 'react'
import Header from '../../layout/Header/Header'
import greenCouch from "../../assets/home/couch.png"
import Testimonal from '../../components/common/Testimonal/Testimonal'
import Form from '../../components/common/Form/FormComp'
import person from "../../assets/home/person-1.png"

function BlogPage() {
  return (
    <div>
      <Header title="Blog" imageSrc={greenCouch}titleDescription="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."/>
      <Testimonal name="Maria Jones" position="CEO, Co-Founder, XYZ Inc." imgSrc={person}testimonalDescr="“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”"/>

      <Form/>


    </div>
  )
}

export default BlogPage
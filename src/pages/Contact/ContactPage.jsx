import"./Contact.module.css"
import Header from '../../layout/Header/Header'
import greenCouch from "../../assets/home/couch.png"
import Contact from './contact'
import FormC from './Form'
import Form from '../../components/common/Form/FormComp'

function ContactPage() {
  return (
    <div>
      <Header 
      title="Contact" 
      imageSrc={greenCouch}
      titleDescription="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <Contact/>
      <FormC/>
      <Form/>                           
    </div>
  )
}

export default ContactPage
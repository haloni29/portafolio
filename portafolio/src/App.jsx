import { useState } from 'react'
import './App.css'
import { About } from './About'
import { Proyects } from './Proyects'
import { Contact } from './Contact'


function App() {
  const [MostrarAbout, setMostrarAbout] = useState(false)
  const [MostrarProyects, setMostrarProyects] = useState(false)
  const [MostrarContact, setMostrarContact] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const changeVisibility = () =>{
    return setIsVisible(!isVisible)
  }
  const VisibilityAbout = () => {
    return setMostrarAbout(!MostrarAbout)
  }
  const VisibilityProyects = () => {
    return setMostrarProyects(!MostrarProyects)
  }
  const VisibilityContacts = () => {
    return setMostrarContact(!MostrarContact)
  }
  const AboutData = () => {
    return About()
  }
  const ProyectsData = () => {
    return Proyects()
  }
  const ContactData = () => {
    return Contact()
  }
  
  


  
  return (
    
    <>
      <header>
        <h1>Portafolio</h1>
        <nav>
            <ul id="barra">
                <li class="barra_nav"><a id="About" class="content_nav" onClick={() => {VisibilityAbout(); changeVisibility(); if (MostrarProyects == true){VisibilityProyects()} if (MostrarContact == true){VisibilityContacts()}; }}  href="#">{MostrarAbout ? 'Ocultar' : 'About'}</a></li>
                <li class="barra_nav"><a id="Proyects" class="content_nav" onClick={() =>{VisibilityProyects(); changeVisibility(); if (MostrarAbout == true){VisibilityAbout()} if (MostrarContact == true){VisibilityContacts()}}} href="#">{MostrarProyects ? 'Ocultar' : 'Proyects'}</a></li>
                <li class="barra_nav"><a id="Contact" class="content_nav" onClick={() => {VisibilityContacts(); changeVisibility(); if (MostrarAbout == true){VisibilityAbout();} if (MostrarProyects == true){VisibilityProyects()}}} href="#">{MostrarContact ? 'Ocultar' : 'Contact'}</a></li>
            </ul>
        </nav>
      </header>
      <div className={`Content ${MostrarAbout ? 'Active' : ''}`}>
      {MostrarAbout && changeVisibility && <AboutData/>}
      </div>
      <div className={`Content ${MostrarProyects ? 'Active' : ''}`}>
      {MostrarProyects && changeVisibility && <ProyectsData/>}
      </div>
      <div className={`Content ${MostrarContact ? 'Active' : ''}`}>
      {MostrarContact && changeVisibility && <ContactData/>}
      </div>  
    </>
  )
}


export default App

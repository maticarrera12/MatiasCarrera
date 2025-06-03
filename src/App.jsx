import ButtonBar from "./components/ButtonBar"
import CallToAction from "./components/CallToAction"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/NavBar"
import Projects from "./components/Projects"
import Studies from "./components/Studies"

import Tecnologies from "./components/Tecnologies"



const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-soft-white">
      <ButtonBar/>
      <Navbar/>
      <Hero/>
      <Projects/>
      <CallToAction/>
     <Studies/>
     <Tecnologies/> 
     <ContactMe/>
     <Footer/>
    </main>
  )
}

export default App
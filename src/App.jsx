import ButtonBar from "./components/ButtonBar"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/NavBar"
import Projects from "./components/Projects"

import Tecnologies from "./components/Tecnologies"



const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-soft-white">
      <ButtonBar/>
      <Navbar/>
      <Hero/>
      <Projects/>
     <Tecnologies/> 
     <ContactMe/>
     <Footer/>
    </main>
  )
}

export default App
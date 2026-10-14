import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Shop from './components/sections/Shop'
import ProblemPanel from './components/sections/ProblemPanel'
import Faq from './components/sections/Faq'
import Benefits from './components/sections/Benefits'
import About from './components/sections/About'
import ContactCTA from './components/sections/ContactCTA'
import WhatsAppFloat from './components/ui/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Shop />
        <ProblemPanel />
        <Benefits />
        <About />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

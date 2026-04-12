import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import WhyUs from './components/WhyUs'
import HoursContact from './components/HoursContact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <WhyUs />
        <HoursContact />
      </main>
      <Footer />
    </>
  )
}

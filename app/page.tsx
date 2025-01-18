import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import AboutUs from './components/AboutUs'
import ContactInfo from './components/ContactInfo'
import WhyChooseUs from './components/WhyChooseUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Products />
        <AboutUs />
        <ContactInfo />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}


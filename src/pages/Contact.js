import React from 'react'
import Hero2 from '../components/Hero2'
import NavMain from '../components/NavMain'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Banner from '../components/Banner'

const Contact = () => {
  return (
    <main>
      <NavMain />
      <Hero2 heading="Have any query ? Message us." />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Contact
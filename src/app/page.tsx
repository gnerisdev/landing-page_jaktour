"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Category from "./components/Category"
import Destination from "./components/Destination"
import Book from "./components/Book"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Book />
      <Category />
      <Destination />
      <Testimonials />
      <WhatsAppButton />
      <Footer />
    </main>
  )
}

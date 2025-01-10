import Link from 'next/link'
import Image from 'next/image'
import { IoMenu } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { useState, useEffect } from 'react'

const Header = () => {
  // Manage header bg change on scroll
  const [scrollY, setScrollY] = useState(0)
  const [headerBackground, setHeaderBackground] = useState('')
  // Manage visibility of nav menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Update the scroll position state when the user scrolls
  const handleScroll = () => setScrollY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Determine the background color based on the scroll position
  useEffect(() => {
    if (scrollY > 0) {
      setHeaderBackground('py-0 bg-[#ffffff] shadow-md')
    } else {
      setHeaderBackground('')
    }
  }, [scrollY])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav
      className={`px-[5%] top-0 w-full fixed flex items-center justify-between z-20 ${headerBackground} special-font`}
    >
      <Link href="/" className="w-[80px]">
        <Image
          src="/img/logo.png"
          width={80}
          height={80}
          alt="logo"
          className="w-full"
          loading="eager"
        />
      </Link>

      <section
        className={`${
          isMenuOpen ? 'left-0' : 'left-[-100%]'
        } nav-transition md:transition-none absolute top-[68px] md:top-0 md:left-0 md:relative md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 text-[16px] text-litedark font-bold bg-orange md:bg-transparent pl-[5%] md:pl-auto py-10 md:py-0 w-full md:w-auto`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8">
          <a
            href="#"
            className="hover:text-white md:hover:text-orange transition delay-200"
            onClick={toggleMenu}
          >Sobre</a>
          <a
            href="#destination" className="hover:text-white md:hover:text-orange transition delay-200"
            onClick={toggleMenu}
          >Destinos</a>
          <a
            href="#"
            className="hover:text-white md:hover:text-orange transition delay-200"
            onClick={toggleMenu}
          >Feedbacks</a>
        </div>
      </section>

      {isMenuOpen ? (
        <IoClose
          className="block md:hidden text-4xl text-orange font-bold cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <IoMenu
          className="block md:hidden text-4xl text-orange font-bold cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </nav>
  )
}

export default Header

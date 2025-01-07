import Image from 'next/image'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa6'
import { CiInstagram } from 'react-icons/ci'

const Footer = () => {
  return (
    <main className="px-[5%] py-[40px] pt-[120px] bg-white special-font">
      <section className="" data-aos="fade-down">
        <div className="flex justify-between flex-wrap gap-2">
          <div className="flex flex-col gap-2 mb-5 md:mb-0 w-full md:w-auto items-center md:items-start justify-center md:justify-start">
            <Image src="/img/logo.png" width={100} height={100} alt="logo" />
            <p className="text-[12px] text-litegrey font-semibold w-full md:max-w-[200px] text-center md:text-left">
            Planeje sua viagem com a JakTurismo e viva experiências incríveis.{' '}
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start justify-center md:justify-start w-full md:w-auto mt-5 md:mt-0">
            <div className="flex items-center gap-4">
            <a
                href="https://wa.me/5522992180473"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl p-2 text-litedark bg-white rounded-full shadow-md cursor-pointer"
                aria-label="WhatsApp JakTurismo"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/jak.turismo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl p-2 text-litedark bg-white rounded-full shadow-md cursor-pointer"
                aria-label="Instagram JakTurismo"
              >
                <CiInstagram />
              </a>
            </div>
          </div>
        </div>

        <p className="text-[14px] text-litegrey text-center font-normal mt-5 ">
          © 2025 JakTurismo - Todos os direitos reservados.
        </p>
      </section>
    </main>
  )
}

export default Footer

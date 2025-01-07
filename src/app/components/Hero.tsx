import Image from "next/image";
import Link from "next/link";
import { IoIosPlay } from "react-icons/io";

const Hero = () => {
return ( 
    <main className="relative w-full flex flex-col md:flex-row items-center justify-between py-[80px] md:py-[100px] px-[5%] bg bg-right-top bg-no-repeat bg-contain">
      <section className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center md:justify-start gap-3">
          <p className="text-[14px] text-[#fc970f] font-bold special-font" data-aos="fade-down">
            Descubra os melhores destinos com a Jaktour!
          </p>
         
          <h1 className="text-4xl md:text-5xl xl:text-6xl text-blue font-extrabold w-full lg:w-[80%] text-center md:text-left text-[#0e7cae]" data-aos="fade-down">
            Viaje, aproveite e crie momentos inesquecíveis
          </h1>

          <p className="text-[14px] text-litegrey font-bold w-full lg:w-[80%] xl:w-[65%] text-center md:text-left special-font" data-aos="fade-up">
            Explore destinos que vão além do comum, onde cada detalhe conta uma história. 
            Aventure-se, inspire-se e descubra o encanto de lugares únicos. Com a Jaktour, 
            cada viagem é planejada para ser memorável.
          </p>

          <div className="flex items-center gap-4 special-font" data-aos="fade-up">
            <a href="#category" className="py-3 px-5 rounded-md bg-[#fc970f] text-white text-[14px] font-bold flex items-center">
              Planeje Sua Viagem
            </a>
          </div>
      </section>

      <section className="relative mt-5 md:mt-0">
        <Image src="/img/hero-image.png" width={500} height={500} alt="heroimg" className="dangling-picture" loading="eager" />
      </section>
    </main>
  );
}
 
export default Hero;
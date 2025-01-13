import Image from "next/image";
import { TiLocationArrow } from "react-icons/ti";

const Destination = () => {
  const whatsappNumber = "+5522992180473";

    interface Destination {
        img: string;
        location: string;
        amount: string;
        days: string;
        sideImg: string;
    }

    const destination: Destination[] = [
      {
        img: "/img/carre.png",
        location: "Beto Carrero",
        amount: "R$249/mensal",
        days: "De 15 a 21 de julho de 2025",
        sideImg: ""
      },
      {
        img: "/img/marco-3-fronteiras.jpeg",
        location: "Marco das 3 fronteira",
        amount: "R$1,890 à vista",
        days: "De 22 a 28 de setembro de 2025",
        sideImg: ""
      },
      {
        img: "/img/jalapao.jpg",
        location: "Jalapão",
        amount: "R$249/mensal",
        days: "De 22 a 28 de novembro de 2025",
        sideImg: ""
      },
    ]
    return (
      <main className="relative w-full py-[80px] px-[5%] grid grid-cols-1 gap-6" id="destination">
        <section className="flex flex-col items-center text-center gap-4">
          <p className="text-[18px] text-[#fc970f] font-bold special-font" data-aos="fade-down">
            Os melhores lugares
          </p>
          
          <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-down">
            Próximos destinos
          </h2>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 lg:gap-8 xl:gap-16 special-font">
          {destination.map((destinations, index) => 
            <div className="relative flex flex-col rounded-2xl shadow-sm" key={index}>
              <div className="relative z-10" data-aos="fade-down">
                  <div className="h-[350px]">
                      <Image 
                        src={destinations.img} 
                        width={300} 
                        height={300} 
                        alt="img" 
                        className="w-full h-full rounded-[8px] object-contain" 
                      />
                  </div>
                  <div className="grid grid-cols-1 gap-2 p-4">
                      <div className="text-[18px] text-litegrey font-medium flex items-center justify-between gap-4">
                        <p>{destinations.location}</p> 
                        <p>{destinations.amount}</p>
                      </div>
                      <div className="text-[16px] text-litegrey font-medium flex items-center gap-1">
                        <TiLocationArrow className="text-litedark text-xl" /> 
                        <p>{destinations.days}</p>
                      </div>
                  </div>
              </div>

              {destinations.sideImg && <Image src={destinations.sideImg} width={80} height={80} alt="img" className="absolute right-[-15px] sm:right-[-30px] lg:right-[-50px] bottom-[90px]"/>}

              <div className="w-full max-w-[400px] mx-auto mt-4" data-aos="fade-down">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre o destino: ${encodeURIComponent(
                    destinations.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-md bg-[#fc970f] text-white text-[14px] font-bold flex items-center justify-center"
                >
                  Saber mais
                </a>
              </div>
            </div>
          )}
        </section>
      </main>
    );
}

export default Destination;
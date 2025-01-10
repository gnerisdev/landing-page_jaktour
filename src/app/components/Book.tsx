import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

const Book = () => {
  return (
    <main className="px-[5%] py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-6" id="bookings">
      <section className="grid grid-cols-1 gap-4">
        <p className="text-[16px] text-[#fc970f] font-bold text-center md:text-left special-font" data-aos="fade-down">A paixão que virou propósito</p>
        
        <h1 className="text-litedark text-3xl md:text-5xl text-center md:text-left font-extrabold w-full md:max-w-[500px]" data-aos="fade-down">
          Viagens que Transformam Vidas
        </h1>

        <div className="flex items-center gap-2 special-font">
          <div>
            <p className="text-[16px] text-litegrey font-normal max-w-[300px]" data-aos="fade-down">
              O turismo entrou em minha vida por um conselho valioso da minha melhor amiga. Durante anos,
              eu organizava as viagens do grupo do hospital, sempre me dedicando para oferecer o melhor, 
              mas sem receber o merecido reconhecimento. Foi então que minha amiga me disse: &quot;Deixe de 
              ser boazinha e transforme o turismo em algo mais. Faça disso um extra na sua vida, dê 
              valor ao que você faz.&quot;
              Essas palavras acenderam uma chama em mim. Decidi me valorizar e tornar o turismo não 
              apenas uma paixão, mas também um propósito. Assim começou minha jornada.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mt-20 md-mt-0 special-font">
        <div className=" p-4 rounded-2xl shadow-md w-[90%] md:max-w-[70%] grid grid-cols-1 gap-4 relative z-10 bg-white" data-aos="zoom-in">
          <div className="w-full">
            <Image src="/img/jaqueline.jpeg" width={300} height={200} alt="img" className="w-full" />
          </div>

          <div className="grid gap-2 relative bg-white w-full">
            <div className="p-4 rounded-2xl shadow-md max-w-[500px] absolute right-[-60px] bottom-6 bg-white" data-aos="slide-right">
              <div className="flex items-start justify-start gap-2">
                <div>
                  <p className="text-[14px] text-[#0e7cae]">Fundadora e CEO</p>
                  <h2 className="text-[18px] text-litedark font-bold">Jaqueline Sena</h2>

                  <div>
                    <p className="text-[14px] text-litedark font-bold">
                      <span className="text-[#0e7cae]">+50</span> viagens realizadas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image src="/img/blue-shadow.png" width={600} height={600} alt="img" className="absolute top-[-100px] md:top-[-130px] right-[-20px] md:right-0" />
      </section>
    </main>
  );
}

export default Book;
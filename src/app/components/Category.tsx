import Image from "next/image";

const Category = () => {
  interface Category {
    img: string;
    header: string;
    subheader: string;
  }

  const category : Category[] = [
    {
      img: "/img/travel-luggage.png",
      header: "Viagens",
      subheader: "Planejamos roteiros personalizados para você explorar o mundo com conforto e segurança.",
    },
    {
      img: "/img/hiking.png",
      header: "Turismo",
      subheader: "Oferecemos experiências únicas, mostrando o melhor de cada destino com atendimento de excelência.",
    },
    {
      img: "/img/pilgrim.png",
      header: "Excursões",
      subheader: "Guias especializados levam você a destinos fascinantes, garantindo aventuras inesquecíveis.",
    },
  ]

  return (
    <main className="relative w-full py-[100px] px-[5%] grid grid-cols-1 gap-4" id="category">
      <section className="flex flex-col items-center text-center gap-4">
        <p className="text-[18px] text-[#fc970f] font-bold special-font" data-aos="fade-down">
          Roteiros, turismo e aventuras sob medida
        </p>
        
        <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-down">
          Oferecemos
        </h2>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center items-stretch gap-6 lg:gap-10 special-font">
        {category.map((categories, index) =>
          <div className="relative parent" key={index}>
            <div className="first-child relative flex flex-col items-center p-10 sm:p-4 xl:p-10 rounded-3xl gap-4 z-10 bg-white h-full">
              <div>
                <Image src={categories.img} width={100} height={100} alt="img"  data-aos="fade-down"/>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-[20px] text-litedark font-bold" data-aos="fade-down">{categories.header}</h2>
                <p className="text-[16px] text-litegrey" data-aos="fade-down">{categories.subheader}</p>
              </div>
            </div>
            <div className="second-child hidden p-6 lg:p-8 bg-[#fc970f] rounded-tl-3xl rounded-br-lg absolute bottom-[-18px] lg:bottom-[-25px] left-[-15px] lg:left-[-20px]"></div>
          </div>
        )}
      </section>

      <Image src="/img/grid.png" width={100} height={100} alt="grid" className=" w-[18%] md:w-[8%] absolute top-[70px] right-5 lg:right-20"/>
    </main>
  );
}

export default Category;
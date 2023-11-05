const Home = () => {
  return (
    <>
      <section className="bg-[url('/hero.jpg')] min-h-[400px] bg-cover bg-center relative rounded-md overflow-hidden">
        <div className="absolute bg-[rgba(0,0,0,.8)] w-full h-full p-5 flex justify-center flex-col items-center">
          <h1 className="h1 text-white text-center">
            ¡Bienvenido a FlashFood!
          </h1>
          <p className="text-white text-center">
            Las mejores pizzas y hamburgesas en Bogotá.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 my-5 gap-5">
        <div className="bg-[url('/pizzas.jpg')] min-h-[300px] bg-cover bg-center relative rounded-md overflow-hidden">
          <div className="absolute bg-[rgba(0,0,0,.8)] w-full h-full p-5 flex justify-center flex-col items-start">
            <h1 className="h2 text-white">Ordena las mejores pizzas.</h1>
            <p className="text-white">
              Tenemos deliciosas pizzas, variadas y con ingredientes premium.
            </p>
          </div>
        </div>

        <div className="bg-[url('/burgers.jpg')] min-h-[300px] bg-cover bg-center relative rounded-md overflow-hidden">
          <div className="absolute bg-[rgba(0,0,0,.8)] w-full h-full p-5 flex justify-center flex-col items-start">
            <h1 className="h2 text-white">Ordena las mejores hamburgesas.</h1>
            <p className="text-white">
              Tenemos deliciosas hamburgesas, variadas y con ingredientes
              premium.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[url('/delivery.jpg')] min-h-[400px] bg-cover bg-center relative rounded-md overflow-hidden">
          <div className="absolute bg-[rgba(0,0,0,.8)] w-full h-full p-5 flex justify-center flex-col items-center">
            <h1 className="h2 text-white">Domicilios rapidos y seguros.</h1>
            <p className="text-white">
              Ordena con la tranquilidad que tu orden llegará a la puerta de tu
              casa a la hora programada.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

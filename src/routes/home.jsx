const Home = () => {
  return (
    <>
      <section className="bg-[url('/hero.jpg')] min-h-[400px] bg-cover bg-center relative rounded-md overflow-hidden">
        <div className="absolute bg-[rgba(0,0,0,.6)] w-full h-full p-5 flex justify-center flex-col items-center">
          <h1 className="h1 text-white text-center">
            ¡Bienvenido a FlashFood!
          </h1>
          <p className="text-white text-center">
            Deliciosamente rápido, simplemente irresistible.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <section className="bg-[url('/pizzas.jpg')] min-h-[300px] bg-cover bg-center relative rounded-md overflow-hidden">
          <div className="absolute bg-[rgba(0,0,0,.6)] w-full h-full p-5 flex justify-center flex-col items-center">
            <h2 className="h2 text-white text-center">¡Pizzas de todo tipo!</h2>
            <p className="text-white text-center">
              En nuestro menú podras encontrar pizzas para todos los paladares.
            </p>
          </div>
        </section>

        <section className="bg-[url('/burgers.jpg')] min-h-[300px] bg-cover bg-center relative rounded-md overflow-hidden">
          <div className="absolute bg-[rgba(0,0,0,.6)] w-full h-full p-5 flex justify-center flex-col items-center">
            <h2 className="h2 text-white text-center">
              ¡Hamburgesas variadas!
            </h2>
            <p className="text-white text-center">
              En nuestro menú podras encontrar hamburgesas unicas y con un sabor
              diferencial.
            </p>
          </div>
        </section>
      </section>

      <section className="bg-[url('/delivery.jpg')] min-h-[400px] bg-cover bg-center relative rounded-md overflow-hidden">
        <div className="absolute bg-[rgba(0,0,0,.6)] w-full h-full p-5 flex justify-center flex-col items-center">
          <h1 className="h2 text-white text-center">
            Domicilios rapidos y seguros.
          </h1>
          <p className="text-white text-center">
            Ordena con la tranquilidad que tu orden llegará a la puerta de tu
            casa a la hora programada.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

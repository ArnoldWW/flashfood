import { timestampToDate } from "../helpers";

const Order = ({ order }) => {
  const { orderNumber, cart, totalPay, address, status, number, date } = order;

  return (
    <div className="pb-5 border-b last-of-type:border-none">
      <h2 className="h2">
        Pedido <span className="text-orange-400">#</span>
        {orderNumber}
      </h2>
      <div className="flex justify-between gap-2">
        <div className="flex-1">
          <div>
            {cart.map((product) => (
              <ul className="list-disc ml-5" key={product.id}>
                <li>
                  <img
                    alt={product.name}
                    src={product.img}
                    className="w-10 inline-block mr-3"
                  />
                  <p className="inline-block">
                    {product.name} ({product.quantity} x ${product.price})
                  </p>
                </li>
              </ul>
            ))}
            <p className="font-bold">
              Total a pagar: <span className="font-normal">${totalPay}</span>
            </p>
          </div>

          <div>
            <p className="font-bold">
              Direccion: <span className="font-normal">{address}</span>
            </p>
            <p className="font-bold">
              Numero de Tel: <span className="font-normal">+57 {number}</span>
            </p>
            <p className="font-bold">
              Estado: <span className="font-normal">{status}</span>
            </p>
            <p className="font-bold">
              Fecha del pedido:{" "}
              <span className="font-normal">{timestampToDate(date)}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <button className="btn">Cancelar pedido</button>
          <button className="btn">Calificar pedido</button>
        </div>
      </div>
    </div>
  );
};

export default Order;

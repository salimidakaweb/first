import CartItems from "../comp/CartItems";
import Cont from "../comp/Cont";

export default function Cart() {
  return (
    <Cont>
      <div>
        <h1 className="pb-2">cart item</h1>

        <CartItems />
      </div>
      <div className="border shadow-md p-4">
        <h3>total price: 100$</h3>
        <h3>win: 10$</h3>
        <h3>final price: 90$</h3>
        <div className="mt-2">
          <input className="border" placeholder="trial code" type="number" />
          <button className="bg-amber-300 rounded ml-1 px-1">submit</button>
        </div>
      </div>

    </Cont>
  );
}

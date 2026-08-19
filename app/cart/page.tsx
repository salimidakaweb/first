import CartItems from "../comp/CartItems";
import Cont from "../comp/Cont";

export default function Cart() {
  return (
    <Cont>
      <div>
        <h1 className="pb-2">cart item</h1>

          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
        </div>

    </Cont>
  );
}

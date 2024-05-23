import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //   console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-12 p-16 text-center ">
      <h1 className="font-bold text-xl">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Cart is empty. Add Items to the cart.</h1>}
      <div className="margin-auto flex flex-col items-center justify-start w-[70%] h-screen">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;

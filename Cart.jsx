import { useCart } from '../context/CartContext';

function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

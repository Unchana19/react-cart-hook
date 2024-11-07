import { useCart } from "../hooks/useCart";
import { CartDataInterface } from "../interfaces/CartData.interface";
import { formatNumber } from "../utils/format-number";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="shopping-cart">
        <h1 className="empty">ไม่มีสินค้าในตะกร้า</h1>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className="title">สินค้าในตะกร้า</div>
      {cart?.map((data: CartDataInterface) => (
        <CartItem key={data.id} data={data} />
      ))}
      <div className="footer">ยอดรวม {formatNumber(total)}</div>
    </div>
  );
};

export default Cart;

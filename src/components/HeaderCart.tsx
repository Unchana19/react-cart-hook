import { useCart } from "../hooks/useCart";

const HeaderCart = () => {
  const { amount } = useCart();

  return (
    <button className="button">
      <span>ตะกร้าสินค้า</span>
      <span className="badge">{amount}</span>
    </button>
  );
};

export default HeaderCart;

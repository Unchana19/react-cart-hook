import { CartDataInterface } from "../interfaces/CartData.interface";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";
import deleteIcon from "../images/delete-icn.svg";
import { useCart } from "../hooks/useCart";
import { formatNumber } from "../utils/format-number";

interface Props {
  data: CartDataInterface;
}

const CartItem = ({ data }: Props) => {
  const { removeItem, toggleQuantity } = useCart();

  return (
    <div className="item">
      <div className="product-image">
        <img src={data.image_url} alt={data.name} />
      </div>
      <div className="description">
        <span>{data.name}</span>
        <span>ราคา {formatNumber(data.price)} บาท</span>
      </div>
      <div className="quantity">
        <button
          className="plus-btn"
          onClick={() => toggleQuantity(data.id, "increment")}
        >
          <img src={plus} alt="" />
        </button>
        <input type="text" value={data.quantity} disabled />
        <button
          className="minus-btn"
          onClick={() => toggleQuantity(data.id, "decrement")}
        >
          <img src={minus} alt="" />
        </button>
      </div>
      <div className="total-price">
        {formatNumber(data.quantity * data.price)}
      </div>
      <div className="remove" onClick={() => removeItem(data.id)}>
        <img src={deleteIcon} alt="" />
      </div>
    </div>
  );
};

export default CartItem;

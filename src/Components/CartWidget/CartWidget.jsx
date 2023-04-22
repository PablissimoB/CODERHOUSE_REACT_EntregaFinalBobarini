import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";

import { useContext } from "react"

import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {

  const { getTotalQuantity } = useContext( CartContext )
  const total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart white">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "greenyellow",
          }}
        />
        <div className="bubble-counter white">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;

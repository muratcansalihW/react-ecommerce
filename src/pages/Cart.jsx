import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  if (state.cart.length === 0) {
    return <h2>Sepetiniz boş.</h2>;
  }

  return (
    <div>
      <h2>Sepetim</h2>

      {state.cart.map((item) => (
        <div
          key={item.id}
          className="cart-item"
          style={{ marginBottom: "20px" }}
        >
          <img src={item.image} width={80} alt={item.title} />

          <div style={{ marginLeft: "20px" }}>
            <h4>{item.title}</h4>
            <p>{item.price} TL</p>

            <button
              className="btn"
              onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
            >
              -
            </button>

            <span style={{ margin: "0 10px" }}>{item.quantity}</span>

            <button
              className="btn"
              onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
            >
              +
            </button>

            <button
              className="btn"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
              style={{ marginLeft: "15px" }}
            >
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

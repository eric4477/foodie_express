import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { allMeals, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Object.values(allMeals).map((item, index) => {
          if (cartItems[item.idMeal] > 0) {
            return (
              <div key={index}>
                <div className="cart-item-info cart-items-item">
                  <img src={item.strMealThumb} alt="item" />
                  <p>{item.strMeal}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.idMeal]}</p>
                  <p>${(item.price * cartItems[item.idMeal]).toFixed(2)}</p>
                  <IoCloseSharp
                    onClick={() => removeFromCart(item.idMeal)}
                    className="cross"
                  />
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() && 5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() && getTotalCartAmount() + 5}</b>
            </div>
          </div>
          {getTotalCartAmount() && (
            <button onClick={() => navigate("/order")}>
              PROCEED TO CHECKOUT
            </button>
          )}
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/cart.context";
import CartMenu from "./CartMenu/CartMenu";
import { useUiActions, useUiState } from "../../context/ui.context";

function NavBar() {
  const location = useLocation();
  const { isCartOpen } = useUiState();
  const { setIsCartOpen } = useUiActions();
  const cart = useCart();

  const pathWhereNotToDisplayCart = location.pathname.includes("/order") || location.pathname.includes("/cart")

  console.warn(location)

  return (
    <nav className="ulNav">
      <Link to="/">
        <img
          className="logo"
          src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&s=3f7493995143d3cf40b1fedc582607cea194b579"
          alt="react-icon"
        />
      </Link>
      {!pathWhereNotToDisplayCart && (
        <div className="cart-container">
          <img
            className="cart"
            onClick={() => setIsCartOpen(!isCartOpen)}
            src="https://www.flaticon.com/svg/vstatic/svg/3916/3916598.svg?token=exp=1671901397~hmac=dfe9515ed0b9ab3bc21b40b489aa42a6"
            alt="cart"
          />
          <div
            className={
              cart.length > 0 ? "cart-indicator" : "cart-indicator no-display"
            }
          >
            {cart.length}
          </div>
          {isCartOpen && (
            <p className="cart-menu">
              {cart.length > 0 ? (
                <CartMenu cart={cart} />
              ) : (
                "Tu carrito esta vacio"
              )}
            </p>
          )}
        </div>
      )}
    </nav>
  );
}
export default NavBar;

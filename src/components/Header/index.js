import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container-large">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo-header"
        alt="website logo"
      />
      <ul className="nav-items-container">
        <li className="nav-item">Home</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">Cart</li>
        <button type="button" className="logout-button">
          Logout
        </button>
      </ul>
    </div>
    <div className="nav-container-mobile">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo-header"
        alt="website logo"
      />
      <button type="button" className="logout-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="nav-logout"
          alt="nav logout"
        />
      </button>
    </div>
    <ul className="nav-sub-container-mobile">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          className="nav-home-products-cart"
          alt="nav home"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          className="nav-home-products-cart"
          alt="nav products"
        />
      </li>
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          className="nav-home-products-cart"
          alt="nav cart"
        />
      </li>
    </ul>
  </nav>
)

export default Header

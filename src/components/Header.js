import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
      <div className="header" id="header">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={() => {
              if (loggedIn) {
                setLoggedIn(false)
              } else {
                setLoggedIn(true)

              }
            }}>{loggedIn == true ? 'Logout': 'Login'}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;
  
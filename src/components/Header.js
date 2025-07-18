import { useState , useEffect} from "react";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
      console.log("header")
    }, []);

    // if empty dependency array use effect will be called only once on the initial render.
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
          <li>
              <Link to="/">
                Home
              </Link>
              </li>
            <li>
              <Link to="/about">
                About Us
              </Link>
             </li>
            <li>
              <Link to="/contact">
              Contact Us
              </Link>
             </li>
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
  
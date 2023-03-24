import { useState } from "react";
import Title from "./Title";
import userIcon from "../images/user_icon.png";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      {/* {title} */}
      {/* {xyz}
        {console.log("React JS")} */}
      {/* {heading} */}
      {/* <h1>Namaste React FC</h1> */}
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {/* <div className="user-Icon">
        <a href="#">
          <img src={userIcon} alt="usericon" />
        </a>
      </div> */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default HeaderComponent;

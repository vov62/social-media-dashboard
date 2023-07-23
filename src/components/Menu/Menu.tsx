import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link to="/" className="listItem">
          <img src="/home.svg" alt="Overview" />
          <span className="listItemTitle"> Overview</span>
        </Link>
        <Link to="/analytics" className="listItem">
          <img src="/chart.svg" alt="Analytics" />
          <span className="listItemTitle"> Analytics</span>
        </Link>
        <Link to="account/" className="listItem">
          <img src="/profile.svg" alt="Account" />
          <span className="listItemTitle"> Account</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;

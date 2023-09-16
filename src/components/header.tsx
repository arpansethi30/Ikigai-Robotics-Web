import { Link } from "react-router-dom";
import { Logo } from "./logo";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="header">
      <Logo />
      <nav className="window">
        <ul>
          <li>
            <Link to="/coming-soon" className="link">
              Product
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className="link">
              Service
            </Link>
          </li>
          <li>
            <Link to="/coming-soon" className="link">
              Store
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="icons window">
        <div className="icon">
          <Link to="/coming-soon">
            <img src="assets/bag.svg" alt="bag-icon" />
          </Link>
        </div>
        <div className="icon">
          <Link to="/coming-soon">
            <img src="assets/profile.svg" alt="profile-icon" />
          </Link>
        </div>
      </div>
      <div className="menu-icon">
        <img src="assets/menu.svg" alt="profile-icon" />
      </div>
    </div>
  );
};

import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/DnD_Location.svg';
import './nav-bar.styles.scss';

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
